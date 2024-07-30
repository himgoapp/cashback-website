import { baseUrlconfig } from "../config";
import axios from "axios";

export const loginOtp = async (phoneNumber) => {
  let body = {
    phoneNumber: `91${phoneNumber}`,
  };

  let headers = {
    "Content-Type": "application/json",
  };

  try {
    let data = await axios
      .post(
        `${baseUrlconfig.baseUrl}/auth/loginVerify`,
        { ...body },
        { ...headers }
      )
      .then((res) => res.data);

    return data;
  } catch (error) {
    return { message: "Something Went Wrong!" };
  }
};

export const loginVerify = async (phoneNumber, loginOtp) => {
  let body = {
    phoneNumber: `91${phoneNumber}`,
    Otp: loginOtp,
  };

  let headers = {
    "Content-Type": "application/json",
  };

  try {
    let data = await axios
      .post(
        `${baseUrlconfig.baseUrl}/auth/verifyLoginOtp`,
        { ...body },
        { ...headers }
      )
      .then((res) => res.data);
    return data;
  } catch (error) {
    return { message: "Something Went Wrong!" };
  }
};

export const verifySendOtpPhone = async (phoneNumber) => {
  let body = {
    phoneNumber: `91${phoneNumber}`,
  };

  let headers = {
    "Content-Type": "application/json",
  };

  try {
    let data = await axios
      .post(
        `${baseUrlconfig.baseUrl}/auth/sendOtp`,
        { ...body },
        { ...headers }
      )
      .then((res) => res.data);

    return data;
  } catch (error) {
    return { message: "Something Went Wrong!" };
  }
};

export const phoneVerify = async (phoneNumber, loginOtp) => {
  let body = {
    phoneNumber: `91${phoneNumber}`,
    Otp: loginOtp,
  };

  let headers = {
    "Content-Type": "application/json",
  };

  try {
    let data = await axios
      .post(
        `${baseUrlconfig.baseUrl}/auth/verifyOtp`,
        { ...body },
        { ...headers }
      )
      .then((res) => res.data);
    return data;
  } catch (error) {
    return { message: "Something Went Wrong!" };
  }
};

export const signUpFxn = async (phoneNumber, email, userName) => {
  let body = {
    phoneNumber: `91${phoneNumber}`,
    email,
    userName,
    role: "user",
  };

  let headers = {
    "Content-Type": "application/json",
  };

  try {
    let data = await axios
      .post(`${baseUrlconfig.baseUrl}/auth/signup`, { ...body }, { ...headers })
      .then((res) => res.data);
    return data;
  } catch (error) {
    console.log(error.response);
    if (error.response) {
      return error.response.data.errors;
    } else {
      return { message: "Something Went Wrong!" };
    }
  }
};
