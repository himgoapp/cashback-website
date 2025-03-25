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
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
        console.warn("User not logged in. Cannot fetch blog.");
        return { error: "User not logged in." };
    }

    try {
        const response = await API.get(`/blogs/getblogbyid/${id}`, {
            headers: { Authorization: `Bearer ${authToken}` },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        throw new Error("Failed to fetch blog.");
    }
};

  
  