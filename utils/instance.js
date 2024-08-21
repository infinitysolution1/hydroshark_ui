import axios from "axios";
const BASE_URL = "http://144.24.111.231:7020";

const instance = axios.create({
  baseURL: BASE_URL,
});

const excludedUrls = ["/api/singup/", "/api/login/", "/api/refresh-token/"];

// Function to check if the current request is not one of the excluded URLs
function isNotExcludedRequest(config) {
  return !excludedUrls.includes(config.url || "");
}

// Add the interceptor
instance.interceptors.request.use(
  (config) => {
    if (isNotExcludedRequest(config)) {
      const authToken = localStorage.getItem("token");
      if (authToken) {
        console.log("authToken", authToken);
        config.headers.Authorization = `Bearer ${authToken}`;
      }
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add an interceptor that checks if the response has a code of 401, then log the user out and throw him at /login
instance.interceptors.response.use(
  (response) => {
    console.log(
      "res.datacheck",
      response.status,
      response.status.toString()[0] != "2"
    );
    if (response.status.toString()[0] != "2") {
      console.log("res.datacheck1", response);
      throw response;
    }
    return response;
  },
  (error) => {
    // if (error.response.status && error.response.status === 401) {
    //   localStorage.clear();
    //   sessionStorage.clear();
    //   window.location.href = "/login";
    //   //   toast.error("Session expired, please login again");
    // }

    console.log("res.errres", error);
    throw error;
  }
);

export default instance;