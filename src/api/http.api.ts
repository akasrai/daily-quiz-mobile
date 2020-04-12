import axios from 'axios';

import {STATUS_CODE} from '~/app';
import {refreshAccessToken} from '~/api';
import {withError, withData} from '~/helper';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

let isRefreshing: boolean = false;
let refreshSubscribers: Array<Function> = [];

/**
 * Stores all pending request in array.
 *
 * @param {Function} cb
 */
const subscribeTokenRefresh = (cb: Function) => {
  refreshSubscribers.push(cb);
};

/**
 * Sets token to all pending request stored in array.
 *
 * @param {String} token
 */
const onRrefreshed = (token: string) => {
  refreshSubscribers.map((cb) => cb(token));
};

axiosInstance.interceptors.response.use(
  (response: any): any => {
    return withData(response.data);
  },
  (error: any): any => {
    if (error.message === STATUS_CODE.NETWORK_ERROR) {
      // Toast with error message
      return withError(error.message);
    }

    const {
      response: {status},
    } = error;
    const isSignedIn = true; // securedLS.get('_ft').data ? true : false;

    if (status === STATUS_CODE.UNAUTHORIZED && isSignedIn) {
      return handle401Error(error);
    }

    return withError(error.response ? error.response.data : error);
  },
);

/**
 * Handles 401 error to refresh access token.
 *
 * @param {Object} error
 */
const handle401Error = (error: any) => {
  const pendingRequest = error.config;

  if (!isRefreshing) {
    isRefreshing = true;
    refreshAccessToken().then((res: any) => {
      if (res.data) {
        const {data} = res;

        isRefreshing = false;
        // set token in storage
        onRrefreshed(data.token);

        return (refreshSubscribers = []);
      }

      // clear auth details immediately if access token
      // cannot be refreshed to prevent infinite loop
      // clear auth details here
    });
  }

  const retryPendingRequest = new Promise((resolve) => {
    subscribeTokenRefresh((token: string) => {
      // replace the expired token and retry
      pendingRequest.headers.authorization = `Bearer ${token}`;
      resolve(axiosInstance(pendingRequest));
    });
  });

  return retryPendingRequest;
};

/**
 * GET method.
 *
 * @param {String} url
 * @param {Object} params
 */
export function get(url: string, params: object = {}): any {
  return axiosInstance({
    method: 'get',
    url,
    params,
    headers: {
      authorization: `Bearer token`,
    },
  });
}

/**
 * POST method.
 *
 * @param {String} url
 * @param {Object} data
 */
export function post(url: string, data: any): any {
  return axiosInstance({
    method: 'post',
    url,
    data,
    headers: {
      authorization: `Bearer token`,
    },
  });
}

/**
 * PUT method.
 *
 * @param {String} url
 * @param {Object} data
 */
export function put(url: string, data: any): any {
  return axiosInstance({
    method: 'put',
    url,
    data,
    headers: {
      authorization: `Bearer token`,
    },
  });
}

/**
 * DELETE method.
 *
 * @param {String} url
 * @param {Object} params
 */
export function remove(url: string, params: object = {}): any {
  return axiosInstance({
    method: 'delete',
    url,
    params,
    headers: {
      authorization: `Bearer token`,
    },
  });
}
