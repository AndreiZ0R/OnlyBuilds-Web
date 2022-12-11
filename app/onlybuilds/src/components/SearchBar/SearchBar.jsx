import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ color }) => {
  const [writing, setWriting] = useState("false");

  return (
    <div className="main">
      <input
        placeholder="Search"
        type="text"
        className="input"
        onMouseEnter={() => {
          setWriting("true");
        }}
        onMouseLeave={() => {
          setWriting("false");
          this.value = "";
        }}
        onFocus={() => {
          this.value = "";
        }}
        style={{
          color: color,
          border: `3px solid ${color}`,
          fontFamily: "var(--fontFamily)",
        }}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={writing === "false" ? color : "transparent"}
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
    </div>
  );
};

export default SearchBar;
