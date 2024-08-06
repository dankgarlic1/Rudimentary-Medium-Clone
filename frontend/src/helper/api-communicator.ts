import axios from "axios";
import { BACKEND_URL } from "../config/config";

const backend_url = BACKEND_URL;

export const signupRequest = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(`${backend_url}/user/signup`, {
      name,
      email,
      password,
    });
    if (response.status !== 200) {
      throw new Error("Unable to Signup");
    }

    const jwt = response.data;
    localStorage.setItem("token", jwt);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const signinRequest = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${backend_url}/user/signin`, {
      email,
      password,
    });
    if (response.status !== 200) {
      throw new Error("Unable to Signin");
    }

    const jwt = response.data;
    return jwt;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
