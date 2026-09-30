function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <span className="search-icon">🔍</span>

      <input
        type="text"
        placeholder="Search blogs by title, category, or author..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {searchTerm && (
        <button onClick={() => setSearchTerm("")}>Clear</button>
      )}
    </div>
  );
}

export default SearchBar;