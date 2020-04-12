import {ApiResponse} from 'api';
import * as http from './http.api';
import {ArticlesParam} from '~/article';

export const getArticles = (param: ArticlesParam): Promise<ApiResponse> => {
  return http.get(`articles`, param);
};

export const getArticleByID = (articleID: number): Promise<ApiResponse> => {
  return http.get(`articles/${articleID}`);
};

export const refreshAccessToken = () => http.get(`fuck/you`);
