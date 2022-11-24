import React from "react";
import Sidebar from "./components/Sidebar";
import Stories from "./Stories"
import Posts from "./post/Posts"
import { usePost } from "../../../context/postContext";
import { useUserData } from "../../../context/userDataContext";

function Home() {
  const {posts} = usePost()
  const {userData} = useUserData()
  
  return (
    <div className="flex  justify-center gap-7 mb-4 ">
      <div className="flex flex-col gap-3 mt-7">
        <Stories/>
        {posts?.map(itm => (
          <Posts key={itm?.id} itm={itm}/>
        ))}
      </div>
      <Sidebar />
    </div>
  );
}

export default Home;
