// Static React Application - No API calls
// All data is served from local mock data

let formdataurls = ["/auth/imageupload", "/auth/updateprofileimage"];

export function getToken() {
  const Token = localStorage.getItem("token");
  return Token;
}

// Mock API object that returns empty promises to prevent errors
// All actual data comes from localStorage and mockUserData.js
export const API = {
  get: async (url, config = {}) => {
    console.log(`[Mock API GET] ${url}`, config);
    return Promise.resolve({ data: {} });
  },
  post: async (url, data = {}, config = {}) => {
    console.log(`[Mock API POST] ${url}`, data, config);
    return Promise.resolve({ data: {} });
  },
  put: async (url, data = {}, config = {}) => {
    console.log(`[Mock API PUT] ${url}`, data, config);
    return Promise.resolve({ data: {} });
  },
  delete: async (url, config = {}) => {
    console.log(`[Mock API DELETE] ${url}`, config);
    return Promise.resolve({ data: {} });
  },
  create: (config = {}) => {
    return API;
  },
  interceptors: {
    request: {
      use: () => {
        return { eject: () => {} };
      }
    },
    response: {
      use: () => {
        return { eject: () => {} };
      }
    }
  }
};
