let nock = require('nock');

module.exports.testInfo = {}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/1share-with-dash156758484024707760')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'c465ec43-001a-0147-1bf8-6262d5000000',
  'x-ms-client-request-id',
  '7120f2d4-fdb5-4bdc-8db4-3adcd28c9261',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Wed, 04 Sep 2019 08:14:25 GMT',
  'Connection',
  'close' ]);

