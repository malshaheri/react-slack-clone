import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { enterRoom } from "../features/apprSlice";
import { MdOutlineDelete } from "react-icons/md";

//..............................
import "firebase/compat/auth";
import "firebase/compat/firestore";
//................................

import { connect } from "react-redux";

import {
  onSnapshot,
  addDoc,
  collection,
  doc,
  deleteDoc,
} from "firebase/firestore";

//................................

const SidebarOption = ({
  Icon,
  title,
  addChannelOption,
  id,
}) => {
  //   console.log("channels", channels && channels.docs);
  const [rooms, setRooms] = useState([]);
  const dispatch = useDispatch();

  //..................selectChannel................

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };
  //..................addChannel................
  const addChannel = async () => {
    const channelName = prompt("Add Channel");
    if (channelName) {
      const collectionRef = collection(db, "rooms");
      const payload = { name: channelName };
      const docRef = await addDoc(collectionRef, payload);
      console.log("The new ID is: " + docRef.id);
    }
  };

  //------------------------------deleteChannel----------------------------------
  useEffect(
    () =>
      onSnapshot(collection(db, "rooms"), (snapshot) =>
        setRooms(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  const deleteChannel = async (id) => {
    const docRef = doc(db, "rooms", id);
    await deleteDoc(docRef);
    window.location.reload();
  };



  return (
    <div>
      <SidebarOptionContianer
        key={id}
        onClick={(addChannelOption ? addChannel : selectChannel)}
      >
        {Icon && <Icon style={{ padding: "8px" }} />}

       
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel key={id}>
            <h3>
              <span># {title}</span>
              <LineDelete>
                {" "}
                <MdOutlineDelete onClick={() => deleteChannel(id)} />
              </LineDelete>
            </h3>
          </SidebarOptionChannel>
        )}
      </SidebarOptionContianer>
    </div>
  );
};

const SidebarOptionContianer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 2px;
  font-size: 12px;
  transition: 0.5s;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
`;

const SidebarOptionChannel = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > h3 {
    font-weight: 300;
    display: flex;
    justify-content: space-between;
    width: 100px;

    > span {
      padding-left: auto;
      padding-right: 10px;
      text-align: right;
      position: relative;
    }
  }
`;
const LineDelete = styled.div`
  display: inline-flex;
  color: gray;
  :hover {
    color: white;
  }
`;

export default connect()(SidebarOption);
