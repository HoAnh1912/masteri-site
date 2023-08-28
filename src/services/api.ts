import axios from 'axios';
import TokenService from './token.service';

const instance = axios.create({
  baseURL: 'http://34.64.76.187:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  config => {
    const token = TokenService.getToken();
    if (token) {
      config.headers!['Authorization'] = 'X-CSRFToken ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    const originalConfig = err.config;

    if (originalConfig.url !== '/v1/auth/login' && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await instance.post('/v1/token/refresh/', {
            refresh: TokenService.getRefreshToken()
          });

          const { access } = rs.data;
          TokenService.setToken(access);

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
