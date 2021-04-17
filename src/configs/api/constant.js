const activeConfig = 'dev';

const constants = {
  dev: {
    url: {
      api: 'https://reqres.in',
      assets: '',
      origin: '',
    },
  },

  production: {
    url: {
      api: '',
      assets: '',
      origin: '',
    },
  },
};

const appConfig = constants[activeConfig];

export default appConfig;
