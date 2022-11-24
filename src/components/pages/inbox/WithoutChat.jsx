import React from "react";
import { Direct } from "../../../Svg";

function WithoutChat() {
  return (
    <div className="flex justify-center w-full items-center flex-col gap-2 h-full">
      <Direct />
      <h3 className="text-[22px] font-light">Your Messages</h3>
      <p className="text-sm text-[#8e8e8e]">
        Send private photos and messages to a friend or group.
      </p>
      <button
        type="button"
        className="text-white text-sm mt-4  font-semibold px-[9px] rounded-[4px] py-[5px] bg-[#0095f6]"
      >
        Send Message
      </button>
    </div>
  );
}

export default WithoutChat;
