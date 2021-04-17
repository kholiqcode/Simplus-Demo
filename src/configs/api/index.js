import ApiRequest from './request';
import baseUrl from './url';

const API = {};

API.auth = {
  login: ApiRequest.post(baseUrl.login),
};

export default API;
