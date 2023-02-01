import React,{useState,useEffect} from "react";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import axios from "axios";
import { useRef } from "react";
import { getAllMessageRoute, sendMessageRoute } from "../utils/APIRoutes.js";
import {v4 as uuidv4} from "uuid";
import  Container  from "../components/ChatContainerStyle.js";

const ChatContainer = ({ currentChat, currentUser,socket }) => {

  const [messages,setMessages] = useState([]);
  const [arrivalMessage,setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  


  useEffect(() => {
    async function fetchData() {

      const response = await axios.post(getAllMessageRoute,{
        from: currentUser?._id,
        to: currentChat?._id,
      });
      setMessages(response.data);
      console.log(messages);
    }
    fetchData();
  },[currentChat]);


  const handleSendMsg = async (msg) => {
     await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });

    socket.current.emit("send-msg",{
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
    
    const msgs = [...messages];
    msgs.push({fromSelf: true,message: msg});
    setMessages(msgs);
    
  };

  useEffect(() => {
    if(socket.current){
      socket.current.on("msg-recieve",(msg) =>{
        setArrivalMessage({fromSelf:false, message: msg});
      });
    }
  },[]);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev,arrivalMessage]);
  },[arrivalMessage]);


  useEffect(() =>{
    scrollRef.current?.scrollIntoView({behavior: "smooth"});
  },[messages])



  
  

  return (
    <>
      {currentChat && (
        <Container>
          <div className="chat-header">
            <div className="user-details">
              <div className="avatar">
                <img
                  src={currentChat.avatarImage}
                  alt="avatar"
                />
              </div>
              <div className="username">
                <h3>{currentChat.username}</h3>
              </div>
            </div>
            <Logout />
          </div>
          {/* <Messages /> */}
          <div className="chat-messages">
              {
                messages.map((message) => {
                  return (
                    <div ref={scrollRef} key={uuidv4()}>
                      <div className={`message ${message.fromSelf ? "sended" : "reciever"}`}>
                        <div className="content">
                           <p>
                              {message.message}
                           </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
          <ChatInput handleSendMsg={handleSendMsg} />
        </Container>
      )}
    </>
  );
};

export default ChatContainer;