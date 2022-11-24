import React from "react";
import Header from "./Header";
import Message from "./ChatList";

function Aside() {

  return (
    <div className="w-[349px] border-r border-border">
        <Header/>
      <div className="h-[calc(100%-60px)] overflow-auto  pt-2 w-full ">
        <Message />
      </div>
    </div>
  );
}

export default Aside;
