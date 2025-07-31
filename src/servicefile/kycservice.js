import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

// INFO: Not used yet
export const getKYCDetails = async () => {
  try {
    let data = await API.get(`/products/products`).then((res) => res.data);

    return data.products;
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

export const getProductsSimple = async () => {
  try {
    let data = await API.get(`/products/productsimple`).then((res) => res.data);
    return data.products;
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

export const addPanCard = async (payload) => {
  let body = {
    ...payload,
  };

  try {
    let data = await API.post(`/newkyc/verify-pan`, {
      ...body,
    }).then((res) => res.data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response) {
      console.error("Error in addPanCard:", response);
      return {
        status: false,
        message: response.data.error || "Something Went Wrong!",
      };
    }
    return { message: "Something Went Wrong!" };
  }
};

export const sendAadhaarCardOtp = async (payload) => {
  let body = {
    ...payload
  };

  try {
    let data = await API.post(`/newkyc/aadhaar-otp`, {
      ...body,
    }).then((res) => res.data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response) {
      return {
        status: false,
        message: response.data.error || "Something Went Wrong!",
      };
    }
    return { status: false, message: "Something Went Wrong!" };
  }
}

export const verifyAadhaarCardOtp = async (payload) => {
  let body = {
    ...payload
  };

  try {
    let data = await API.post(`/newkyc/submit-aadhaar-otp`, {
      ...body,
    }).then((res) => res.data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response) {
      return {
        status: false,
        message: response.data.error || "Something Went Wrong!",
      };
    }
    return {
      status: false,
      message: "Something Went Wrong!"
    };
  }


}

export const addAddressProof = async (
  user_id,
  file,

  addressProofType,
  documentNumber
) => {
  const formData = new FormData();
  formData.append("image", file);
  formData.append("id", user_id);
  formData.append("addressProofType", addressProofType);
  formData.append("addressProofDocumentNumber", documentNumber);

  let body = formData;

  try {
    let data = await API.post(`/auth/imageupload`, body).then(
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

export const addBankDetails = async (
  payload
) => {
  let body = {
    ...payload
  };

  try {
    let data = await API.post(`/newkyc/submit-bank-details`, {
      ...body,
    }).then((res) => res.data);
    return data;
  } catch (error) {
    const { response } = error;
    if (response) {
      return {
        status: false,
        message: response.data.error || "Something Went Wrong!",
      };
    }
    return { status: false, message: "Something Went Wrong!" };
  }
};

export const submitAccountId = async (
  user_id,
  productId,
  referenceId,
  referralCode
) => {
  let body = {
    user_id,
    productId,
    referenceId,
    referralCode,
  };

  try {
    let data = await API.post(`/useraccountid/create`, {
      ...body,
    }).then((res) => res.data);
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

export const createTransaction = async (user_id, amount) => {
  let body = {
    user_id,
    amount,
  };

  try {
    let data = await API.post(`/transactions/create`, {
      ...body,
    }).then((res) => res.data);
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
