import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Navigate, useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

function Followers({ type, children }) {


  const customStyles = {
    content: {
      padding: "0",
      margin: "0",
      border: "none",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "400px",
      height: "400px",
      borderRadius: "12px",
      overflow: "hidden",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add("bg-sky-500");
    console.log("Log");
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("bg-sky-500");
  };


  return (
    <div>
      <button type={type} onClick={openModal}>
        {children}
      </button>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <header className=" flex   w-full items-center  border-b border-border h-[42px]">
            <div className="m-auto  font-semibold text-[16px]">Followers </div>
            <div className="px-2">
              <button onClick={closeModal}>X</button>
            </div>
          </header>
          {/* <nav className="w-full h-[calc(100%-42px)] py-3 overflow-auto">
            {user &&
              user.map((itm) =>
                itm.data.map((item) =>
                  item.following.followingData.map((followingUser) =>
                    followingUser.map((fUser) => (
                      <UserList
                      key={fUser.id}
                        photo={fUser?.photo}
                        username={fUser?.username}
                        verified={fUser?.verified}
                        fullName={fUser?.fullName}
                      />
                    ))
                  )
                )
              )
              }
          </nav> */}
        </Modal>
      </div>
    </div>
  );
}

const UserList = ({ fullName, photo, username, verified }) => {
  const navigate = useNavigate()

  
  const handleClick = (e) => {
    console.log(e.target.innerText)
    navigate(`/${e.target.innerText}/`)
  };
  return (
    <div className="flex items-center justify-between px-3 mb-2">
      <div className="flex items-center gap-3 ">
        <div   className="cursor-pointer">
          <img width="44" src={photo} />
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold flex gap-1  items-center cursor-pointer">
            <span onClick={handleClick}>{username}</span>
            {/* <span>{verified ? <Verified/> : <></>}</span> */}
          </div>
          <div className="text-sm text-[#8e8e8e]">{fullName}</div>
        </div>
      </div>
      <div className="">
        <button
          type="button"
          className="border-border border rounded text-sm font-semibold px-[9px] py-[5px]"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default Followers;

{
  /* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */
}
{
  /* <button onClick={handleClick}>Add post</button> */
}
