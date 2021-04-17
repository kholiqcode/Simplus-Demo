import appConfig from './constant';

export const config = appConfig;

const baseUrl = {
  login: `${config.url.api}/api/login`,
};

export default baseUrl;
