import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

export default function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContianer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
          alt="slack"
        />
        <h1>Sign in to Slack</h1>
        <button onClick={signIn}>sign in with Google</button>
      </LoginInnerContianer>
    </LoginContainer>
  );
}
const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContianer = styled.div`
  background-color: white;
  padding: 50px 50px 50px 50px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;

    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 8px;
  }
`;
