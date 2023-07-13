import { useState } from "react";
import FormStep from "../../../components/Form/FormStep";
import StepOne from "./Step1"
import StepTwo from "./Step2"
import StepThree from "./Step3"
import { AddRefereesPage } from "../../../constants/strings/fa";


const AddReferees = () => {
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [formData, setFormData] = useState({});
    return (
     
      <FormStep
      activeStepIndex={activeStepIndex}
      title={AddRefereesPage._title}
      >
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
}
 
export default AddReferees;