import React, { useState } from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, auth } from "../firebase";

import { NavLink, Link } from "react-router-dom";

import { BiPencil } from "react-icons/bi";
import { VscCircleFilled } from "react-icons/vsc";
import {
  MdMessage,
  MdAllInbox,
  MdDrafts,
  MdOutlineBookmark,
  MdOutlineGroup,
  MdApps,
  MdFileCopy,
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Sidebar() {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);
  const [show, setShow] = useState(true);
  const [less, setLess] = useState(true);

  // console.log(channels);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>slack</h2>
          <h3>
            <span>
              {" "}
              <VscCircleFilled />
            </span>
            {user.displayName}
          </h3>
        </SidebarInfo>
        <span>
          <BiPencil />
        </span>
      </SidebarHeader>
      <div style={{ display: less ? "block" : "none" }}>
        <SidebarOption Icon={MdMessage} title={"Threads"} />
        <SidebarOption  Icon={MdAllInbox} title={"Reactions"} />
        <SidebarOption  Icon={MdDrafts} title={"Saved items"} />
        <SidebarOption  Icon={MdOutlineBookmark} title={"Browser"} />
        <SidebarOption  Icon={MdOutlineGroup} title={"People"} />
        <NavLink to="/applications">
          <SidebarOption Icon={MdApps} title="Apps" />{" "}
        </NavLink>
        <SidebarOption Icon={MdFileCopy} title={"File browser"} />
      </div>

      <button type="click" onClick={() => setLess(!less)}>
        <SidebarOption
          Icon={less ? MdExpandLess : MdExpandMore}
          title={less ? "Show less" : "Show more"}
        />
      </button>

      <hr />
      <button type="click" onClick={() => setShow(!show)}>
        <SidebarOption
          Icon={show ? MdExpandLess : MdExpandMore}
          title={show ? "Hide Chanels" : "Show Chanels"}
        />
      </button>

      <hr />
      <div style={{ display: show ? "block" : "none" }}>
        <SidebarOption Icon={BsPlusLg} addChannelOption title={"Add Channel"} />

        {channels?.docs.map((doc) => (
          <Link to="/">
            <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
          </Link>
        ))}
      </div>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  min-width: 150px;
  overflow: auto;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
  > button {
    background-color: transparent;
    width: 100%;
    border: none;
    outline: none;
    color: #817f7f;
    font-size: 10px;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #49274b;
  padding-bottom: 10px;
  padding: 13px;
  > span {
    font-size: 18px;
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    padding-bottom: 30px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    padding-bottom: 20px;
    align-items: center;
  }
  > h3 > span {
    color: green;
    font-size: 14px;
    margin-right: 2px;
    margin-top: 1px;
  }
`;
