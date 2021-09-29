import CONFIG from "../../config";
import axios from "axios";
const baseURL = `${CONFIG.API_URL}/api`;

export const axiosIns = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json",
  },
  data: null,
});
