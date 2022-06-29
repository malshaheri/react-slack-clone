import React from "react";
import styled from "styled-components";

export default function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt={user} />
      <MessageInfo>
        <h4>
          {user}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}
const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    width: 50px;

    object-fit: cover;
    border-radius: 50%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 {
    font-size: 20px;
    padding-left: 15px;
    color: var(--slack-color);
    > span {
      color: gray;
      font-weight: 300;
      margin-left: 4px;
      font-size: 10px;
    }
  }
  > p {
    padding-top: 10px;
    padding-left: 15px;
    color: #494848;
  }
`;
