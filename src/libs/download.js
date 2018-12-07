import axios from 'axios';
import {protocol, host, port, prefix, version} from '../configs/api';
import utils, {sessionStorage} from "../utils";
import {LoadingBar, Notice} from 'iview';

const baseURL = `${protocol}//${host}:${port}${prefix}${version}`;
const baseTimeout = 30000;
const maxContentLength = 5000;

export default async params => {
  let {url, method, data, headers, timeout, silence} = params;
  method = method ? method.toLowerCase() : 'get';
  headers = headers || null;

  // common config of request
  const commonConfig = {
    url,
    method,
    baseURL,
    headers,
    timeout: timeout || baseTimeout,
    maxContentLength,
    responseType: 'blob'
  };

  // create an instance of axios with common config
  const instance = axios.create(commonConfig);

  // request interceptor of created instance
  instance.interceptors.request.use(
    // do something before request is sent
    function (config) {
      const {url, headers} = config;

      // the endpoint that do not starts width '/auth' needs to attach custom header 'Authorization'
      !url.match(/^\/auth/i) && (headers['Authorization'] = sessionStorage.get('token') || '');

      return config;

    },
    // do something with request error
    function (e) {
      return Promise.reject(e);

    }
  );

  // response interceptor of created instance
  instance.interceptors.response.use(
    // do something with response data
    function (response) {
      return Promise.resolve(response);

    },
    // do something with response error
    function (e) {
      return Promise.reject(e);

    }
  );

  // special config of request
  const specialConfig = method === 'post' || method === 'put' || method === 'patch'
    // post, put or patch method
    ? (
      headers && headers['Content-Type'] && headers['Content-Type'].includes('application/x-www-form-urlencoded')
        // Content-Type: 'application/x-www-form-urlencoded;charset=UTF-8'
        ? {
          data,
          // transform request data to query-string if Content-Type is 'application/x-www-form-urlencoded'
          transformRequest: [function (data, headers) {
            const contentType = headers['Content-Type'] || headers['content-type'];

            return contentType && contentType.includes('application/x-www-form-urlencoded')
              ? utils.query.serialize(data) : data;
          }]
        }
        // Content-Type: 'application/json;charset=UTF-8'
        : {data}
    )
    // get, delete or head method
    : {params: data};

  // send request
  try {
    // show loading
    !silence && LoadingBar.start();

    const res = await instance.request(specialConfig);

    // hide loading
    !silence && LoadingBar.finish();

    return res;
  }
  catch (e) {
    /* ============= http error ============= */
    console.error('http layer error: ', e);

    // loading error
    !silence && LoadingBar.error();

    return null;
  }

};
