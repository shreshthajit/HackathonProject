import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute, host } from "../utils/APIRoutes.js";
import Contacts from "../components/Contacts.js";
import Welcome from "../components/Welcome.js";
import ChatContainer from "../components/ChatContainer.js";
import { io } from "socket.io-client";
import "../pages/Chat.css";

const Chat = () => {
  const socket = useRef();

  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
        setIsLoaded(true);
        console.log(currentUser);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (currentUser) {
        socket.current = io(host);
        socket.current.emit("add-user", currentUser._id);
      }
    }
    fetchData();
  }, [currentUser]);

  useEffect(() => {
    async function fetchData() {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);
          //console.log("this is error"+currentUser);
        } else {
          navigate("/myAvatar");
        }
      }
    }
    fetchData();
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <div>
      {/* <Container> */}
      <div className="container p-4">
        <div class="dflex d-flex justify-content-between p-5">
          <div className="item">
            <Contacts
              contacts={contacts}
              currentUser={currentUser}
              changeChat={handleChatChange}
            />
          </div>

          {isLoaded && currentChat === undefined ? (
              <Welcome currentUser={currentUser} />
          ) : (
              <ChatContainer
                currentChat={currentChat}
                currentUser={currentUser}
                socket={socket}
              />
          )}
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};


export default Chat;
