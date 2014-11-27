var sdk = require('sdk');
var apiMap = require('./api');

module.exports = pingplusplus;

function pingplusplus(apiKey) {
  if (!apiKey)
    throw new Error('pingplusplus.init(); API key is required!');

  this.host = 'https://api.pingplusplus.com';
  this.version = 'v1';
  this.apiKey = apiKey;

  this.sdk = new sdk(
    this.host + this.version,
    apiMap
  );

  this.sdk.rule('all', {
    auth: {
      'user': apiKey
      // ,'pass': ''
    }
  });

  this.sdk.init();
}
