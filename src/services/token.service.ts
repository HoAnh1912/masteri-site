const getToken = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('accessToken') as any);
  }
};

const setToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('accessToken', JSON.stringify(token));
  }
};

const getRefreshToken = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('refreshToken') as any);
  }
};

const setRefreshToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('refreshToken', JSON.stringify(token));
  }
};

const removeToken = () => {
  localStorage.removeItem('accessToken');
};

const removeRefreshToken = () => {
  localStorage.removeItem('refreshToken');
};

const TokenService = {
  getToken,
  setToken,
  getRefreshToken,
  setRefreshToken,
  removeToken,
  removeRefreshToken
};

export default TokenService;
