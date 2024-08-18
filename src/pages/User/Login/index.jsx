import { Link, useNavigate } from "react-router-dom";
import { loginUserPage } from "../../../constants/strings/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../common/Input/Input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "../../../hooks/useQuery";
import { fetchLoginAction } from "../../../state/user/userAction";
import SubmitButton from "../../../common/Input/SubmitButton";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string(),
  password: Yup.string(),
});

const Login = () => {
  const query = useQuery();
  const redirect = query.get("redirect") || "panel/dashboard";
  const navigate = useNavigate();
  const userState = useSelector((state) => state.userReducer);
  const messageState = useSelector((state) => state.messageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userState.isAuthenticated) navigate(`/${redirect}`);
  }, [redirect, userState]);

  const onSubmit = async (values) => {
    const { username, password } = values;
    dispatch(fetchLoginAction(username, password));
    if (userState.isAuthenticated) {
      navigate(`/${redirect}`);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="container overflow-hidden bg-mainBgColorDark">
      <div className="flex min-h-screen max-w-7xl mx-auto font-IRANSansWeb">
        <div className="hidden flex-[3] md:flex items-center justify-center text-white">
          <h1 className=" text-2xl font-bold border-b border-dashed pb-10 animate-rightAnimate">
            {loginUserPage.description}
          </h1>
        </div>
        <div className="flex-[2] flex flex-col p-5 relative">
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-l from-[#040F75] animate-topAnimate"></div>
          <div className="flex flex-col items-center justify-center m-10 p-10 min-h-[550px] border border-[#AFAFAF] rounded-2xl z-30 animate-leftAnimate">
            <h2 className=" mb-2 text-white">{loginUserPage._title}</h2>
            <span className="text-xs mb-5">{loginUserPage._subTitle}</span>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-y-5 w-full"
            >
              {/* {messageState && (
                <span className="text-red-500 text-xs font-semibold  ">
                  {messageState}
                </span>
              )} */}
              <Input
                name="username"
                formik={formik}
                placeholder={`${loginUserPage.usernamePlaceholder}`}
                custom="lg:w-full"
                customStyleInput="!border-[#AFAFAF] rounded-xl placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
              />
              <Input
                name="password"
                formik={formik}
                placeholder={`${loginUserPage.passwordPlaceholder}`}
                custom="lg:w-full"
                customStyleInput="!border-[#AFAFAF] rounded-xl placeholder:!text-white/20 focus:ring-primaryColorDark focus:border-primaryColorDark bg-mainBgColorDark border-borderColorDark"
                type="password"
              />

              <SubmitButton disabled="" />
              {/* disabled={!formik.isValid} */}
            </form>
            <span className="text-xs mt-5">
              {loginUserPage.forgot}
              <Link to="/forget" className="text-warningColor mr-2">
                {loginUserPage.recoverPassword}
              </Link>
            </span>
          </div>
          <div className="absolute bottom-10 left-10 w-36 h-36 rounded-full bg-gradient-to-r from-[#040F75] animate-bottomAnimate"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
