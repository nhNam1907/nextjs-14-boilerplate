enum StorageKey {
  TOKEN = 'token',
}

const storage = {
  setToken: (token: string) => {
    localStorage.setItem(StorageKey.TOKEN, token);
  },
  clearToken: () => {
    localStorage.removeItem(StorageKey.TOKEN);
  },
  getToken: () => {
    return localStorage.getItem(StorageKey.TOKEN);
  },
};

export default storage;
