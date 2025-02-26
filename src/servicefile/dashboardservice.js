import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

export const userInfoFxn = async (id) => {
  let body = {
    id,
  };

  try {
    let data = await API.post(`/users/userinfo`, {
      ...body,
    }).then((res) => res.data);
    return {
      success: true,
      ...data,
    };
  } catch (error) {
    const { response } = error;
    if (response) {
      return {
        message: response.data.message || "Something Went Wrong!",
      };
    }
    return { message: "Something Went Wrong!" };
  }
};

export const getDashboardInfo = async (id) => {
  let body = {
    id,
  };

  try {
    let data = await API.get(`/users/getdashboardinfo/${id}`, {
      ...body,
    }).then((res) => res.data);
    return {
      success: true,
      ...data,
    };
  } catch (error) {
    const { response } = error;
    if (response) {
      return {
        message: response.data.message || "Something Went Wrong!",
      };
    }
    return { message: "Something Went Wrong!" };
  }
};
export const userProfileEdit = async (id, username, address) => {
  let body = {
    id,
    userName: username,
    address,
  };

  try {
    let data = await API.post(`/auth/updateuserprofile`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.data);

    return {
      success: true,
      ...data,
    };
  } catch (error) {
    const { response } = error;
    if (response) {
      console.error("API Error:", response.data); // Debugging
      return {
        message: response.data.message || "Something Went Wrong!",
      };
    }
    return { message: "Something Went Wrong!" };
  }
};

export const addProfileImage = async (user_id, file) => {
  const formData = new FormData();
  formData.append("id", user_id);
  formData.append("image", file);


  try {
    let data = await API.post(`/auth/updateprofileimage`, formData).then(
      (res) => res.data
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response) {
      return {
        message: response.data.message || "Something Went Wrong!",
      };
    }
    return { message: "Something Went Wrong!" };
  }
};
