import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const CONTEXT_KEY = process.env.REACT_APP_GOOGLE_CONTEXT_KEY;
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setLoader(false);
        })
        .catch((err) => {
          console.log("error", err);
          setLoader(false);
        });
    };
    if (term) {
      fetchData();
    }
  }, [term]);
  return { data ,loader};
};

export default useGoogleSearch;
