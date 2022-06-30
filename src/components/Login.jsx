import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { loginInitiate } from "./LoginMethod/actions";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const { currentUser } = useSelector((state) => state.app);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password ) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };

  const signInGoogle = (e) => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <LoginContainer>
        <LoginInnerContianer>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
            alt="slack"
          />
          <form onSubmit={handleSubmit}>
            <h1>Sign in to Slack</h1>
            <button type="button" onClick={signInGoogle} id="signGoogle">
              with Google
            </button>
            <h1>OR</h1>
            <hr />
            <InputContainer>
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
                id="Password"
                placeholder=" password"
                value={password}
                required
                onChange={handleChange}
              />
              <button type="submit">with Email</button>
            </InputContainer>
            <h1>OR</h1>
            <hr />

            <div>
              <Link
                to="/register"
                style={{
                  backgroundColor: "#0a8d48",
                  padding: " 5px",
                  borderRadius: "8px",
                }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    marginTop: "15px",
                    border: "none",
                  }}
                >
                  Register
                </button>
              </Link>
            </div>
          </form>
        </LoginInnerContianer>
      </LoginContainer>
    </>
  );
}

//------------------------------------------------------------------------------

const LoginContainer = styled.div`
overflow: scroll;
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
  > form > button {
    margin-top: 50px;
    margin: 5px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
    padding: 5px;
    border: none;
    border-radius: 8px;
    width: 100px;
  }

  > form > input {
    margin-top: 50px;
    margin: 5px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
    padding: 5px;
    border: none;
    border-radius: 8px;
  }
  > div {
    margin-top: 10px;
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
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
    padding: 5px;
    border: none;
    border-radius: 8px;
    width: 100px;
  }

  > input {
    margin: 5px;
    color: green;
    padding: 5px;
    border: 1px solid green;
    border-radius: 8px;
  }
`;
