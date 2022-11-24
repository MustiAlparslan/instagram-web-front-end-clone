import React from "react";
import {
  SearchIcon,
} from "../../../../Svg"

function Search() {
  const [focus, setFocus] = React.useState(false);
  const [text, setText] = React.useState("");
  return (
    <div className=" h-[36px] relative max-w-[268px] w-full   ">
      <label className="w-[268px] bg-[#EFEFEF] gap-2 h-[36px] px-4 flex items-center justify-center rounded-lg">
        {!focus && <SearchIcon />}
        <input
          type="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setFocus(!focus)}
          className="bg-[#EFEFEF]  w-full p-[0_12px]  rounded-lg h-full outline-none"
          placeholder="Search"
        />
      </label>
    </div>
  );
}

export default Search;
