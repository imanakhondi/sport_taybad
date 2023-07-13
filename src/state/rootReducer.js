import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import formReducer from "./form/formReducer";
import messageReducer from "./message/messageReducer";
const rootReducer = combineReducers({
  userReducer,
  // formReducer,
  messageReducer,
});

export default rootReducer;
