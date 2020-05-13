const Auth = {
  getAuth() {
    return !!localStorage.getItem('USER_TOKEN');
  },
};
export default Auth;
