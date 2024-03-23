import axios from "axios";

//baseurl
const apiRequests = axios.create({
  baseURL: "/api",
  headers: {
    "content-Type": "application/json",
    Auth: "Bearer Token",
  },
});
// requests
apiRequests.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log("Err", err);
    return Promise.reject(err);
  }
);
//responses
apiRequests.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const status = err.response.status;
    if (status === 404) {
      alert("User Not Found :))");
    } else if (status === 422) {
      alert("username or password is not correct :((");
    } else if (status === 500) {
      alert("internal server error !!!");
    }

    return Promise.reject(err);
  }
);

export default apiRequests;
