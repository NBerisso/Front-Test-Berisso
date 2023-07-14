import React, { useState} from "react";
import Main from "../components/Main";
import SearchBar from "../components/SearchBar";
import URLS from "../constans/constants";
import usefetch from '../hooks/useFetch';
import searchFilter from "../hooks/searchFilter";

const Home = () => {
  const {feedURL} = URLS
  const { data, stillLoading } = usefetch(feedURL)
  const allData = data?.data?.feed
  const [searchTerm, setSearchterm] = useState("");

  const feed = searchFilter(allData, searchTerm)
  const feedCount = feed?.length;


  return (
    <>
      <SearchBar setSearchterm={setSearchterm} feedCount={feedCount} />
      <Main  feed={feed}  />
    </>
  );
};

export default Home;
