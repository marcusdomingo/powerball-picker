const Random = require('random-org')
const mutexify = require('mutexify')

const lock = mutexify()

var client = function(apiKey) {
    if (apiKey == undefined) {
      throw UNDEFINED_APIKEY;
      return;
    } else if (typeof apiKey !== 'string') {
      throw INVALID_APIKEY_TYPE;
      return;
    }

    this.apiKey = apiKey;
}
/////////////////////// Private Functions //////////////////////////////////////
var pickPowerball = function(api_key, callback) {
  var data = {};
  const random = new Random({ apiKey: api_key})
      for (let i = 0; i < 5; i++) {
      random.generateIntegers({ min: 1, max: 69, n: 5, replacement: false })
                  .then(res => {
                      var numbers = res.random.data.sort((a, b) => { return a - b }).toString();
                      data.numbers = numbers;

                      random.generateIntegers({ min: 1, max: 26, n: 1, replacement: false })
                          .then(res => {
                              data.powerball = res.random.data.toString();
                              if (i == 4)
                                callback(data);
                          })
                  })
      }
}

/////////////////////// Public Functions ///////////////////////////////////////
client.prototype.pickPowerball = function(callback) {
  if (callback == undefined) {
    throw UNDEFINED_CALLBACK;
    return;
  } else if (typeof callback !== 'function') {
    throw INVALID_CALLBACK_TYPE;
    return;
  }

  pickPowerball(this.apiKey, function(data){
    callback(data);
  });
}

module.exports = client;


/////////////////////// Custom Error Messages  /////////////////////////////////

// Error
var UNDEFINED_APIKEY = new Error("'Provided apiKey is not defined'");
var UNDEFINED_CALLBACK = new Error("'Provided callback is not defined'");

// TypeError
var INVALID_APIKEY_TYPE = new TypeError("'apiKey must be of type string'");
var INVALID_CALLBACK_TYPE = new TypeError("'callback' must be a function");
