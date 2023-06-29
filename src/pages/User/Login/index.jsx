import { Link } from "react-router-dom";
import { loginUserPage } from "../../../constants/strings/fa";

const Login = () => {
  return (
    <div className="container overflow-hidden">
      <div className="flex min-h-screen max-w-7xl mx-auto font-IRANSansWeb">
        <div className="hidden flex-[3] md:flex items-center justify-center text-white">
          <h1 className=" text-2xl font-bold border-b border-dashed pb-10 animate-rightAnimate">
            {loginUserPage.description}
          </h1>
        </div>
        <div className="flex-[2] flex flex-col p-5 relative">
          <div className="absolute  w-40 h-40 rounded-full bg-gradient-to-l from-[#040F75] animate-topAnimate"></div>
          <div className="flex flex-col items-center justify-center m-10 p-10 min-h-[550px] border border-[#AFAFAF] rounded-2xl z-30  animate-leftAnimate">
          <h2 className=" mb-2 text-white">
              {loginUserPage._title}
            </h2>
            <span className="text-xs mb-5">{loginUserPage._subTitle}</span>
            <form action="" className="flex flex-col gap-y-5 w-full">
              <input
                type="text"
                placeholder={loginUserPage.username}
                className="bg-transparent border border-[#AFAFAF] rounded-xl p-3 text-xs "
              />
              <input
                type="text"
                placeholder={loginUserPage.password}
                className="bg-transparent border border-[#AFAFAF] rounded-xl p-3 text-xs "
              />
              <button className=" bg-gradient-to-r from-secondaryColor to-[#040F75] rounded-xl py-2 px-3 mt-3">
                {loginUserPage.submit}
              </button>
            </form>
            <span className="text-xs mt-5">
             {loginUserPage.forgot}
              <Link to="/forget" className="text-warningColor mr-2">{loginUserPage.recoverPassword}</Link>
            </span>
          </div>
          <div className="absolute bottom-10 left-10 w-36 h-36 rounded-full bg-gradient-to-r from-[#040F75] animate-bottomAnimate"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
