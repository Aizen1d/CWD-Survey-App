import axiosApi from './Axios'

const usersPrefix = '/users';

const getUsers = async () => {
  try {
    const response = await axiosApi.get(`${usersPrefix}`);

    return response;
  } 
  catch (error) {
    throw error;
  }
}

export { getUsers };