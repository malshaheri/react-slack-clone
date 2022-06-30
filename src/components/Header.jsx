import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { BsStopwatch } from "react-icons/bs";
import { FiPlayCircle } from "react-icons/fi";

import {
  IoRefreshOutline,
  IoPersonCircleOutline,
  IoSearch,
  IoHelpCircleOutline,
} from "react-icons/io5";

export default function Header() {
  const [user] = useAuthState(auth);
  const [seconds, setSeconds] = useState(null);
  const renders = useRef(0);
  const inputRef = useRef();
  const timerId = useRef();

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
    inputRef.current.focus();
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    inputRef.current.focus();
  };

  const resetTimer = () => {
    setSeconds(0);
    stopTimer();
    inputRef.current.focus();
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </HeaderLeft>

      <HeaderSearch>
        <IoSearch />
        <input type="text" placeholder="Search" />
      </HeaderSearch>
      <IoHelpCircleOutline style={{ marginLeft: "10px" }} />

      <HeaderRight>
        <TimerContainer>
          <span></span>
          <span>{seconds}</span>
          <FiPlayCircle onClick={startTimer} />
          &nbsp;&nbsp;
          <BsStopwatch onClick={stopTimer} />
          &nbsp;&nbsp;
          <IoRefreshOutline onClick={resetTimer} />
        </TimerContainer>
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  color: #eee;
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
`;

const HeaderAvatar = styled(IoPersonCircleOutline)`
  font-size: 40px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  text-align: center;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  padding: 0 10px;
  color: gray;
  border: 1px solid gray;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
    padding: 5px;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > span {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const TimerContainer = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    margin-left: auto;
    margin-right: 20px;
    font-family: arial;
    color: #fff;
    font-size: 12px;
    text-align: center;
  }
`;
