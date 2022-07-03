import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
//..................................
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";
//............................
export default function ChatInput({ channelName, channelId, chatRef }) {
  //   console.log(channelId);
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  // console.log(user);
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });
    chatRef.current.scrollIntoView({ behavior: "smooth" });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          placeholder={`Message # ${channelName}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          <AiOutlineSend />
        </button>
      </form>
    </ChatInputContainer>
  );
}

const ChatInputContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20%;
  height: 15%;
  position: relative;
  > form {
    position: fixed;
    bottom: 30px;
    width: 60%;
    display: flex;
    justify-content: center;
  }
  > form > input {
    width: 100%;
    border-radius: 3px;
    outline: none;
    padding: 15px;
    border: 1px solid lightgray;
  }
  > form > button {
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: lightgray;
    :hover {
      color: var(--slack-color);
      cursor: pointer;
    }
  }
`;
