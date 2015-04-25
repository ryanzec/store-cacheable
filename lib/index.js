module.exports = {
  get: function(key) {
    var now = (new Date()).getTime();
    var storedData = JSON.parse(localStorage.getItem(key));
    var returnData;

    if(storedData && storedData.expires && storedData.expires <= now) {
      //clean up expired data
      localStorage.removeItem(key);
    } else if(storedData) {
      returnData = storedData.value;
    }

    return returnData;
  },

  set: function(key, value, expireIn) {
    var expires = (new Date()).getTime();
      expires = (expireIn ? expires + expireIn : false);
      var data = {
        value: value,
        expires: expires
      }

      return localStorage.setItem(key, JSON.stringify(data));
  },

  remove: function(key) {
    localStorage.removeItem(key);
  },

  clear: function() {
    localStorage.clear();
  }
};
