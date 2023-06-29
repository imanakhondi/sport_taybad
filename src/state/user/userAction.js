import axios from "axios";
import * as userType from "./usertypes";

function fetchUserRequest() {
  return {
    type: userType.FETCH_LOGIN_USER_REQUEST,
  };
}
function fetchUserSuccess(user) {
  return {
    type: userType.FETCH_LOGIN_USER_SUCCESS,
    payload: user,
  };
}
function fetchUserFailure(error) {
  return {
    type: userType.FETCH_LOGIN_USER_FAILURE,
    payload: error,
  };
  function fetchLogoutUser(){
    return {
        type:userType.FETCH_LOGOUT_USER_REQUEST,
    }
  }
}

export const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("/api/users")
      .then((res) => {
        const user = res.data;
        dispatch(fetchUserSuccess(user));
      })
      .catch((err) => {
        dispatch(fetchUserFailure(err.message));
      });
  };
};
