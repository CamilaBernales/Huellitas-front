import axiosConfig from "./axios";
const tokenAuth = (token) => {
  if (token) {
    // token.slice(1, -1); 
    console.log(token);
    axiosConfig.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axiosConfig.defaults.headers.common['x-auth-token'];
  }
};

export default tokenAuth;
