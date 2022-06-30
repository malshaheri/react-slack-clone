import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Spinner from "react-spinkit";
import Register from "./components/Register";
import Applications from "./components/apps/Applications";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
            alt="slack"
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      {!user ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" exact element={<Chat />} />
              <Route path="/applications" element={<Applications />} />
            </Routes>
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > img {
    height: 100px;
    margin: 20px;
    margin-bottom: 40px;
  }
`;
