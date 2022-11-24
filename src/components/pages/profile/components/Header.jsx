import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Followers from "../Followers";
import { Settings, Verified } from "../../../../Svg";
import { useSelector } from "react-redux";
import { useActiveUser } from "../../../../context/userContext";

function Header() {
  const {activeUser} = useActiveUser()
  
  const navigate = useNavigate()

  const Editprofile = () => {
    const handleEditProfile = () => {
      return navigate(`/${activeUser?.username}/accounts/edit`);
    };

    return (
      <>
        <button
          type="button"
          className="border text-sm rounded font-semibold  w-[89px]  h-[32px]"
          onClick={handleEditProfile}
        >
          Edit Profile
        </button>
        <Settings />
      </>
    );
  };

  const Options = () => {
    return (
      <svg
        aria-label="Options"
        color="#262626"
        fill="#262626"
        height="32"
        role="img"
        viewBox="0 0 24 24"
        width="32"
      >
        <circle cx="12" cy="12" r="1.5"></circle>
        <circle cx="6" cy="12" r="1.5"></circle>
        <circle cx="18" cy="12" r="1.5"></circle>
      </svg>
    );
  };

  const isUser = true
  const verified = false
  const defaultProfilePhoto = ""
  const handleFollow = () => {

  }
  
  
  return (
    <>
      <header className="flex  w-full mb-11">
        <div className="w-[291px] mr-[30px]  text-center">
          <img
            src={activeUser?.avatar}  
            className="w-[150px] rounded-full h-[150px] m-auto"
          />
        </div>
        <section className="flex flex-col gap-5 flex-1">
          <div className="flex items-center w-full gap-4">
            <h2 className="text-[28px] font-light flex gap-3 items-center">
              <span>{activeUser?.username}</span>
              {activeUser?.verified  ? <Verified /> : <></>}
            </h2>
            {isUser ? (
              <Editprofile />
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleFollow}
                  className="px-[9px] py-[5px] bg-[#0095F6] text-white text-sm h-[30px] rounded-[4px] font-semibold"
                >
                  <div className="px-4">Follow</div>
                </button>
                <Options />
              </>
            )}
          </div>
          <div className="flex  gap-11 items-center">
            <div>
              <span className="font-semibold mr-1">
              {activeUser?.posts.length}
              </span>
              <span>posts</span>
            </div>
            <button type="button">
              <span className="font-semibold mr-1">
                {activeUser?.followers.length}
              </span>
              <span>followers</span>
            </button>

            <Followers type="button">
              <span className="font-semibold mr-1">
                {activeUser?.following.length}
              </span>
              <span>following</span>
            </Followers>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">
             {activeUser?.fullName}
            </span>
            <span>{activeUser?.bio}</span>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
