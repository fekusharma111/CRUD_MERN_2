import axios from "axios";
const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data).then((res) => {
      // alert(res.data.message);
    });
  } catch (error) {
    console.log(`Error while calling add user api ${error}`);
  }
};
export const getUser = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log(`Error while calling add user api ${error}`);
  }
};
export const getUsers = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log(`Error while calling add user api ${error}`);
  }
};
export const editUser = async (user, id) => {
  try {
    return await axios.post(`${URL}/${id}`, user);
  } catch (error) {
    console.log(`Error while calling edituser api ${error}`);
  }
};
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(`Error while calling deleteuser api ${error}`);
  }
};
