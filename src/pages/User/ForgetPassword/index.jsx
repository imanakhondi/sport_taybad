import { Link } from "react-router-dom";
import { forgotPasswordPage, general } from "../../../constants/strings/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../common/Input/Input";
import { useNavigate } from "react-router-dom";
import { User } from "../../../http/entities";

const initialValues = {
  email: "",
};
const validationSchema = Yup.object({
  email: Yup.string(),
});

const ForgetPassword = () => {
  const navigate = useNavigate();
  const user = new User();

  const onSubmit = (values) => {
    const { email } = values;
    const result = user.forgotPassword(email);
    if (result === null) {
      //show message failure
      return;
    }
    //show message success
    // navigate(`/login`);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="container overflow-hidden">
      <div className="flex min-h-screen max-w-7xl mx-auto font-IRANSansWeb">
        <div className="flex-[3] hidden md:flex items-center justify-center text-white">
          <h1 className=" text-2xl font-bold border-b border-dashed pb-10 animate-rightAnimate">
            {forgotPasswordPage.description}
          </h1>
        </div>
        <div className="flex-[2] flex flex-col p-5 relative">
          <div className="absolute  w-40 h-40 rounded-full bg-gradient-to-l from-[#040F75] animate-topAnimate"></div>
          <div className="flex flex-col items-center justify-center m-10 p-10 min-h-[550px] border border-[#AFAFAF] rounded-2xl z-30  animate-leftAnimate">
            <h2 className="mb-2 text-white">{forgotPasswordPage._title}</h2>
            <span className="text-xs mb-5">{forgotPasswordPage._subTitle}</span>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-y-5 w-full"
            >
              <Input
                name="email"
                formik={formik}
                placeholder={`${forgotPasswordPage.email}`}
                custom="lg:w-full"
                customStyleInput="!border-[#AFAFAF] rounded-xl"
              />
              <button className=" bg-gradient-to-r from-secondaryColor to-[#040F75] rounded-xl p-3 mt-3">
                {forgotPasswordPage.submit}
              </button>
            </form>
            <span className="text-xs mt-5">
              {forgotPasswordPage.forgot}
              <Link to="/login" className="text-warningColor mr-2">
                {general.fallbackReturnHome}
              </Link>
            </span>
          </div>
          <div className="absolute bottom-10 left-10 w-36 h-36 rounded-full bg-gradient-to-r from-[#040F75] animate-bottomAnimate"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
