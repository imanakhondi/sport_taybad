import * as userType from "./userTypes";
import { User } from "../../http/entities";
import utils from "../../utils/Utils";

const user = new User();

function fetchUserRequest() {
  return {
    type: userType.FETCH_LOGIN_USER_REQUEST,
  };
}
function fetchAuth(user) {
  return {
    type: userType.FETCH_AUTH_ACTION,
    payload: user,
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
  function fetchLogoutUser() {
    return {
      type: userType.FETCH_LOGOUT_USER_REQUEST,
    };
  }
}

export const fetchLoginAction =(data) => {
  return async function (dispatch) {
    dispatch(fetchUserRequest());
    const response =await user.loginUser(data);
    if (response !== null) {
      dispatch(fetchUserSuccess(response));
      utils.setLSVariable("user", JSON.stringify(response.data.item));
      return;
    }
    dispatch(fetchUserFailure(response.errorMasage));
  };
};

export const fetchAuthAction = () =>(data) => {
  return async function (dispatch) {
    dispatch(fetchUserRequest());
    const response = await user.fetchUser(data);
    if (response !== null) {
      if (utils.isJsonString(response.data) && response.data._result === "1") {
        utils.setLSVariable("user", JSON.stringify(response.data.item));
        dispatch(fetchAuth(response.data.item));
      }
    }
    dispatch(fetchUserFailure(response.errorMasage));
  };
};




