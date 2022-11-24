import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { InstagramLogo } from "../../../../Svg";
import Nav from "./Nav";

function Header() {
  const [isClick, setIsClick] = React.useState(false);
  const defaultProfilePhoto = "";
 
  return (
    <header className="flex items-center justify-center w-full h-[60px] bg-white border-border border border-bottom ">
      <div className="w-[975px] px-[20px]  flex justify-between items-center">
        <NavLink to="/">
          <InstagramLogo />
        </NavLink>
       <div className="flex items-center gap-14 ">
         <Search />
          <Nav />
       </div>
      </div>
    </header>
  );
}

export default Header;
