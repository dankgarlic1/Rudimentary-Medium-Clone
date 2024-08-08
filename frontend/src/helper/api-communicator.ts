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

    const { token } = response.data;
    // console.log("Token:", jwt);
    localStorage.setItem("token", token);
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

    const { token } = response.data;
    // console.log("Token:", token);
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBlogs = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.get(`${backend_url}/blog/bulk`, {
      headers: { Authorization: token },
    });
    if (response.status !== 200) {
      throw new Error("Unable to Signin");
    }
    return response;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
