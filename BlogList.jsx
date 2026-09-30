import BlogCard from "./BlogCard.jsx";

export default function BlogList({ blogs }) {
	return (
		<div className="blog-grid">
			{blogs.map((blog) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
		</div>
	);
}
