import React from "react";
import styled from "styled-components";

import {
  IoPersonCircleOutline,
  IoTime,
  IoSearch,
  IoHelpCircleOutline,
} from "react-icons/io5";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        
        <HeaderAvatar
        
        />
        <span>
          <IoTime />
        </span>
      </HeaderLeft>

      <HeaderSearch>
        <IoSearch />
        <input type="text" placeholder="Search" />
      </HeaderSearch>
      <HeaderRight>
        <span>
          <IoHelpCircleOutline />
        </span>{" "}
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
  margin-left: 20px;
  > span {
    margin-right: 30px;
    margin-left: auto;
  }
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
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
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
