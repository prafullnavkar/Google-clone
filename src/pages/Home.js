import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../component/Search";

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-between py-2 px-1 text-sm font-medium text-slate-600">
        <div className="flex items-center ">
          <Link to="/about" className="m-2 hover:underline">
            About
          </Link>
          <Link to="/store" className="m-2 hover:underline">
            Store
          </Link>
        </div>
        <div className="flex justify-center items-center ">
          <Link to="/gmail" className="m-2 hover:underline">
            Gmail
          </Link>
          <Link to="/images" className="m-2 hover:underline">
            Images
          </Link>
          <AppsIcon className="m-2" />
          <Avatar className="mx-2 my-1" sx={{ width: 30, height: 30 }} />
        </div>
      </div>
      <div className="flex justify-center pt-[50px]">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            className="h-[100px] md:h-[120px] object-contain"
          />
          <div className="mt-4">
            <Search hideButtons={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
