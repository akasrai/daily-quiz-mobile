import axios from 'axios';
import {useContext} from 'react';

import env from '../../env';
import {STATUS_CODE} from '~/app';
import {withError, withData} from '~/helper';
import {refreshAccessToken} from './request.api';
import {AuthContext} from '~/auth/auth.context';

const axiosInstance = axios.create({
  baseURL: env.BASE_URL,
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

const subscribeTokenRefresh = (cb: Function) => {
  refreshSubscribers.push(cb);
};

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
    const isSignedIn = '';

    if (status === STATUS_CODE.UNAUTHORIZED && isSignedIn) {
      return handle401Error(error);
    }

    return withError(error.response ? error.response.data : error);
  },
);

const handle401Error = (error: any) => {
  const pendingRequest = error.config;

  if (!isRefreshing) {
    isRefreshing = true;
    refreshAccessToken().then((res: any) => {
      if (res.data) {
        const {data} = res;
        isRefreshing = false;
        onRrefreshed(data.token);
        // setAuthenticationToken(data.token);

        return (refreshSubscribers = []);
      }
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

export function get(url: string, params: object = {}): any {
  return axiosInstance({
    method: 'get',
    url,
    params,
    headers: {
      authorization: `Bearer `,
    },
  });
}

export function post(url: string, data: any): any {
  return axiosInstance({
    method: 'post',
    url,
    data,
    headers: {
      authorization: `Bearer `,
    },
  });
}

export function put(url: string, data: any): any {
  return axiosInstance({
    method: 'put',
    url,
    data,
    headers: {
      authorization: `Bearer `,
    },
  });
}

export function remove(url: string, params: object = {}): any {
  return axiosInstance({
    method: 'delete',
    url,
    params,
    headers: {
      authorization: `Bearer `,
    },
  });
}
