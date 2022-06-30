import * as types from "../components/LoginMethod/actionTypes";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
  id:null,
};
const useReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.DELETE_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default useReducer;
