import { useState } from "react";
import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import FormStep from "../../../components/Form/FormStep";
import { AddManagersPage } from "../../../constants/strings/fa";

const AddManagers = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  return (
    <FormStep activeStepIndex={activeStepIndex} title={AddManagersPage._title}>
      <div className=" xl:max-w-2xl mx-auto bg-navBgColorDark rounded-2xl p-5 mt-10">
        {activeStepIndex === 0 && (
          <StepOne
            formData={formData}
            activeStepIndex={activeStepIndex}
            setActiveStepIndex={setActiveStepIndex}
            setFormData={setFormData}
          />
        )}
        {activeStepIndex === 1 && (
          <StepTwo
            formData={formData}
            activeStepIndex={activeStepIndex}
            setActiveStepIndex={setActiveStepIndex}
            setFormData={setFormData}
          />
        )}
        {activeStepIndex === 2 && (
          <StepThree
            formData={formData}
            activeStepIndex={activeStepIndex}
            setActiveStepIndex={setActiveStepIndex}
            setFormData={setFormData}
          />
        )}
      </div>
    </FormStep>
  );
};

export default AddManagers;
