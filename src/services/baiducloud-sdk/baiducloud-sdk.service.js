// Initializes the `baiducloudSDK` service on path `/baiducloud-sdk`
const createService = require('./baiducloud-sdk.class.js');
const hooks = require('./baiducloud-sdk.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/baiducloud-sdk', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('baiducloud-sdk');

  service.hooks(hooks);
};
