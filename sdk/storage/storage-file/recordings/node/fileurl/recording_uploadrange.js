let nock = require('nock');

module.exports.testInfo = {"share":"share156758477532902681","dir":"dir156758477576207425","file":"file156758477617609966"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156758477532902681')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:55 GMT',
  'ETag',
  '"0x8D7310FB0BEB349"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '1e11c872-601a-005e-20f8-621c63000000',
  'x-ms-client-request-id',
  '2579792f-7297-4d0f-859c-9fa73152a6d2',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Wed, 04 Sep 2019 08:12:55 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156758477532902681/dir156758477576207425')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:56 GMT',
  'ETag',
  '"0x8D7310FB0FF3F2B"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '4fb02c99-401a-002b-6cf8-62774f000000',
  'x-ms-client-request-id',
  'a349b825-e07d-4d58-a73c-4cff41670c8e',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-04T08:12:56.0002859Z',
  'x-ms-file-last-write-time',
  '2019-09-04T08:12:56.0002859Z',
  'x-ms-file-creation-time',
  '2019-09-04T08:12:56.0002859Z',
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
  'Wed, 04 Sep 2019 08:12:55 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156758477532902681/dir156758477576207425/file156758477617609966')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:56 GMT',
  'ETag',
  '"0x8D7310FB1402880"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '243b233b-001a-00ac-45f8-62e42a000000',
  'x-ms-client-request-id',
  '8598ef72-3cab-4b3c-a592-5fa818870c10',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-04T08:12:56.4256896Z',
  'x-ms-file-last-write-time',
  '2019-09-04T08:12:56.4256896Z',
  'x-ms-file-creation-time',
  '2019-09-04T08:12:56.4256896Z',
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
  'Wed, 04 Sep 2019 08:12:55 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156758477532902681/dir156758477576207425/file156758477617609966', "Hello")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'ixqZU8RhEpaoJ6v4xHgE1w==',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:56 GMT',
  'ETag',
  '"0x8D7310FB17EA02F"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '45e3d477-701a-00d4-55f8-6247d2000000',
  'x-ms-client-request-id',
  'b5d332fb-6be1-47ea-bce9-b1a7462c87ad',
  'x-ms-version',
  '2019-02-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 04 Sep 2019 08:12:56 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156758477532902681/dir156758477576207425/file156758477617609966', "World")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  '9aeSTmIehMkoCpon4by39g==',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:57 GMT',
  'ETag',
  '"0x8D7310FB1C5A575"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '682a03c3-f01a-00f5-06f8-6263a9000000',
  'x-ms-client-request-id',
  '8ffbaab7-07b9-4917-afae-d33ad0aa8262',
  'x-ms-version',
  '2019-02-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 04 Sep 2019 08:12:57 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share156758477532902681/dir156758477576207425/file156758477617609966')
  .reply(206, "HelloWor", [ 'Content-Length',
  '8',
  'Content-Type',
  'application/octet-stream',
  'Content-Range',
  'bytes 0-7/10',
  'Last-Modified',
  'Wed, 04 Sep 2019 08:12:57 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7310FB1C5A575"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '45e62d61-c01a-0078-23f8-62547b000000',
  'x-ms-client-request-id',
  '56f1d914-3103-428a-bebf-f3a0723430c1',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-04T08:12:56.4256896Z',
  'x-ms-file-last-write-time',
  '2019-09-04T08:12:56.4256896Z',
  'x-ms-file-creation-time',
  '2019-09-04T08:12:56.4256896Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Range,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 04 Sep 2019 08:12:57 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share156758477532902681')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '57880fc4-201a-005f-6bf8-6243bf000000',
  'x-ms-client-request-id',
  '6222e13e-801e-4b0d-b73b-1503b6e622a2',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Wed, 04 Sep 2019 08:12:57 GMT',
  'Connection',
  'close' ]);

