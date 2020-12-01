import React from "react";
import { Home, Search, List } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className='sidebar'>
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'
        alt=''
      />
      <span
        className='Bar'
        style={{ position: "relative", top: "38px", fontWeight: "bolder" }}
      >
        <ul
          style={{
            background: "#212121",
            borderRadius: "10",
            color: "ghostwhite",
          }}
        >
          <Home className='svgicon' ></Home> Home
        </ul>
        <ul>
          <Search className='svgicon' ></Search>{" "}
          Search
        </ul>
        <ul>
          <List className='svgicon' ></List> Your
          Library
        </ul>
      </span>
    </div>
  );
}
export default Sidebar;
