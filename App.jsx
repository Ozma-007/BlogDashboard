import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "./DashboardLayout";
import SearchBar from "./SearchBar";
import BlogList from "./BlogList.jsx";
import BlogStats from "./BlogStats";
import {
  selectBlogs,
  selectFilteredBlogs,
  selectSearchTerm,
  setSearchTerm,
} from "./src/features/blogs/blogsSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  const searchTerm = useSelector(selectSearchTerm);
  const filteredBlogs = useSelector(selectFilteredBlogs);

  return (
    <DashboardLayout>
      <main className="dashboard">
        <div className="dashboard-heading">
          <div>
            <h1>Blog Dashboard</h1>
            <p>Manage and explore your blog articles.</p>
          </div>
        </div>

        <BlogStats blogs={blogs} />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={(value) => dispatch(setSearchTerm(value))}
        />

        <BlogList blogs={filteredBlogs} />
      </main>
    </DashboardLayout>
  );
}

export default App;