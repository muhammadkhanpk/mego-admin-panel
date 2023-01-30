import axios from "axios";

const getToken = () => {
  let token = JSON.parse(sessionStorage.getItem("uid"));
  // console.log("token is ", token);
  return token;
};
const api = axios.create({
  baseURL: "https://mego-apis.vercel.app/api" || "http://localhost:5500",
  // baseURL: "http://localhost:5500/api",
  headers: {
    Authorization: `JTW ${getToken()}`,
  },
});

export { api, getToken };
