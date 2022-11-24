import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { useActiveUser } from "../context/userContext";
import {
  AddMedia,
  Comment,
  Create,
  Emoji,
  Like,
  Options,
  Posts,
  Save,
  SharePost,
  Unlike,
} from "../Svg";

Modal.setAppElement("#root");

function PostDetailsModal({
  isLike,
  setIsLike,
  nowLike,
  setNowLike,
  modalIsOpen,
  setIsOpen,
  itm,
}) {
  const {activeUser} = useActiveUser()
  const inputRef = useRef(null);
  const [text,setText] = React.useState('')
  const handleAddMedia = () => {
    inputRef.current.click();
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,.7)",
    },
    content: {
      padding: "0",
      margin: "0",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "0",
      width: "1015px",
      height: "560px",
      display: "flex",
    },
  };

  const afterOpenModal = () => {
    //
  };

  const closeModal = () => {
    setIsOpen(false);
    localStorage.getItem("imgObj") && localStorage.removeItem("imgObj");
  };

  const handleLike = () => {
    setIsLike(!isLike);
    if (!isLike) {
      setNowLike(nowLike + 1);
    } else {
      setNowLike(nowLike - 1);
    }
  };
  const handleSubmit = e =>{
    e.preventDefault()

  } 
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="max-w-[506px] border-0 flex items-center justify-center w-full  bg-black ">
        <div
          className={`w-[506px] h-[506px]`}
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            backgroundImage: `url(${itm?.post})`,
          }}
        ></div>
      </div>
      {/* w-[451px] */}
      <div className="flex-1 h-full   bg-white">
        <div className="h-full flex flex-col">
          <header className="w-full h-[60px] border-b flex gap-3 justify-between items-center">
            <div className=" p-[14px_14px_14px_16px] flex gap-3 items-center">
              <img
                src={`${itm?.avatar}`}
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="font-semibold text-sm">{itm?.username}</div>
            </div>
            <div className="w-[60px] flex items-center justify-center ">
              <Options />
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-[16px]">
            <div className="w-full gap-4 flex mb-2 items-center">
            <div className='flex items-center justify-center'>
              <img  src={`${itm?.avatar}`} className='w-[32px] h-[32px] rounded-full'/>
            </div>
            <div className="flex flex-col">
              <div className='flex gap-2'>
                <div className='text-sm font-semibold'>{itm?.username}</div>
                <div className='text-sm font-normal'>{itm?.des}</div>
              </div>
              <div className='text-sm text-[#8e8e8e]'>7d </div>
            </div>
          </div>

            {/* {itm && itm?.comments.map((item) => (
              <div  className="w-full gap-4 mb-2  flex items-center">
                <div className="flex items-center justify-center">
                  <img
                    src={item?.avatar}
                    className="w-[32px] h-[32px] rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <div className="text-sm font-semibold">
                      {item?.username}
                    </div>
                    <div className="text-sm font-normal">{item?.comments}</div>
                  </div>
                  <div className="text-sm text-[#8e8e8e]">2d </div>
                </div>
              </div>
            ))} */}
          </main>

          <footer className="w-full mt-auto ">
            <div className="px-[16px]">
              <div className="w-full flex items-center justify-between h-[55px] ">
                <div className="flex gap-2 items-center">
                  <button type="button" onClick={handleLike}>
                    {isLike ? <Unlike /> : <Like />}
                  </button>
                  <div>
                    <Comment />{" "}
                  </div>
                  <div>
                    <SharePost />{" "}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Save />
                </div>
              </div>
              <div className="font-semibold text-sm">{nowLike} likes</div>
              <div className="font-normal text-[10px] text-[#8e8e8e] mb-1">
                2 DAYS AGO
              </div>
            </div>

            <footer className="w-full h-[53px] gap-2 py-[6px] border-t flex items-center px-3">
              <div>
                <Emoji />
              </div>
              <form onSubmit={handleSubmit} className='w-full flex'>
                <div className="w-full">
                  <input
                    type="text"
                    value={text}
                    placeholder="Add a comment..."
                    className="w-full text-sm  border-black outline-none"
                    onChange={e => setText(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-sm font-semibold text-[#0095f6]"
                  >
                    Post
                  </button>
                </div>
              </form>
            </footer>
          </footer>
        </div>
      </div>
    </Modal>
  );
}

export default PostDetailsModal;
