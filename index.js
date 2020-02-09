'use strict';

const axios = require("axios").default;

class AxiosHandler {

  constructor() {
    console.log(axios);
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


  async get(url, params) {
    try {
      const results = await axios.get(url, {
        params: params
      }, {headers: this.headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async post(url, payload) {
    try {
      const results = await axios.post(url, payload, {headers: this.headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async put(url, payload, params) {
    try {
      const results = await axios.put(url, payload, {
        params: params
      }, {headers: this.headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async patch(url, payload, params) {
    try {
      const results = await axios.patch(url, payload, {
        params: params
      }, {headers: this.headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async delete(url, params) {
    try {
      const results = await axios.delete(url, {
        params: params
      }, {headers: this.headers});
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default AxiosHandler;
