export const TOKENKEY = 'tourx-token';
export const USERKEY = 'tourx-user';

export const setToken = (token) => {
  localStorage.setItem(TOKENKEY, JSON.stringify(token));
};

export const setUser = (user) => {
  localStorage.setItem(USERKEY, JSON.stringify(user));
};

export const getToken = JSON.parse(localStorage.getItem(TOKENKEY));

export const getUser = JSON.parse(localStorage.getItem(USERKEY));

export const storeSession = (data) => {
  setUser(data.user);
  setToken(data.token);
};

export const destroySession = () => {
  localStorage.removeItem(TOKENKEY);
  localStorage.removeItem(USERKEY);
};
