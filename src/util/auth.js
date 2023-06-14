const tokenKey = 'tourx-user';
const userKey = 'tourx-user';

export const setToken = (token) => {
  localStorage.setItem(tokenKey, JSON.stringify(token));
};

export const setUser = (user) => {
  localStorage.setItem(tokenKey, JSON.stringify(user));
};

export const getToken = () => JSON.parse(localStorage.getItem(tokenKey));

export const getUser = () => JSON.parse(localStorage.getItem(userKey));

export const storeSession = (data) => {
  setUser(data.user);
  setToken(data.token);
};
