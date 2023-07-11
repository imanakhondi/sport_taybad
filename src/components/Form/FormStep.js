import Stepper from "./FormStep/Stepper";

const FormStep = ({ children, activeStepIndex,title }) => {
  return (
    <div className="container xl:max-w-2xl mx-auto py-10 font-IRANSansWeb">
      <div className="flex items-center justify-center h-20 rounded-2xl bg-navBgColor text-white">
        <h2>{title}</h2>
      </div>
      <Stepper activeStepIndex={activeStepIndex} />
      {children}
    </div>
  );
};

export default FormStep;
