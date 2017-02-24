const endpoint = require('./endpoint');

class Push {
  constructor(axios) {
    this.axios = axios;
  }

  registerPushId(data = {}) {
    return this.axios.post(endpoint.pushInfo, data);
  }

  getPushInfo() {
    return this.axios.get(endpoint.pushInfo);
  }

  updatePushStates(data = {}) {
    return this.axios.patch(endpoint.listPushInfoInSite, data);
  }

  getPushStates() {
    return this.axios.get(endpoint.listPushInfoInSite);
  }
}

module.exports = Push;