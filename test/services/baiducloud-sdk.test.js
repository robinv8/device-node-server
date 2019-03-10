const assert = require('assert');
const app = require('../../src/app');

describe('\'baiducloudSDK\' service', () => {
  it('registered the service', () => {
    const service = app.service('baiducloud-sdk');

    assert.ok(service, 'Registered the service');
  });
});
