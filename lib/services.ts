import api from "./api";

export const getHero = () => api.get("/HeroList");

export const getBrandList = async () => {
  const res = await api.get("/BrandList");
  return res.data;
};

export const getWorkList = async () => {
  const res = await api.get("/WorkList");
  return res.data;
};

export const getStatList = async () => {
  const res = await api.get("/StatList");
  return res.data;
};

export const getFeaturedProject = async () => {
  const res = await api.get("/FeaturedProject");
  return res.data;
};

export const getTeamList = async () => {
  const res = await api.get("/TeamList");
  return res.data;
};

export const getServiceList = async () => {
  const res = await api.get("/AllService");
  return res.data;
};

export const getAllProjectList = async () => {
  const res = await api.get("/AllProject");
  return res.data;
};

export const getTestimonialList = async () => {
  const res = await api.get("/TestimonialList");
  return res.data;
};
