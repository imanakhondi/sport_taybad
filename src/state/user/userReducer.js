import * as actions from "./usertypes";
import utils from "../../utils/Utils";

const initialState = {
  isAuthenticated: !!utils.getLSUser(),
  loading: false,
  user: utils.getLSUser() ?? null,
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_LOGIN_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case actions.FETCH_LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.user,
        error: "",
      };
    case actions.FETCH_LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: payload,
      };
    case actions.FETCH_LOGOUT_USER_REQUEST:
      return {
        isAuthenticated: false,
        loading: false,
        user: null,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
