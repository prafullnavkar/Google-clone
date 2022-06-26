import React, { useState, useEffect } from "react";
import API_KEYS from "../Keys";

const CONTEXT_KEYS = "29d3e8e12138bc44e";
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEYS}&cx=${CONTEXT_KEYS}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
