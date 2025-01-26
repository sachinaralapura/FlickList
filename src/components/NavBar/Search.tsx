import { useState, memo } from "react";

const Search = memo(({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          onSearch(query);
        }
      }}
    />
  );
});

const Title = memo(() => {
  return (
    <>
      <div className="logo">
        <span role="img">🍿</span>
        <h1>FlickList</h1>
      </div>
    </>
  );
});

export { Search, Title };
