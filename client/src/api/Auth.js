import axiosApi from "./Axios";

const authPrefix = "/auth";

const verifyToken = async () => {
  try {
    const response = await axiosApi.post(`${authPrefix}/verify`);
    const data = response.data;

    if (data.verified) {
      return true;
    } 
    else {
      return false;
    }
  } 
  catch (error) {
    return false;
  }
}

const signinUser = async ({ email, password }) => {
  try {
    const response = await axiosApi.post(`${authPrefix}/signin`, {
      email: email,
      password: password,
    });

    return response;
  } 
  catch (error) {
    throw error;
  }
}

const signupUser = async ({ email, password }) => {
  try {
    const response = await axiosApi.post(`${authPrefix}/signup`, {
      email: email,
      password: password,
    });

    return response;
  } 
  catch (error) {
    throw error;
  }
}

export { 
  verifyToken,
  signinUser 
};