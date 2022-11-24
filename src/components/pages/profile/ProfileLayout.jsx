import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <section className="flex-1 overflow-auto">
      <div className="m-auto max-w-[975px] w-full pt-[30px] px-5 h-full ">
        <Header />
        <Nav />
        <Outlet />
      </div>
    </section>
  );
}

export default ProfileLayout;
