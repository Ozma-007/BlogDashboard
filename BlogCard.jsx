function BlogCard({ blog }) {
  return (
    <article className="blog-card">
      <div className="blog-card-top">
        <span className="category">{blog.category}</span>
        {blog.featured && <span className="featured">Featured</span>}
      </div>

      <h2>{blog.title}</h2>

      <div className="blog-info">
        <span>{blog.author}</span>
        <span>{blog.readingTime} min read</span>
      </div>

      <div className="blog-card-footer">
        <span>{blog.featured ? "Featured Article" : "Regular Article"}</span>
        <button type="button">Read More</button>
      </div>
    </article>
  );
}

export default BlogCard;