const getUser = (state) => state.auth.user;
const getEmail = (state) => state.auth.user.email;
const isAuthenticated = (state) => state.auth.isLogin;

export default {
  getUser,
  getEmail,
  isAuthenticated,
};
