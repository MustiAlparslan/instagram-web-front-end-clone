import React, { useState } from "react";
import { Down, NewMessage } from "../../../Svg";
import {useActiveUser} from  "../../../context/userContext"
function Header() {
  const {activeUser} = useActiveUser()

  
  return (
    <div className="w-full h-[60px] flex  justify-center  items-center border-b  border-border px-[20px]">
      <div className="w-full flex gap-2 items-center justify-center text-center">
        <h3 className="font-semibold text-base">{activeUser?.username}</h3>
        <span className="rotate-180">
          <Down />
        </span>
      </div>
      <div className="w-30 flex justify-end cursor-pointer">
        <NewMessage />
      </div>
    </div>
  );
}

export default Header;
