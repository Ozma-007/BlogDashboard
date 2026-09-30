export default function BlogStats({ blogs }) {
  const featuredCount = blogs.filter((blog) => blog.featured).length;

  return (
    <section className="blog-stats" aria-label="Blog statistics">
      <div className="stat-item">
        <span className="stat-label">Articles</span>
        <strong>{blogs.length}</strong>
      </div>
      <div className="stat-item">
        <span className="stat-label">Featured</span>
        <strong>{featuredCount}</strong>
      </div>
      <div className="stat-item">
        <span className="stat-label">Categories</span>
        <strong>{new Set(blogs.map((blog) => blog.category)).size}</strong>
      </div>
    </section>
  );
}