'use strict';

const axios = require("axios").default;

class AxiosHandler {

  _getAxiosInstance() {
    return axios;
  }
  _getInstance() {
    return this;
  }

  setBaseURL(options) {
    axios.defaults.baseURL = options.baseURL;
  }

  setHeaders(headers) {
    axios.defaults.headers = {
      ...axios.defaults.headers,
      headers
    };
  }

  async get(url, {
    params = {},
    headers = {}
  } = {}) {
    try {
      const results = await axios.get(url, {
        params: params,
        headers: headers
      });
      return Promise.resolve(results);
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }

  async post(url, {
    payload = {},
    params = {},
    headers = {}
  } = {}) {
    try {
      const results = await axios.post(url, payload, {
        params: params,
        headers: headers
      });
      return Promise.resolve(results);
    } catch (err) {

      return Promise.reject(err);
    }
  }

  async put(url, {
    payload = {},
    params = {},
    headers = {}
  } = {}) {
    try {
      const results = await axios.put(url, payload, {
        params: params,
        headers: headers
      });
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async patch(url, {
    payload = {},
    params = {},
    headers = {}
  } = {}) {
    try {
      const results = await axios.patch(url, payload, {
        params: params,
        headers: headers
      });
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async delete(url, {
    params = {},
    headers = {}
  } = {}) {
    try {
      const results = await axios.delete(url, {
        params: params,
        headers: headers
      });
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default new AxiosHandler();
