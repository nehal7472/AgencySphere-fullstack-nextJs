import axios from "axios";
import api from "./api";

<<<<<<< HEAD
// ✅ Generic response wrapper
type ApiResponse<T> = {
  status?: string;
  data: T;
};

// ✅ Entity types
export type Hero = {
  id: number;
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
};

export type Brand = {
  id: number;
  name: string;
  image: string;
};

export type Work = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type Stat = {
  id: number;
  number: string;
  title: string;
};

export type Project = {
  id: number;
  title: string;
  image: string;
  remark: string;
  live: string;
  created_at: string;
  updated_at: string;
};

export type FeaturedProject = {
  id: number;
  title: string;
  description: string;
  image: string;
  live: string;
  remark: string;
  created_at: string;
  updated_at: string;
};

export type Team = {
  id: number;
  name: string;
  image: string;
  designation: string;
=======
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
>>>>>>> parent of a86c610 (Project is ready to submit)
};

export type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type Testimonial = {
  id: number;
  name: string;
  image: string;
  designation: string;
  msg: string;
};

// ✅ Generic fetcher with typing
const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    const res = await api.get<ApiResponse<T>>(endpoint);
    return res.data.data;
  } catch (error) {
    console.error(`❌ API Error [${endpoint}]`, error);
    throw new Error("Failed to fetch data");
  }
};

// ✅ Service functions
export const getHero = () => fetchData<Hero[]>("/HeroList");

export const getBrandList = () => fetchData<Brand[]>("/BrandList");

export const getWorkList = () => fetchData<Work[]>("/WorkList");

export const getStatList = () => fetchData<Stat[]>("/StatList");

export const getFeaturedProject = () =>
  fetchData<FeaturedProject[]>("/FeaturedProject");

export const getTeamList = () => fetchData<Team[]>("/TeamList");

export const getServiceList = () => fetchData<Service[]>("/AllService");

export const getAllProjectList = () => fetchData<Project[]>("/AllProject");

export const getTestimonialList = () =>
  fetchData<Testimonial[]>("/TestimonialList");
