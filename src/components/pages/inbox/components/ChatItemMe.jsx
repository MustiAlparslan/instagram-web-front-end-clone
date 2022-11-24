import React from "react";

function ChatItemMe({itm}) {
  return (
    <div className="flex items-center justify-end mb-[12px]">
      <div className="bg-[#EFEFEF] text-sm p-3 rounded-full">
        {itm?.message}
      </div>
    </div>
  );
}

export default ChatItemMe;
