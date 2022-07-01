import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { enterRoom } from "../features/apprSlice";
import { MdOutlineDelete } from "react-icons/md";
//..............................
import {
  deleteDoc,
  doc,
} from "firebase/firestore"; /*"firebase/compat/firestore" */

export default function SidebarOption({ Icon, title, addChannelOption, id }) {
  //   console.log("channels", channels && channels.docs);
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Add Channel");
    if (channelName) {
      db.collection("rooms").add({ name: channelName });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };
  //----------------------------------------------------------------

    const deleteChannel = async () => {
       const ref = await db.collection("rooms").doc(id).deleteDoc(doc);
       window.location.reload();
      
  return ref
    };


  return (
    <div>
      <SidebarOptionContianer
        key={id}
        onClick={addChannelOption ? addChannel : selectChannel}
      >
        {Icon && <Icon style={{ padding: "8px" }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel>
            <h3>
              <span># {title}</span>
              <LineDelete>
                <MdOutlineDelete onClick={deleteChannel} />
              </LineDelete>
            </h3>
          </SidebarOptionChannel>
        )}
      </SidebarOptionContianer>
    </div>
  );
}

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
