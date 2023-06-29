import { Link } from "react-router-dom";
import { general } from "../../constants/strings/fa";

import sports from "../../images/sports.png";

const HomePage = () => {
  return (
    <div className="container overflow-hidden">
      <div className="my-10 h-full flex-col md:flex md:flex-row md:my-0">
        <div className=" flex flex-1 flex-col items-center justify-center animate-rightAnimate">
          <h1 className="text-xl md:text-3xl mb-10 font-IRANSansWeb text-white">
            {general.brand}
          </h1>
          <div className="flex flex-col gap-y-3">
            <Link to="/login">
              <button className="btn-primary w-60">
                {general.userLoginSystem}
              </button>
            </Link>
            <Link to="/trainer">
              <button className="btn-secondary w-60">
                {general.trainerInfoRegFrm}
              </button>
            </Link>
            <Link to="/manager">
              <button className="btn-secondary w-60">
                {general.ManagersInfoRegFrm}
              </button>
            </Link>
            <Link to="/referee">
              <button className="btn-secondary w-60">
                {general.RefereeInfoRegFrm}
              </button>
            </Link>
            <Link to="/student">
              <button className="btn-secondary w-60">
                {general.StudentInfoRegFrm}
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 h-screen">
          <img
            src={sports}
            alt=""
            className="w-full h-full animate-leftAnimate "
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
