import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "react-thunk";
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
