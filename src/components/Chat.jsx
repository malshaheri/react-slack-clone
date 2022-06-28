import React from 'react';
import styled from 'styled-components';
import { IoMdStarOutline, IoMdInformationCircleOutline } from 'react-icons/io';
import ChatInput from './ChatInput';

export default function Chat() {
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          {' '}
          <h4>new channel </h4>
          <IoMdStarOutline />{' '}
        </HeaderLeft>
        <HeaderRight>
          <p>
            <IoMdInformationCircleOutline /> details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessage>
        <ChatButton> </ChatButton>
      </ChatMessage>
      <ChatInput />
    </ChatContainer>
  );
}
const ChatContainer = styled.div`
  margin-top: 60px;

  
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin: 10px;
  }
`;
const HeaderRight = styled.div`display: flex ; align-items: center; font-size:14px; >p {
 
    margin-right: 10px;
}`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatMessage = styled.div``;
const ChatButton = styled.div``;
