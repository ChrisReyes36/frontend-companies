import axios from "axios";

const apiConfig = axios.create({
  baseURL: "http://localhost/backend-companies/public/api",
});

export default apiConfig;
