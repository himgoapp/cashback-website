import { API } from "../utils/api";


export const getBlogs = async () => {
    try {
      const response = await API.get("/blogs/blogslist?page=1");
      return response.data.blogsList || []; 
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
  };

  export const getBlogById = async (id) => {
   
    try {
        const response = await API.get(`/blogs/getblogbyid/${id}`)
        return response.data;
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        throw new Error("Failed to fetch blog.");
    }
};

  
  