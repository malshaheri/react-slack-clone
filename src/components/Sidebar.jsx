import React, { useState,useEffect } from "react";
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
import { AiOutlineUsergroupDelete } from "react-icons/ai";


import { useAuthState } from "react-firebase-hooks/auth";

import {
  onSnapshot,
  collection,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";


export default function Sidebar() {
  const [channels] = useCollection(db.collection("rooms"));
  const [rooms, setRooms] = useState([]);

  const [user] = useAuthState(auth);
  const [show, setShow] = useState(true);
  const [less, setLess] = useState(true);

  // console.log(channels);

  //---------------deletQu----------------------

  useEffect(
    () =>
      onSnapshot(collection(db, "rooms"), (snapshot) =>
        setRooms(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    [rooms]
  );

  const deleteQuChannel = async () => {
    const userInputName = prompt("Enter rooms name");

    const collectionRef = collection(db, "rooms");
    const q = query(collectionRef, where("name", "==", userInputName));
    const snapshot = await getDocs(q);

    const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    results.forEach(async (result) => {
      const docRef = doc(db, "rooms", result.id);
      await deleteDoc(docRef);
    });
  };

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

            <h4>
              <BiPencil />
            </h4>
          </h3>
        </SidebarInfo>
      </SidebarHeader>
      <div style={{ display: less ? "block" : "none" }}>
        <NavLink to="/threads">
          <SidebarOption Icon={MdMessage} title={"Threads"} />
        </NavLink>
        <SidebarOption Icon={MdAllInbox} title={"Reactions"} />
        <SidebarOption Icon={MdDrafts} title={"Saved items"} />
        <SidebarOption Icon={MdOutlineBookmark} title={"Browser"} />
        <SidebarOption Icon={MdOutlineGroup} title={"People"} />
        <Link to="/applications">
          <SidebarOption Icon={MdApps} title="Apps" />{" "}
        </Link>
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

        <button onClick={()=>deleteQuChannel()}>
          <AiOutlineUsergroupDelete />
          Query Delete
        </button>

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
`;
const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 30px;
    font-weight: 900;
    padding-bottom: 30px;
    padding-left: 10px;
  }
  > h3 {
    display: flex;
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 20px;
    align-items: center;
    > h4 {
      font-size: 20px;
      padding-left:20px;
      font-weight: 900;
      :hover {
        opacity: 0.7;
      }
    }
  }
  > h3 > span {
    color: green;
    font-size: 14px;
    margin-right: 2px;
    margin-top: 1px;
  }
`;
