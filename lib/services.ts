import axios from "axios";
import api from "./api";

export const getHero = () => api.get("/HeroList");

export const getBrandList = async () => {
  const res = await axios.get("https://agency.teamrabbil.com/api/BrandList");
  return res.data;
};

export const getWorkList = async () => {
  const res = await axios.get("https://agency.teamrabbil.com/api/WorkList");
  return res.data;
};

export const getStatList = async () => {
  const res = await axios.get("https://agency.teamrabbil.com/api/StatList");
  return res.data;
};

export const getFeaturedProject = async () => {
  const res = await axios.get(
    "https://agency.teamrabbil.com/api/FeaturedProject"
  );
  return res.data;
};

export const getTeamList = async () => {
  const res = await axios.get("https://agency.teamrabbil.com/api/TeamList");
  return res.data;
};
