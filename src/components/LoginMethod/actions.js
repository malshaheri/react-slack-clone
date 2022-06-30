import * as types from "./actionTypes";
import { auth } from "../../firebase";

//-----------------------------register------------------
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({ displayName });
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

//------------login------------------

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};


//-----------------------------Delete------------------

const deleteStart = (id) => ({
  type: types.DELETE_START,
  payload: id,
});

const deleteSuccess = (id) => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

const deleteFail = (id, error) => ({
  type: types.DELETE_FAIL,id,
  payload: error,
});



export const deleteInitiate = (id) => {
  return (dispatch) => {
    dispatch(deleteStart(id));

    auth.delete(id).then(
      (id) => dispatch(deleteSuccess(id)),
      (error) => dispatch(deleteFail(id, error.toString()))
    );
  };
};