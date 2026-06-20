function SearchBox({
  idea,
  setIdea,
  generateIdeas,
  loading
}) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter startup niche..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            generateIdeas();
          }
        }}
      />

      <button onClick={generateIdeas}>
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}

export default SearchBox;