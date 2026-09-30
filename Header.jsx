function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">B</div>
        <span>BlogHub</span>
      </div>

      <nav className="navigation">
        <a href="#dashboard">Dashboard</a>
        <a href="#blogs">Blogs</a>
        <a href="#authors">Authors</a>
      </nav>

      <div className="profile">
        <div className="avatar">OM</div>
        <span>Admin</span>
      </div>
    </header>
  );
}

export default Header;