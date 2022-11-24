import React from "react";
import { Emoji } from "../../../../../Svg";

function Footer() {
  return (
    <footer className="w-full h-[49px] gap-2 max-h-[89px] border-t flex items-center justify-between px-3">
      <div>
        <Emoji />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full text-sm  border-black outline-none"
        />
      </div>
      <div>
        <button type="submit" className="text-sm font-semibold text-[#0095f6]">
          Post
        </button>
      </div>
    </footer>
  );
}

export default Footer;
