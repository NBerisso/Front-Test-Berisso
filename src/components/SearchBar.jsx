import React from "react";

const SearchBar = ({ setSearchterm, feedCount }) => {
  return (
    <>
      <div className="flex flex-row justify-end mx-90 mt-10 w-200">
        <div className="bg-cyan-400 text-white p-2 rounded mr-5">{feedCount}</div>
        <input
          type="text"
          className="rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
          placeholder="Filter Podcast...."
          onChange={(event) => {
            setSearchterm(event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
