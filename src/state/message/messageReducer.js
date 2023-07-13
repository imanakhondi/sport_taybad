import utils from "../../utils/Utils";
import * as actions from "./messageTypes";
import { MESSAGE_CODES } from "../../constants/messageCodes";

const initialState = {
  message: null,
  messageType: null,
  messageCode: 0,
  messageRender: false,
  messageField: null,
};

const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_MESSAGE_ACTION:
      return {
        message: utils.en2faDigits(payload.message),
        messageType: payload.messageType,
        messageCode:
          parseInt(payload.messageCode) ?? MESSAGE_CODES.CLIENT_ERROR,
        messageRender: payload.messageRender,
        messageField: payload.messageField,
      };
    case actions.SET_RENDER_MESSAGE:
      return {
        ...state,
        messageRender: true,
      };
    case actions.CLEAR_MESSAGE_ACTION:
      return {
        message: null,
        messageType: null,
        messageCode: 0,
        messageRender: false,
        messageField: null,
      };
    default:
      return state;
  }
};

export default messageReducer;
