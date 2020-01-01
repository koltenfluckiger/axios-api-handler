'use strict';

const axios = require("axios").default;

class AxiosHandler {

  constructor() {
    this.headers = {
      json: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      multiForm: {
        "Content-Type": "multipart/form-payload",
        "Accept": "application/json"
      },
      plain: {
        "Content-Type": "text/plain",
        "Accept": "text/plain"
      }
    }
  }

  async get(url, responseType, params) {
    try {
      const results = await axios.get(url, {
        responseType: responseType,
        params: params
      }, {headers: this.headers.json});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async post(url, formType, payload) {
    const headers = this.headers[formType];
    try {
      const results = await axios.post(url, payload, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async put(url, formType, payload, params) {
    const headers = this.headers[formType];
    try {
      const results = await axios.put(url, payload, {
        params: params
      }, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async patch(url, formType, payload, params) {
    const headers = this.headers[formType];
    try {
      const results = await axios.patch(url, payload, {
        params: params
      }, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async delete(url, params) {
    const headers = this.headers.json;
    try {
      const results = await axios.delete(url, {
        params: params
      }, {headers: headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default new AxiosHandler();
