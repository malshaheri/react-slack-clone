import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { registerInitiate } from "./LoginMethod/actions";

export default function Register() {
  const [state, setState] = useState({
    email: "",
    displayName: "",
    password: "",
    passwordConfirm: "",
  });
  console.log({ ...state });
  const { currentUser } = useSelector((state) => state.app);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate(`/`);
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const { email, displayName, password, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
    window.location.replace("/");
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
  };

  return (
    <LoginContainer>
      <LoginInnerContianer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
          alt="slack"
        />
        <form onSubmit={handleSubmit}>
          <h1>Register to Slack</h1>

          <InputContainer>
            <input
              autoComplete="username"
              name="displayName"
              type="text"
              id="displayName"
              placeholder=" Full Name"
              value={displayName}
              required
              onChange={handleChange}
            />
            <input
              autoComplete="email"
              name="email"
              type="email"
              id="inputEmail"
              placeholder=" with Email"
              value={email}
              required
              onChange={handleChange}
            />
            <input
              autoComplete="password"
              name="password"
              type="password"
              id="inputPassword"
              placeholder=" password"
              value={password}
              required
              onChange={handleChange}
            />
            <input
              autoComplete="new-password"
              name="passwordConfirm"
              type="passwordConfirm"
              id="newinputPassword"
              value={passwordConfirm}
              required
              onChange={handleChange}
            />
            <button type="submit">Register</button>
            <Link
              to="/"
              style={{
                backgroundColor: "#ca9115",
                padding: " 5px",
                borderRadius: "8px",
              }}
            >
              <button
                type="button"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                }}
              >
                go to Login
              </button>
            </Link>
          </InputContainer>
        </form>
      </LoginInnerContianer>
    </LoginContainer>
  );
}

//------------------------------------------------------------------------------

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
  > h1 {
    margin-bottom: 50px;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    margin-top: 50px;
    margin: 5px;
    background-color: #0a8d48 !important;
    color: white;
    padding: 5px;
    border: none;
    border-radius: 8px;
    width: 100px;
  }

  > input {
    margin: 5px;
    color: #921818;
    padding: 5px;
    border: 1px solid green;
    border-radius: 8px;
  }
`;
