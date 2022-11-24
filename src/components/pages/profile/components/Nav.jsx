import React, { useEffect } from "react";
import classNames from "classnames";
import { Posts, Saved, Tagged } from "../../../../Svg";

import { NavLink, useLocation } from "react-router-dom";
import { useUserData } from "../../../../context/userDataContext";
import { useActiveUser } from "../../../../context/userContext";

function Nav() {
  const {activeUser} = useActiveUser()
  
  const location = useLocation();

  const btnClass = (isActive) =>
    classNames({
      "mr-[60px] text-xs text-[#8e8e8e] font-semibold  h-full flex items-center ": true,
      "border-t border-black text-black": isActive,
    });


  return (
    <div className="w-full border-t h-[53px] items-center flex justify-center">
      <nav className="flex h-full items-center">
        <NavLink
          to={`/${activeUser?.username}/`}
          className={({ isActive }) => btnClass(isActive)}
        >
          <Posts /> <span className="ml-1">POSTS</span>
        </NavLink>
        <NavLink
          to={`/${activeUser?.username}/saved`}
          className={({ isActive }) => btnClass(isActive)}
        >
          <Saved /> <span className="ml-1">SAVED</span>
        </NavLink>
        <NavLink
          to={`/${activeUser?.username}/tagged`}
          className={({ isActive }) => btnClass(isActive)}
        >
          <Tagged /> <span className="ml-1">TAGGED</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
