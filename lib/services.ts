
import api from "./api";


const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    const res = await api.get<T>(endpoint); // directly <T>
    return res.data;
  } catch (error) {
    console.error(`❌ API Error [${endpoint}]`, error);
    throw new Error("Failed to fetch data");
  }
};

// Service functions
export const getHero = () => fetchData<any[]>("/HeroList");
export const getBrandList = () => fetchData<any[]>("/BrandList");
export const getWorkList = () => fetchData<any[]>("/WorkList");
export const getStatList = () => fetchData<any[]>("/StatList");
export const getFeaturedProject = () => fetchData<any[]>("/FeaturedProject");
export const getTeamList = () => fetchData<any[]>("/TeamList");
export const getServiceList = () => fetchData<any[]>("/AllService");
export const getAllProjectList = () => fetchData<any[]>("/AllProject");
export const getTestimonialList = () => fetchData<any[]>("/TestimonialList");
