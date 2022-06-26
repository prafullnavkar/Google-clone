import React from "react";
import { useStateValue } from "../component/StateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const {data} = useGoogleSearch(term)
  // custome search enigne api
  console.log(data)
  return (
    <div>
      <div>
        <h1>{term}</h1>
      </div>
      <div></div>
    </div>
  );
};

export default SearchPage;
