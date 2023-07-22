import { useEffect, useState } from "react";
import Search from "../../common/Input/Search";
import profile from "../../images/profile.jpeg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { header } from "../../constants/strings/fa";
import Modal from "../../common/Modal";

const Header = () => {
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(false);
  const userState = useSelector((state) => state.userReducer);
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );
  useEffect(() => {
    const html = document.documentElement;
    const sysTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark || (!dark && sysTheme)) {
      html.classList.add("dark");
      localStorage.setItem("theme", JSON.stringify(dark));
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", JSON.stringify(dark));
    }
  }, [dark]);

  const logOutHandler = () => {
    if (userState) {
      console.log(userState);
      //logout
    }
  };

  return (
    <div className="container h-[72px] bg-navBgColor border border-borderColor dark:bg-navBgColorDark dark:border-borderColorDark flex justify-between items-center">
      <div className="flex-[2]">
        <Search value={value} setValue={setValue} />
      </div>
      <div className="flex items-center gap-x-2">
        <button onClick={() => setDark(!dark)}>
          {dark ? (
            <i className="icon-sun-14 text-xl ml-3 text-warningColor"></i>
          ) : (
            <i className="icon-sun-1 text-xl ml-3 text-warningColorDark"></i>
          )}
        </button>
        <div
          className="flex flex-1 justify-center items-center cursor-pointer"
          onClick={() => setModal(!modal)}
        >
          <img src={profile} alt="" className="w-8 h-8 rounded-full" />
        </div>
        {modal && (
          <Modal modal={modal} setModal={setModal}>
            <h3 className="mt-2 flex items-center">
              <i className="icon-user4 text-xl ml-3 "></i>
              iman akhondi
            </h3>
            <Link to={`/panel/edituser/`}>
              <button
                className="cursor-pointer my-3 flex items-center"
                onClick={() => setModal(!modal)}
              >
                <i className="icon-user-edit4 text-xl ml-3 "></i>
                <span>{header.editProfile}</span>
              </button>
            </Link>
            <hr />
            <div
              onClick={logOutHandler}
              className="cursor-pointer my-3 text-red-500 flex items-center"
            >
              <i className="icon-logout4 text-xl ml-3 "></i>
              <span>{header.logout}</span>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Header;
