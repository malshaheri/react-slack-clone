import React from 'react';
import styled from 'styled-components';
import { AiOutlineSend } from 'react-icons/ai';



export default function ChatInput() {
  return(
  
  <ChatInputContainer>
    <form>
      
      <input placeholder='Write Message' /> 
      <button type='submit'><AiOutlineSend /></button>
    </form>
  </ChatInputContainer>
  )
}

const ChatInputContainer = styled.div`
display: flex;
justify-content: center;
border-radius: 20%;
height: 15%;
position: relative;


>form{
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

  :hover{
    color: var(--slack-color);
    cursor: pointer;

  }
}

`