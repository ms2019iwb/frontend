class AuthService {
  checkLogin() {
    return new Promise((resolve) => {
      let loginStatus;
      if(sessionStorage.getItem('loginUser')) {
        loginStatus = true;
      } else {
        loginStatus = false;
      }
      resolve(loginStatus);
    });
  }
}

export default AuthService;