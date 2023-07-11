import * as actions from "./fromTypes";

const initialState = {
  activeStepIndex: 0,
  formData: {},
};

const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.STEP_ZERO:
      return {
        ...state,
        activeStepIndex: state.activeStepIndex + 1,
        formData: payload,
      };
    case actions.STEP_ONE:
      return {
        ...state,
        activeStepIndex: state.activeStepIndex + 1,
        formData: payload,
      };
    case actions.STEP_TWO:
      return {
        ...state,
        activeStepIndex: state.activeStepIndex + 1,
        formData: payload,
      };

    default:
      return state;
  }
};

export default formReducer;
