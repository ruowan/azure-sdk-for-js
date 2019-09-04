let nock = require('nock');

module.exports.testInfo = {"share":"share156758477244601265","dir":"dir156758477289104732","file":"file156758477330105428"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156758477244601265')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:52 GMT',
  'ETag',
  '"0x8D7310FAF08B2D6"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8e7107d9-001a-0058-05f8-622fdc000000',
  'x-ms-client-request-id',
  'fd738f50-4865-43c9-8307-3047c98e5cda',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Wed, 04 Sep 2019 08:12:52 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156758477244601265/dir156758477289104732')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:53 GMT',
  'ETag',
  '"0x8D7310FAF4983EC"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '69faf7e9-301a-001e-5df8-621b5b000000',
  'x-ms-client-request-id',
  '21fde0c9-ecf7-4891-b11b-5066a6196886',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-04T08:12:53.1315692Z',
  'x-ms-file-last-write-time',
  '2019-09-04T08:12:53.1315692Z',
  'x-ms-file-creation-time',
  '2019-09-04T08:12:53.1315692Z',
  'x-ms-file-permission-key',
  '1237041589013461953*8787082347076103240',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 04 Sep 2019 08:12:52 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156758477244601265/dir156758477289104732/file156758477330105428')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:53 GMT',
  'ETag',
  '"0x8D7310FAF878656"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a7d4b618-301a-014c-1cf8-6299be000000',
  'x-ms-client-request-id',
  '02e06810-986d-4596-b09e-92179c4b4496',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-04T08:12:53.5379542Z',
  'x-ms-file-last-write-time',
  '2019-09-04T08:12:53.5379542Z',
  'x-ms-file-creation-time',
  '2019-09-04T08:12:53.5379542Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 04 Sep 2019 08:12:53 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share156758477244601265/dir156758477289104732/file156758477330105428')
  .reply(200, "", [ 'Content-Length',
  '11',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:53 GMT',
  'ETag',
  '"0x8D7310FAF878656"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '6e5f9cb1-c01a-009c-67f8-625ae5000000',
  'x-ms-client-request-id',
  'def7f954-4489-469b-9955-9b16c05bcca3',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-04T08:12:53.5379542Z',
  'x-ms-file-last-write-time',
  '2019-09-04T08:12:53.5379542Z',
  'x-ms-file-creation-time',
  '2019-09-04T08:12:53.5379542Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 04 Sep 2019 08:12:52 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156758477244601265/dir156758477289104732/file156758477330105428')
  .query(true)
  .reply(200, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:54 GMT',
  'ETag',
  '"0x8D7310FB003B244"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '261065fd-201a-0122-3df8-62cc91000000',
  'x-ms-client-request-id',
  'd163c172-543d-454f-8b71-3f39c47de85b',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-04T08:12:54.3517252Z',
  'x-ms-file-last-write-time',
  '2019-09-04T08:12:53.5379542Z',
  'x-ms-file-creation-time',
  '2019-09-04T08:12:53.5379542Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 04 Sep 2019 08:12:53 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share156758477244601265/dir156758477289104732/file156758477330105428')
  .reply(200, "", [ 'Content-Length',
  '1',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:54 GMT',
  'ETag',
  '"0x8D7310FB003B244"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '748b5c42-b01a-0120-32f8-627229000000',
  'x-ms-client-request-id',
  'b38c6f5f-7dc4-472c-b973-cc88c6f2d948',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-04T08:12:54.3517252Z',
  'x-ms-file-last-write-time',
  '2019-09-04T08:12:53.5379542Z',
  'x-ms-file-creation-time',
  '2019-09-04T08:12:53.5379542Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 04 Sep 2019 08:12:53 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share156758477244601265')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'bea6e59c-c01a-0148-42f8-6214b9000000',
  'x-ms-client-request-id',
  '8e89cb88-4d3c-40b1-898c-fd1a53569c7a',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Wed, 04 Sep 2019 08:12:54 GMT',
  'Connection',
  'close' ]);

