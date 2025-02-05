import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <div className="relative">
      <BsSearch className="absolute top-1/2 left-2 -translate-y-1/2 text-blue-500" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="    Search Book by ID..."
        className="px-4 py-2 border rounded-lg w-full bg-white bg-opacity-70"
      />
    </div>
  );
};

export default SearchBar;
