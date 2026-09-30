import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "Understanding React Hooks",
      category: "React",
      author: "Ali Khan",
      readingTime: 6,
      featured: true,
    },
    {
      id: 2,
      title: "Redux Toolkit Basics",
      category: "Redux",
      author: "Sara Ahmed",
      readingTime: 8,
      featured: false,
    },
    {
      id: 3,
      title: "Building Blog UI in React",
      category: "React",
      author: "Hamza Malik",
      readingTime: 5,
      featured: false,
    },
    {
      id: 4,
      title: "Node.js and Express Introduction",
      category: "Node",
      author: "Ayesha Noor",
      readingTime: 7,
      featured: true,
    },
  ],
  searchTerm: "",
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addBlog(state, action) {
      state.items.push(action.payload);
    },
    updateBlog(state, action) {
      const { id, changes } = action.payload;
      const blog = state.items.find((item) => item.id === id);
      if (blog) Object.assign(blog, changes);
    },
    deleteBlog(state, action) {
      state.items = state.items.filter((blog) => blog.id !== action.payload);
    },
  },
});

export const { addBlog, deleteBlog, setSearchTerm, updateBlog } =
  blogsSlice.actions;

export const selectBlogs = (state) => state.blogs.items;
export const selectSearchTerm = (state) => state.blogs.searchTerm;

export const selectFilteredBlogs = createSelector(
  [selectBlogs, selectSearchTerm],
  (blogs, searchTerm) => {
    const search = searchTerm.toLowerCase();
    return blogs.filter((blog) =>
      [blog.title, blog.category, blog.author].some((value) =>
        value.toLowerCase().includes(search),
      ),
    );
  },
);

export default blogsSlice.reducer;