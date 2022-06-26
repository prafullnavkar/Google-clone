import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
const Search = ({ hideButtons=false }) => {
  const [{term}, dispatch] = useStateValue();
  const [input, setInput] = useState(term);

  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    console.log("you hit search button!", input);
    navigate("/search");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };
  return (
    <form onSubmit={search}>
      <div className="w-[400px] md:w-[500px] hover:shadow-[0_2px_5px_1px_rgba(0,0,0,0.2)] border-2 border-gray-300 rounded-full p-[10px] flex">
        <SearchIcon className="mx-auto text-[#9aa0a6]" />
        <div className="flex-1 ">
          <input
            className="focus:outline-none w-full px-2"
            value={input }
            onChange={(e) => setInput(e.target.value)}
            required
          />
        </div>
        <MicIcon className="mx-auto text-[#9aa0a6]" />
      </div>
      {!hideButtons && (
        <div className="mt-2 flex justify-center items-center">
          <Button
            type="submit"
            variant="outlined"
            className="m-2 lowercase hover:shadow-[0_2px_5px_1px_rgba(0,0,0,0.2)] bg-[#f8f9fa] text-[#3c4043] border-0"
          >
            Google Search
          </Button>
          <Button
            variant="outlined"
            className="m-2 lowercase hover:shadow-[0_2px_5px_1px_rgba(0,0,0,0.2)] bg-[#f8f9fa] text-[#3c4043] border-0"
          >
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
