import React, { useContext, useEffect } from "react";
import { FormContext } from "../../../pages/Student/AddStudents";
import { useSelector } from "react-redux";

function Stepper({activeStepIndex}) {
  // const activeStepIndex = useSelector(
  //   (state) => state.formReducer.activeStepIndex
  // );
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-secondaryColor", "text-white");
      } else {
        step.classList.remove("bg-secondaryColor", "text-white");
      }
    });
  }, [activeStepIndex]);

  return (
    <div className="w-full flex flex-row items-center justify-center py-8 mx-auto">
      <div className="stepper-item w-8 h-8 flex items-center justify-center font-medium border-2 rounded-full">
        1
      </div>
      <div className="flex-auto border-t-2 stepper-line"></div>
      <div className="stepper-item w-8 h-8 flex items-center justify-center font-medium border-2 rounded-full">
        2
      </div>
      <div className="flex-auto border-t-2 stepper-line"></div>
      <div className="stepper-item w-8 h-8 flex items-center justify-center font-medium border-2 rounded-full">
        3
      </div>
    </div>
  );
}

export default Stepper;
