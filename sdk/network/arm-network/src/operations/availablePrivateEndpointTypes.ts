/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/availablePrivateEndpointTypesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a AvailablePrivateEndpointTypes. */
export class AvailablePrivateEndpointTypes {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a AvailablePrivateEndpointTypes.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns all of the resource types that can be linked to a Private Endpoint in this subscription
   * in this region.
   * @param location The location of the domain name.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailablePrivateEndpointTypesListResponse>
   */
  list(location: string, options?: msRest.RequestOptionsBase): Promise<Models.AvailablePrivateEndpointTypesListResponse>;
  /**
   * @param location The location of the domain name.
   * @param callback The callback
   */
  list(location: string, callback: msRest.ServiceCallback<Models.AvailablePrivateEndpointTypesResult>): void;
  /**
   * @param location The location of the domain name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailablePrivateEndpointTypesResult>): void;
  list(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailablePrivateEndpointTypesResult>, callback?: msRest.ServiceCallback<Models.AvailablePrivateEndpointTypesResult>): Promise<Models.AvailablePrivateEndpointTypesListResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AvailablePrivateEndpointTypesListResponse>;
  }

  /**
   * Returns all of the resource types that can be linked to a Private Endpoint in this subscription
   * in this region.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailablePrivateEndpointTypesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AvailablePrivateEndpointTypesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AvailablePrivateEndpointTypesResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailablePrivateEndpointTypesResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailablePrivateEndpointTypesResult>, callback?: msRest.ServiceCallback<Models.AvailablePrivateEndpointTypesResult>): Promise<Models.AvailablePrivateEndpointTypesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AvailablePrivateEndpointTypesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/availablePrivateEndpointTypes",
  urlParameters: [
    Parameters.location0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailablePrivateEndpointTypesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailablePrivateEndpointTypesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
