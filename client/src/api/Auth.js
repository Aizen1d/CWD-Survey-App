import axiosApi from "./Axios";

const authPrefix = "/auth";

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

export { signinUser };