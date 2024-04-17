import axiosApi from './Axios'

const usersPrefix = '/users';

const index = async () => {
  try {
    const response = await axiosApi.get(`${usersPrefix}`);

    return response;
  } 
  catch (error) {
    throw error;
  }
}

const update = async ({ form }) => {
  try {
    const response = await axiosApi.put(`${usersPrefix}`, form);

    return response;
  } 
  catch (error) {
    throw error;
  }
}

const isCurrentUserSetupDone = async () => {
  try {
    const response = await axiosApi.get(`${usersPrefix}/setup`);
    
    return response.data.status;
  } 
  catch (error) {
    throw error;
  }
}

const getUserByEmail = async (email) => {
  try {
    const response = await axiosApi.get(`${usersPrefix}/${email}`);

    return response;
  } 
  catch (error) {
    throw error;
  }
}

export { 
  index,
  update,
  isCurrentUserSetupDone,
  getUserByEmail
};