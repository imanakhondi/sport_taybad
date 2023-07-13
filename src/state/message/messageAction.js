import * as messageType from "./messageTypes";

const setMessage = (message) => {
  return {
    type: messageType.SET_MESSAGE_ACTION,
    payload: message,
  };
};

const setRenderMessage = () => {
  return {
    type: messageType.SET_RENDER_MESSAGE,
  };
};

const clearMessage = () => {
  return {
    type: messageType.CLEAR_MESSAGE_ACTION,
  };
};

export const setMessageAction = (
  message,
  messageType,
  messageCode,
  messageRender = true,
  messageField = null
) => {
  return async function (dispatch) {
    dispatch(
      setMessage({
        message,
        messageType,
        messageCode,
        messageRender,
        messageField,
      })
    );
  };
};

export const setRenderMessageAction = () => {
  return async function (dispatch) {
    dispatch(setRenderMessage());
  };
};

export const clearMessageAction = () => {
  return async function (dispatch) {
    dispatch(clearMessage());
  };
};
