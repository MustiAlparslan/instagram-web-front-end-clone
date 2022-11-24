import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ChatList() {
  const AVATAR_URL =
  "https://i.pinimg.com/280x280_RS/dd/7b/1c/dd7b1ce9411f68448b2a2fadb7ece633.jpg";

  const list = {id: 1, username: 'Batuhan_', avatar: AVATAR_URL}
  

  return (
    <>
    <NavLink key={list?.uuid} to={`/inbox/${list?.uuid}`} onClick={() => {
      // localStorage.setItem('id', userAuth?.uuid)
      // localStorage.setItem('navData', JSON.stringify(data))
    }} className="w-full h-[72px] hover:bg-[#FAFAFA]   flex items-center gap-2  px-5 py-2">
      <div>
        <img src={list?.avatar} className='w-[56px] h-[56px] rounded-full' />
      </div>
        <div  className=" text-left">
          <h3 className="text-sm ">{list?.username}</h3>
          <p className="text-[#8e8e8e] text-sm ">
            Sent you a message <span className="px-[4px] py-0">.</span>
            14h
          </p>
        </div>
    </NavLink>
    </>
  );
}

export default ChatList;
