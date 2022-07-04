import { connect } from "react-redux";
import {
  onSnapshot,
  addDoc,
  collection,
} from "firebase/firestore";

import React, { useState, useEffect } from "react";
import { db } from "../../firebase";

import styled from "styled-components";
import { BiAddToQueue } from "react-icons/bi";
//------------------------------------------------
import { handleDelete, handleNew, handleEdit } from "./Notification";
//---------------------------------------------------------------------------------------
function Threads(props) {
  const [modalOpenState, setModalOpenState] = useState(false);
  const [addcollection, setAddcollection] = useState({});
  const [threads, setThreads] = useState([]);
  const [subMessage, setSubmessage] = useState([]);

  // const [Description, Message, Name]=threads
  // console.log(
  //   "threads",
  //   threads.map((ele) => ele.addcollection.Name)
  // );

  //....................................................

  //---------------------------

  const openModal = () => {
    setModalOpenState(true);
  };

  const closeModal = () => {
    setModalOpenState(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    channelsRef();
    addcollection({});
  };

  const handleInput = (e) => {
    let target = e.target;
    setAddcollection((currentState) => {
      let updatedState = { ...currentState };
      updatedState[target.name] = target.value;
      return updatedState;
    });
  };

  //..............addDoc.................
  const channelsRef = async () => {
    const collectionRef = collection(db, "threads");

    const payload = {
      addcollection,
    };
    const docRef = await addDoc(collectionRef, payload);
    return docRef;
  };
  //----------onSnapshot------------------

  useEffect(
    () =>
      onSnapshot(collection(db, "threads"), (snapshot) =>
        setThreads(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  useEffect(
    () =>
      onSnapshot(collection(db, "new"), (snapshot) =>
        setSubmessage(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    [subMessage]
  );

  return (
    <ThreadsContainer>
      <ThreadsHeader>
        <ThreadsInfo
          style={{
            fontSize: "10px",
            color: "#421f44",
            display: "flex",
          }}
        >
          {" "}
          {threads.length} Posts
        </ThreadsInfo>
        <ThreadsInfo>
          <span onClick={openModal}>
            Add Thread <BiAddToQueue />
          </span>
        </ThreadsInfo>
      </ThreadsHeader>
      <ThreadsModal style={{ display: modalOpenState ? "block" : "none" }}>
        <h3>Create Threads</h3>

        <ThreadsContent>
          <form onSubmit={onSubmit}>
            <>
              <input
                name="Name"
                value={addcollection.Name}
                onChange={handleInput}
                type="text"
                placeholder="Enter Thread Name"
              />
              <input
                name="Description"
                value={addcollection.Description}
                onChange={handleInput}
                type="text"
                placeholder="Enter Thread Description"
              />
            </>
            <div>
              <textarea
                name="Message"
                value={addcollection.Message}
                onChange={handleInput}
                type="textarea"
                placeholder="Enter Thread Message"
              />
            </div>
          </form>
        </ThreadsContent>

        <ThreadsActions>
          <button onClick={onSubmit}>Save</button>
          <button onClick={closeModal}>Cancel</button>
        </ThreadsActions>
      </ThreadsModal>
      <Messages>
        <div>
          <ul>
            {threads.map((ele) => (
              <>
                <li key={ele.id}>
                  <div>
                    <div>
                      <h4>
                        Title: <span>{ele.addcollection.Name}</span>
                      </h4>
                      <h4>
                        {" "}
                        Description:<span>{ele.addcollection.Description}</span>
                      </h4>
                    </div>

                    <img
                      src={`https://avatars.dicebear.com/api/croodles-neutral/:${ele.addcollection.Name}.svg`}
                      alt=""
                    />
                  </div>
                  <TextareaBox type="text">
                    {ele.addcollection.Message}
                  </TextareaBox>

                  <div style={{ backgroundColor: "#eff" }}>
                    <button
                      type="button"
                      style={{
                        backgroundColor: "#ca6262",
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                        padding: " 5px",
                        borderRadius: "3px",
                        outline: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={handleNew}
                    >
                      Leave a comment
                    </button>
                  </div>
                </li>
                <li>
                  <SubMessages>
                    <ul>
                      {subMessage.map((ele) => (
                        <li key={ele.id}>
                          <div>
                            <div>
                              <h4>
                                Title: <span>{ele.Name}</span>
                              </h4>
                              <h4>
                                {" "}
                                Description:<span>{ele.Description}</span>
                              </h4>
                            </div>

                            <img
                              style={{ width: "50px" }}
                              src={`https://avatars.dicebear.com/api/croodles-neutral/:${ele.Name}.svg`}
                              alt="##"
                            />
                          </div>
                          <TextareaBox type="text">{ele.Message}</TextareaBox>
                          <hr />

                     
                          <button
                            type="button"
                            style={{
                              backgroundColor: "#ca6262",
                              boxShadow:
                                "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                              padding: " 5px",
                              borderRadius: "3px",
                              outline: "none",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={handleNew}
                          >
                            Leave a comment
                          </button>
                          <button
                            type="button"
                            onClick={() => handleEdit(ele.id)}
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDelete(ele.id)}
                          >
                            Delete
                          </button>

                          <hr />
                        </li>
                      ))}
                    </ul>
                  </SubMessages>
                </li>
              </>
            ))}
          </ul>
          {
          }
          {
          }{" "}
        </div>
      </Messages>
    </ThreadsContainer>
  );
}

//

//..................................

const ThreadsContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow: scroll;
  margin-top: 73px;
`;

const ThreadsHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  position: fixed;
  margin-bottom: 200px;
  background-color: white;
  border-bottom: 1px solid lightgray;
  width: 100%;
`;

const ThreadsInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  opacity: 1;
  padding: 10px;
  color: gray;
  > span {
    cursor: pointer;
    :hover {
      color: var(--slack-color);
    }
  }
`;

const ThreadsModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--slack-color);
  margin: 10%;

  > h3 {
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 18px;
    font-weight: 900;
    padding: 20px;
    align-items: center;
    color: white;
  }
`;

const ThreadsContent = styled.div`
  display: flex;
  align-items: space-around;
  text-align: center;
  padding: 10px;
  color: gray;
  flex-direction: column;
  > form > input {
    background-color: #421f44;
    text-align: center;
    border: none;
    text-align: center;
    outline: none;
    color: white;
    padding: 15px;
    border: 1px solid gray;
    flex: 0.4;
    border-radius: 6px;
    border: 1px solid gray;
    margin: 1%;
    width: 50%;
  }
  > form > div > textarea {
    background-color: #421f44;
    text-align: center;
    border: none;
    text-align: center;
    outline: none;
    color: white;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 6px;
    border: 1px solid gray;
    margin: 1%;
    width: 90%;
  }
`;
const ThreadsActions = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  color: gray;
`;
const Messages = styled.div`
  background-color: #eee;
  margin-top: 50px;
  padding: 15px;
  color: var(--slack-color);
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    padding-bottom: 20px;
    list-style: none;
    padding-right: 30px;

    > button {
      background-color: lightblue;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      padding: 5px 10px;
      border-radius: 3px;
      outline: none;
      border: none;
      :hover {
        cursor: pointer;
        color: gray;
      }
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      > img {
        width: 15%;
      }
      h4 {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 15px;
        padding-bottom: 5px;
        > span {
          color: #421f44;
          font-weight: 500;
        }
      }
    }
  }
`;
const TextareaBox = styled.div`
  display: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #494848;
  font-size: 12px;
  cursor: pointer;
  :active {
    background: yellow;
  }
`;

const SubMessages = styled.div`
  justify-content: center;
  background-color: #efe;
  width: 80%;
`;

export default connect()(Threads);
