let nock = require('nock');

module.exports.testInfo = {"undefined":"2019-09-04T08:14:41.631Z"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\"><Shares><Share><Name>share156750010067308740</Name><Properties><Last-Modified>Tue, 03 Sep 2019 08:42:57 GMT</Last-Modified><Etag>\"0x8D7304AB81D5D1E\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share156750357959802033</Name><Properties><Last-Modified>Tue, 03 Sep 2019 09:39:39 GMT</Last-Modified><Etag>\"0x8D73052A45B2AA9\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share156751622402604375</Name><Properties><Last-Modified>Tue, 03 Sep 2019 13:10:24 GMT</Last-Modified><Etag>\"0x8D7307015006E07\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share156751636721906837156751636762206152</Name><Properties><Last-Modified>Tue, 03 Sep 2019 13:12:47 GMT</Last-Modified><Etag>\"0x8D730706AA003D7\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share156751680101801411</Name><Properties><Last-Modified>Tue, 03 Sep 2019 13:20:01 GMT</Last-Modified><Etag>\"0x8D730716CCE5B2C\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share156751686958207740156751686978706053</Name><Properties><Last-Modified>Tue, 03 Sep 2019 13:21:09 GMT</Last-Modified><Etag>\"0x8D7307195C3B5CE\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share156751768000401936</Name><Properties><Last-Modified>Tue, 03 Sep 2019 13:34:40 GMT</Last-Modified><Etag>\"0x8D7307378D4BBC7\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share156751780724704139156751780765706589</Name><Properties><Last-Modified>Tue, 03 Sep 2019 13:36:47 GMT</Last-Modified><Etag>\"0x8D73073C4F1F1E8\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share156751812271605146</Name><Properties><Last-Modified>Tue, 03 Sep 2019 13:42:02 GMT</Last-Modified><Etag>\"0x8D7307480974694\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share156751819183102890156751819203909144</Name><Properties><Last-Modified>Tue, 03 Sep 2019 13:43:12 GMT</Last-Modified><Etag>\"0x8D73074A9E2DB5E\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share156758470512401451</Name><Properties><Last-Modified>Wed, 04 Sep 2019 08:11:45 GMT</Last-Modified><Etag>\"0x8D7310F86E6FB0B\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share156758482989301874156758483032809470</Name><Properties><Last-Modified>Wed, 04 Sep 2019 08:13:50 GMT</Last-Modified><Etag>\"0x8D7310FD1844B17\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>testshare01</Name><Properties><Last-Modified>Tue, 03 Sep 2019 03:24:41 GMT</Last-Modified><Etag>\"0x8D7301E4243B95E\"</Etag><Quota>5120</Quota></Properties></Share></Shares><NextMarker /></EnumerationResults>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'df2e72cd-501a-009e-2af8-62e45d000000',
  'x-ms-client-request-id',
  '5399109a-a1da-4d97-9bfd-1be207ba95dd',
  'x-ms-version',
  '2019-02-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 04 Sep 2019 08:14:41 GMT',
  'Connection',
  'close' ]);

