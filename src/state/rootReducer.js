import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
  userReducer,
  // formReducer,
});

export default rootReducer;
