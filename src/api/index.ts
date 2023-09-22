'use strict';

interface Options {
  baseurl: string;
}

const axios = require("axios").default;

class AxiosHandler {

  public axios: typeof axios;

  public _getAxiosInstance(): typeof axios {
    return axios;
  }
  public _getInstance(): AxiosHandler {
    return this;
  }
  public create(options: Options): void {
    this.axios = axios.create({ ...options });
  }
  public setBaseurl(options: Options): void {
    axios.defaults.baseurl = options.baseurl;
  }

  public setHeaders(headers: object): void {
    axios.defaults.headers = {
      ...axios.defaults.headers,
      headers
    };
  }


  public asyncerrator(options = {
  } = {}): () => Promise<any> {

    try {
      const req = async () => this.axios.request(options)
      return req;
    } catch (err) {
      return err;
    };

  }

  public request(options = {
  } = {}): Promise<Object> {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await this.axios.request(options)
        return resolve(data);
      } catch (err) {
        return reject(err);
      }
    });
  }

  public async get(url: string, {
    params = {},
    headers = {},
    options = {}
  } = {}): Promise<Object> {
    try {
      const results = await axios.get(url, {
        params: params,
        headers: headers,
        ...options
      });
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  public async post(url: string, {
    payload = {},
    params = {},
    headers = {},
    options = {}
  } = {}): Promise<Object> {
    try {
      const results = await axios.post(url, payload, {
        params: params,
        headers: headers,
        ...options
      });
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  public async put(url: string, {
    payload = {},
    params = {},
    headers = {},
    options = {}
  } = {}): Promise<Object> {
    try {
      const results = await axios.put(url, payload, {
        params: params,
        headers: headers,
        ...options
      });
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  public async patch(url: string, {
    payload = {},
    params = {},
    headers = {},
    options = {}
  } = {}): Promise<Object> {
    try {
      const results = await axios.patch(url, payload, {
        params: params,
        headers: headers,
        ...options
      });
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  public async delete(url: string, {
    params = {},
    headers = {},
    options = {}
  } = {}): Promise<Object> {
    try {
      const results = await axios.delete(url, {
        params: params,
        headers: headers,
        ...options
      });
      return Promise.resolve(results);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default new AxiosHandler();
