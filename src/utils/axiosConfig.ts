import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://yoga-enroller-eb3lbyeafa-em.a.run.app",
});

export default axiosClient;
