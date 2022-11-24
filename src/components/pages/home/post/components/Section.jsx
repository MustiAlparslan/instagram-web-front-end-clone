import React, { useEffect, useState } from "react";
import { usePost } from "../../../../../context/postContext";
import {
  Comment,
  Like,
  Save,
  UnSaved,
  SharePost,
  Unlike,
} from "../../../../../Svg";
import PostDetailsModal from "../../../../../modals/PostDetailsModal";

function Section({itm}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  };
  
  const [nowLike, setLike] = useState(itm?.like);
  const [isLike, setIsLike] = useState(false);
  const [isSave, setIsSave] = useState(false);

  const handleClick = () => {
    if (!isLike) {
      setLike(nowLike + 1);
      setIsLike(true);
    } else {
      setLike(nowLike - 1);
      setIsLike(false);
    }
  };

  const handleSave = () => {
    if (!isSave) {
      setIsSave(true);
    } else {
      setIsSave(false);
    }
    //
  };

  return (
    <section>
      <div>
        <img src={itm?.post} className="w-full" />
      </div>
      <div className="h-[46px] flex justify-between px-3 items-center">
        <div className="flex gap-3 items-center">
          <button type="button" onClick={handleClick}>
            {!isLike ? <Like /> : <Unlike />}
          </button>
          <button onClick={() => setIsOpen(!modalIsOpen)}>
            <Comment />
          </button>
          <button>
            <SharePost />
          </button>
        </div>
        <button onClick={handleSave}>{!isSave ? <Save /> : <UnSaved />}</button>
      </div>
      <div className="px-4">
        <div className="mb-1 flex gap-1">
          <p className="text-semibold">{nowLike}</p>
          <p className="text-semibold">likes</p>
        </div>
        <div className="flex gap-2 items-center mb-1">
          <h4 className="font-semibold text-sm">{itm?.username}</h4>
          <p className="text-sm">{itm?.des}</p>
        </div>
        <button onClick={() => setIsOpen(!modalIsOpen)} className="text-[#8e8e8e] text-sm mb-1">
          View all {itm?.comments} comments
        </button>
        <div className="text-[10px] text-[#8e8e8e] mb-1">{itm?.date}</div>
        <PostDetailsModal setIsLike={setIsLike} isLike={isLike} nowLike={nowLike} setLike={setLike} itm={itm} setIsOpen={setIsOpen} modalIsOpen={modalIsOpen}/>

      </div>
    </section>
  );
}

export default Section;
