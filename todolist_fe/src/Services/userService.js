import config from "../config.js"
import axios from "axios"

const URL_API_USER = config.API_BACKEND_URL + "/user"

const logIn = async (email,Password) =>{
  const URI_LOGIN = URL_API_USER + "/login"
  const body = {
    email: email,
    password: Password
  }
  
  try {
    const response = await axios.post(URI_LOGIN,body)
    return response.data
  } catch (error) {
    return error.response.data
  }
  

 
}

const createUser = ()=>{
  
}
const updateUser = ()=>{
  
}
const deleteUser = ()=>{
  
}

export default {
  logIn,
  createUser,
  updateUser,
  deleteUser
}