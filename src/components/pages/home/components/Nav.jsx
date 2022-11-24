import React from "react";
import Logout from "../../../Logout";
import { NavLink } from "react-router-dom";

import {
  Home,
  Explore,
  Messages,
  Notifications,
  Create,
  ActiveHome,
  ActiveMessages,
  Settings,
  Save,
  Profile,
  Switch,
  FindPeople,
} from "../../../../Svg";
import { useUserData } from "../../../../context/userDataContext";
import { useActiveUser } from "../../../../context/userContext";


function Nav() {
  const {activeUser} = useActiveUser()

  const [isClick, setIsClick] = React.useState(false);


  return (
    <nav className="pl-[24px] flex gap-[24px] relative">
      <NavLink to="/">
        <Home />
      </NavLink>
      <NavLink to="/inbox">
        <Messages />
      </NavLink>
      <NavLink to="">
        <Create />
      </NavLink>
      <div className="cursor-pointer">
        <FindPeople />
      </div>
      <div className="cursor-pointer">
        <Notifications />
      </div>
      {isClick ? (
        <nav className="flex  z-30 flex-col  rounded-[4px] absolute top-10 right-[-50px] special:left-[85px]    bottom-3  bg-gray-100  w-[230px] h-full  drop-shadow-[0_0_5px_rgba(0,0,0,.0975)]">
          <div className="flex flex-col" onClick={() => setIsClick(!isClick)}>
            <NavLink
              to={`/${activeUser?.username}/`}
              className="rounded-t-[4px] flex items-center gap-4  py-[8px] px-[16px]  bg-white"
            >
              <Profile /> <h4>Profile</h4>
            </NavLink>
            <NavLink
              to=""
              className="flex items-center gap-4 py-[8px] px-[16px]  bg-white"
            >
              <Save size="16" /> <h4>Saved</h4>
            </NavLink>
            <NavLink
              to=""
              className="flex items-center gap-4  py-[8px] px-[16px] bg-white  rounded-[4px] "
            >
           
              <Settings size="16" /> <h4>Settings</h4>
            </NavLink>
            <button
              type="button"
              className="flex items-center gap-4  py-[8px] px-[16px]  text-left bg-white "
            >
              <Switch /> Switch accounts
            </button>
            <div className="w-full bg-[rgba(219,219,219)] h-[1px]"></div>
            <Logout />
          </div>
        </nav>
      ) : (
        <></>
      )}
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => setIsClick(!isClick)}
      >
        <img src={activeUser?.avatar}  className="w-[24px] h-[24px] rounded-full"/>
      </button>
    </nav>
  );
}

export default Nav;
