import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth"; 
import { BiPencil } from 'react-icons/bi';
import { VscCircleFilled } from 'react-icons/vsc';
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
} from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';




export default function Sidebar() {
  const [channels] = useCollection(db.collection("rooms"));
const [user] = useAuthState(auth); 

console.log("channel", channels && channels.docs)
console.log("user", user)
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>slack</h2>
          <h3>
            <span>
              {' '}
              <VscCircleFilled />
            </span>
            Group Project
          </h3>
        </SidebarInfo>
        <span>
          <BiPencil />
        </span>
      </SidebarHeader>
      <SidebarOption Icon={MdMessage} title="Message" />
      <SidebarOption Icon={MdDrafts} title="Saved Items" />
      <SidebarOption Icon={MdAllInbox} title="Reactions" />
      <SidebarOption Icon={MdOutlineBookmark} title="Channel Browser" />
      <SidebarOption Icon={MdOutlineGroup} title="User Group" />
      <SidebarOption Icon={MdApps} title="Apps" />
      <SidebarOption Icon={MdFileCopy} title="File Browser" />
      <SidebarOption Icon={MdExpandLess} title="Show Less" />
      <hr />
      <SidebarOption Icon={MdExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={BsPlusLg} title="Add Channel" addChannelOption />
      {/* <SidebarOption title="Create New" /> */}
      {channels?.docs.map((doc) => (
<SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
))} 

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
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
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
