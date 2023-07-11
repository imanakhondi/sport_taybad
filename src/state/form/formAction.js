
import * as formType from "./fromTypes"

export function stepZero(frmData) {
  return {
    type: formType.STEP_ZERO,
    payload: frmData,
  };
}
export function stepOne(frmData) {
  return {
    type: formType.STEP_ONE,
    payload: frmData,
  };
}
export function StepTwo(frmData) {
  return {
    type: formType.STEP_TWO,
    payload: frmData,
  };
 
}

