let nock = require('nock');

module.exports.testInfo = {"ру́сский язы́к":"ру́сский язы́к156758485400107335"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/1share-with-dash156758484024707760/dir156758484024801012/%25D1%2580%25D1%2583%25CC%2581%25D1%2581%25D1%2581%25D0%25BA%25D0%25B8%25D0%25B9%2520%25D1%258F%25D0%25B7%25D1%258B%25CC%2581%25D0%25BA156758485400107335')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:14:14 GMT',
  'ETag',
  '"0x8D7310FDFA1E580"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '98a1b822-e01a-000d-08f8-623f57000000',
  'x-ms-client-request-id',
  '088dcf80-511d-4ccf-92ce-ffeaaba1a0be',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-04T08:14:14.2414208Z',
  'x-ms-file-last-write-time',
  '2019-09-04T08:14:14.2414208Z',
  'x-ms-file-creation-time',
  '2019-09-04T08:14:14.2414208Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835172404491452416',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 04 Sep 2019 08:14:14 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/1share-with-dash156758484024707760/dir156758484024801012/%25D1%2580%25D1%2583%25CC%2581%25D1%2581%25D1%2581%25D0%25BA%25D0%25B8%25D0%25B9%2520%25D1%258F%25D0%25B7%25D1%258B%25CC%2581%25D0%25BA156758485400107335')
  .reply(200, "", [ 'Content-Length',
  '10',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:14:14 GMT',
  'ETag',
  '"0x8D7310FDFA1E580"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '12f96393-b01a-0096-3af8-62fe52000000',
  'x-ms-client-request-id',
  '8caec719-8d5e-42ad-9e45-352cc68a4a90',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-04T08:14:14.2414208Z',
  'x-ms-file-last-write-time',
  '2019-09-04T08:14:14.2414208Z',
  'x-ms-file-creation-time',
  '2019-09-04T08:14:14.2414208Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835172404491452416',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 04 Sep 2019 08:14:14 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/1share-with-dash156758484024707760/dir156758484024801012')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"1share-with-dash156758484024707760\" DirectoryPath=\"dir156758484024801012\"><Prefix>%D1%80%D1%83%CC%81%D1%81%D1%81%D0%BA%D0%B8%D0%B9%20%D1%8F%D0%B7%D1%8B%CC%81%D0%BA156758485400107335</Prefix><Entries><File><Name>%D1%80%D1%83%CC%81%D1%81%D1%81%D0%BA%D0%B8%D0%B9%20%D1%8F%D0%B7%D1%8B%CC%81%D0%BA156758485400107335</Name><Properties><Content-Length>10</Content-Length></Properties></File></Entries><NextMarker /></EnumerationResults>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '7f11e886-101a-007b-7af8-62b51f000000',
  'x-ms-client-request-id',
  'cd1e819f-264f-4351-8c56-7751729fa49c',
  'x-ms-version',
  '2019-02-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 04 Sep 2019 08:14:14 GMT',
  'Connection',
  'close' ]);

