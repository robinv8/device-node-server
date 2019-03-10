const baiducloudSdk = require('./baiducloud-sdk/baiducloud-sdk.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(baiducloudSdk);
};
