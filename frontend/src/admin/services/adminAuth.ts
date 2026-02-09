const TOKEN_KEY = "admin_token";

export const loginAdmin = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logoutAdmin = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAdminLoggedIn = (): boolean => {
  return Boolean(localStorage.getItem(TOKEN_KEY));
};
