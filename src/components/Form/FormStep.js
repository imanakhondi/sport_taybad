import Stepper from "./FormStep/Stepper";

const FormStep = ({ children, activeStepIndex,title }) => {
  return (
    <div className="container  py-10 font-IRANSansWeb bg-mainBgColorDark">
      <div className=" xl:max-w-2xl mx-auto  ">
      <div className="flex items-center justify-center h-20 rounded-2xl text-white bg-navBgColorDark dark:text-white">
        <h2>{title}</h2>
      </div>
      <Stepper activeStepIndex={activeStepIndex} />
      {children}
    </div>
    </div>
  );
};

export default FormStep;
