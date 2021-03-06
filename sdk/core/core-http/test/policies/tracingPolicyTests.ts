// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { assert } from "chai";
import sinon from "sinon";
import { RequestPolicy, WebResource, HttpOperationResponse, HttpHeaders, Tracer, Span, TracerProxy, RequestPolicyOptions, TraceOptions, NoOpTracePlugin, TracerNoOpImpl } from "../../lib/coreHttp";
import { tracingPolicy } from "../../lib/policies/tracingPolicy";

interface MockTracer extends Tracer {
  getStartedSpans(): any[];
  startSpanCalled(): boolean;
}

describe("tracingPolicy", function () {
  function mockTracerFactory(
    traceId?: string,
    spanId?: string,
    options?: TraceOptions,
    state?: string
  ): MockTracer {
    let startedSpan = false;
    const spans: any[] = [];
    return {
      // helper method for testing
      getStartedSpans() {
        return spans;
      },
      // helper method for testing
      startSpanCalled() {
        return startedSpan;
      },
      startSpan() {
        startedSpan = true;
        let started = false;
        let ended = false;
        const mockSpan = {
          didStart() {
            return started;
          },
          didEnd() {
            return ended;
          },
          start() {
            started = true;
          },
          end() {
            ended = true;
          },
          context() {
            return {
              traceId,
              spanId,
              traceOptions: options,
              traceState: {
                serialize() {
                  return state
                }
              }
            }
          }
        };
        spans.push(mockSpan);
        return mockSpan as any as Span;
      }
    } as any;
  }
  const mockPolicy: RequestPolicy = {
    sendRequest(request: WebResource): Promise<HttpOperationResponse> {
      return Promise.resolve({
        request: request,
        status: 200,
        headers: new HttpHeaders()
      });
    }
  };

  afterEach(function () {
    if (typeof (TracerProxy.getTracer as sinon.SinonStub).restore === "function") {
      (TracerProxy.getTracer as sinon.SinonStub).restore();
    }
  });

  it("will not create a span if spanOptions are missing", async () => {
    const mockTracer = mockTracerFactory();
    sinon.stub(TracerProxy, "getTracer").callsFake(() => {
      return mockTracer;
    });
    const request = new WebResource();
    const policy = tracingPolicy().create(mockPolicy, new RequestPolicyOptions());
    await policy.sendRequest(request);

    assert.isFalse(mockTracer.startSpanCalled());
  });

  it("will create a span and correctly set trace headers if spanOptions are available", async () => {
    const mockTraceId = "11111111111111111111111111111111";
    const mockSpanId = "2222222222222222";
    const mockTracer = mockTracerFactory(mockTraceId, mockSpanId, TraceOptions.SAMPLED);
    sinon.stub(TracerProxy, "getTracer").callsFake(() => {
      return mockTracer;
    });
    const request = new WebResource();
    request.spanOptions = {
      parent: {} // stub a parent since we aren't testing the startSpan method
    };
    const policy = tracingPolicy().create(mockPolicy, new RequestPolicyOptions());
    await policy.sendRequest(request);

    assert.isTrue(mockTracer.startSpanCalled());
    assert.lengthOf(mockTracer.getStartedSpans(), 1);
    const span = mockTracer.getStartedSpans()[0];
    assert.isTrue(span.didStart());
    assert.isTrue(span.didEnd());

    assert.equal(request.headers.get("traceparent"), `${mockTraceId}-${mockSpanId}-${TraceOptions.SAMPLED}`);
    assert.notExists(request.headers.get("tracestate"));
  });

  it("will create a span and correctly set trace headers if spanOptions are available (no TraceOptions)", async () => {
    const mockTraceId = "11111111111111111111111111111111";
    const mockSpanId = "2222222222222222";
    // leave out the TraceOptions
    const mockTracer = mockTracerFactory(mockTraceId, mockSpanId);
    sinon.stub(TracerProxy, "getTracer").callsFake(() => {
      return mockTracer;
    });
    const request = new WebResource();
    request.spanOptions = {
      parent: {} // stub a parent since we aren't testing the startSpan method
    };
    const policy = tracingPolicy().create(mockPolicy, new RequestPolicyOptions());
    await policy.sendRequest(request);

    assert.isTrue(mockTracer.startSpanCalled());
    assert.lengthOf(mockTracer.getStartedSpans(), 1);
    const span = mockTracer.getStartedSpans()[0];
    assert.isTrue(span.didStart());
    assert.isTrue(span.didEnd());

    assert.equal(request.headers.get("traceparent"), `${mockTraceId}-${mockSpanId}-${TraceOptions.UNSAMPLED}`);
    assert.notExists(request.headers.get("tracestate"));
  });

  it("will create a span and correctly set trace headers if spanOptions are available (TraceState)", async () => {
    const mockTraceId = "11111111111111111111111111111111";
    const mockSpanId = "2222222222222222";
    const mockTraceState = "foo=bar";
    const mockTracer = mockTracerFactory(mockTraceId, mockSpanId, TraceOptions.SAMPLED, mockTraceState);
    sinon.stub(TracerProxy, "getTracer").callsFake(() => {
      return mockTracer;
    });
    const request = new WebResource();
    request.spanOptions = {
      parent: {} // stub a parent since we aren't testing the startSpan method
    };
    const policy = tracingPolicy().create(mockPolicy, new RequestPolicyOptions());
    await policy.sendRequest(request);

    assert.isTrue(mockTracer.startSpanCalled());
    assert.lengthOf(mockTracer.getStartedSpans(), 1);
    const span = mockTracer.getStartedSpans()[0];
    assert.isTrue(span.didStart());
    assert.isTrue(span.didEnd());

    assert.equal(request.headers.get("traceparent"), `${mockTraceId}-${mockSpanId}-${TraceOptions.SAMPLED}`);
    assert.equal(request.headers.get("tracestate"), mockTraceState);
  });

  it("will close a span if an error is encountered", async () => {
    const mockTraceId = "11111111111111111111111111111111";
    const mockSpanId = "2222222222222222";
    const mockTraceState = "foo=bar";
    const mockTracer = mockTracerFactory(mockTraceId, mockSpanId, TraceOptions.SAMPLED, mockTraceState);
    sinon.stub(TracerProxy, "getTracer").callsFake(() => {
      return mockTracer;
    });
    const request = new WebResource();
    request.spanOptions = {
      parent: {} // stub a parent since we aren't testing the startSpan method
    };
    const policy = tracingPolicy().create({
      sendRequest(request: WebResource): Promise<HttpOperationResponse> {
        return Promise.reject({
          request: request,
          status: 404,
          headers: new HttpHeaders()
        });
      }
    }, new RequestPolicyOptions());
    try {
      await policy.sendRequest(request);
      throw new Error("Test Failure");
    } catch (err) {
      assert.notEqual(err.message, "Test Failure");
      assert.isTrue(mockTracer.startSpanCalled());
      assert.lengthOf(mockTracer.getStartedSpans(), 1);
      const span = mockTracer.getStartedSpans()[0];
      assert.isTrue(span.didStart());
      assert.isTrue(span.didEnd());

      assert.equal(request.headers.get("traceparent"), `${mockTraceId}-${mockSpanId}-${TraceOptions.SAMPLED}`);
      assert.equal(request.headers.get("tracestate"), mockTraceState);
    }
  });

  it("will not set headers if span is a NoOpSpan", async () => {
    sinon.stub(TracerProxy, "getTracer").callsFake(() => {
      return new NoOpTracePlugin(new TracerNoOpImpl());
    });

    const request = new WebResource();
    request.spanOptions = {
      parent: {} // stub a parent since we aren't testing the startSpan method
    };
    const policy = tracingPolicy().create(mockPolicy, new RequestPolicyOptions());
    await policy.sendRequest(request);

    assert.notExists(request.headers.get("traceparent"));
    assert.notExists(request.headers.get("tracestate"));
  });


});
