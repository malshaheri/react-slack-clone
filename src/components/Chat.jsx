import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { IoMdStarOutline, IoMdInformationCircleOutline } from "react-icons/io";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { GrChannel } from "react-icons/gr";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/apprSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

export default function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  // console.log("roomDetails", roomDetails?.data());
  //   console.log("roomMessages", roomMessages);
  const chatRef = useRef(null);
  useEffect(() => {
    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>
                  {" "}
                  <span>
                    <GrChannel />
                  </span>{" "}
                  {roomDetails?.data().name}
                </strong>
              </h4>

              <IoMdStarOutline />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <IoMdInformationCircleOutline />
                Details
              </p>
            </HeaderRight>
          </Header>
          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <Message
                  key={doc.id}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                  message={message}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            channelName={roomDetails?.data().name}
            channelId={roomId}
            chatRef={chatRef}
          />
        </>
      )}
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow: scroll;
  margin-top: 60px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
    
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  > p {
    display: flex;
    margin-right: 10px;
  }
`;

const ChatMessages = styled.div``;

const ChatBottom = styled.div``;
