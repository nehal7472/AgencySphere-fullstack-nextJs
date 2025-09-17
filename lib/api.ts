import axios from "axios";

const api = axios.create({
  baseURL: "https://agency.teamrabbil.com/api/",
});

export default api;
