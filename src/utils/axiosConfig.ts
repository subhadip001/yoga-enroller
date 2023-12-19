import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://yoga-enroller-eb3lbyeafa-em.a.run.app",
  withCredentials: false,
});

export default axiosConfig;
