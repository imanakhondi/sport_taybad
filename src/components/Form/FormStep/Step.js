import { useSelector } from "react-redux";
import StepOne from "../../../pages/Student/AddStudents/Step1";
import StepTwo from "../../../pages/Student/AddStudents/Step2";
import StepThree from "../../../pages/Student/AddStudents/Step3";

function Step() {
  const activeStepIndex = useSelector(
    (state) => state.formReducer.activeStepIndex
  );
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <StepOne />;
      break;
    case 1:
      stepContent = <StepTwo />;
      break;
    case 2:
      stepContent = <StepThree />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
