import { Link } from "react-router-dom";
import { forgotPasswordPage } from "../../../constants/strings/fa";

const ForgetPassword = () => {
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
            <h2 className="mb-2 text-white">
              {forgotPasswordPage._title}
            </h2>
            <span className="text-xs mb-5">{forgotPasswordPage._subTitle}</span>
            <form action="" className="flex flex-col gap-y-5 w-full">
              <input
                type="text"
                placeholder={forgotPasswordPage.email}
                className="bg-transparent border border-[#AFAFAF] rounded-xl p-3 text-xs "
              />
              <button className=" bg-gradient-to-r from-secondaryColor to-[#040F75] rounded-xl p-3 mt-3">
                {forgotPasswordPage.submit}
              </button>
            </form>
            {/* <span className="text-xs mt-5">
             {forgotPasswordPage.forgot}
              <Link to="/" className="text-warningColor mr-2">{forgotPasswordPage.recoverPassword}</Link>
            </span> */}
          </div>
          <div className="absolute bottom-10 left-10 w-36 h-36 rounded-full bg-gradient-to-r from-[#040F75] animate-bottomAnimate"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
