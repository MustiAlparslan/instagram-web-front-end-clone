import React from "react";
import Chat from "./components/Chat";
import Aside from "./Aside";
import WithoutChat from "./WithoutChat"
import { Outlet } from "react-router-dom";

function InboxLayout() {


  return (
      <div className="h-full flex-1 p-[20px]   justify-center">
        <div className="flex w-full h-full max-w-[945px]  bg-white border m-auto border-[rgba(219,219,219)] rounded">
          <Aside/>
          <div className="flex-1">
            <Outlet/>
          </div>
        </div>
      </div>
  );
}

export default InboxLayout;
