/* eslint-disable no-unused-vars */
const {TsdbDataClient} = require('@baiducloud/sdk')
class Service {
  constructor (options) {
    this.options = options || {};
    const config = {
      endpoint: 'http://emotor.tsdb-91082p8d87bc.tsdb.iot.gz.baidubce.com',                  // 用户的时序数据库域名，形式如 http://{databaseName}.tsdb.iot.gz.baidubce.com
      credentials: {
          ak: 'c5c40a1cb3ae48d896f1c8f8dcd54726',                //您的AccessKey
          sk: '840f1fefe16848bb974e9c52ba222540'              //您的SecretAccessKey
      }
    };
    this.client = new TsdbDataClient(config);
  }
  async find (params) {
    const {deviceName} = params.query
    const result = await this.client.getMetrics()
    const result2 = await this.client.getFields('SID');
    const result3 = await this.client.getTags('SID');
    const queryList = [
      {
        "metric": "SID",
        fields: ['Cell1','Cell2', 'Cell3', 'Cell4', 'Cell5'],
        "filters": {
            start: '300 days ago',
            tags: {
              deviceName: [deviceName]
            }
        },
 
      }
    ]
    const result4 = await this.client.getDatapoints(queryList)
    return result4
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
