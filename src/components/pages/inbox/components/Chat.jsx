import React, { useEffect, useState } from "react";
import ChatItemTo from "./ChatItemTo";
import ChatItemMe from "./ChatItemMe";
import Footer from "./Footer";
import Header from "./Header";
import { useActiveUser } from "../../../../context/userContext";

function Chat() {
  const {activeUser} = useActiveUser()
  const photo = 'https://i.pinimg.com/280x280_RS/dd/7b/1c/dd7b1ce9411f68448b2a2fadb7ece633.jpg'
  const [messages, setMessages] = useState([{fromMe:false,message: 'Naber ? '}, {fromMe: true,message: 'iyi senden ? '}]);
  
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="overflow-auto w-full flex-1  p-[20px_20px_0_20px]">
      {
        messages?.map((itm, key) => {
          return (
            itm?.fromMe == true ? 
            <ChatItemMe key={key} photo={activeUser?.avatar} itm={itm}/>
            :
            <ChatItemTo key={key} photo={photo && photo} itm={itm}/>
            )
          }
          )
      }
     </div>
     <Footer/>
    </div>
  );
}

export default Chat;
