import React from "react";

function ChatItemTo({ photo, itm }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-[54px] flex justify-end flex-col ">
        <img src={photo && photo} className="w-[24px] h-[24px] rounded-full"/>
      </div>
      <div className=" p-3 border-border border rounded-full h-[44px] text-sm">
        {itm?.message}
      </div>
    </div>
  );
}

export default ChatItemTo;
