import { useState } from "react";
import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import FormStep from "../../../components/Form/FormStep";
import { AddStudentsPage } from "../../../constants/strings/fa";

const AddStudents = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  return (
    // <div className="container xl:max-w-2xl mx-auto py-10 font-IRANSansWeb">
    //   <div className="flex items-center justify-center h-20 rounded-2xl bg-navBgColor text-white">
    //     <h2>فرم ثبت اطلاعات دانشجویان</h2>
    //   </div>
    //   <Stepper />
    //   <div className=" xl:max-w-2xl mx-auto bg-navBgColor rounded-2xl p-5 mt-10">
    //     <Step
    //       stepOne={<StepOne />}
    //       stepTow={<StepTwo />}
    //       stepThree={<StepThree />}
    //     />
    //   </div>
    // </div>
    <FormStep activeStepIndex={activeStepIndex} title={AddStudentsPage._title}>
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

export default AddStudents;
