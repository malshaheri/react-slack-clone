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
import Threads from "./components/threads/Threads";
import Browser from "./components/Browser/Browser";
import Reactions from "./components/Reactions";
import Saved from "./components/Saved";
import People from "./components/People";
import FileBrowser from "./components/FileBrowser";

;

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
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" exact element={<Chat />} />
              <Route path="/threads" element={<Threads />} />
              <Route path="/reactions" element={<Reactions />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/browser" element={<Browser />} />
              <Route path="/people" element={<People />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/filebrowser" element={<FileBrowser />} />

              <Route path="*" element="/error/404" />
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
