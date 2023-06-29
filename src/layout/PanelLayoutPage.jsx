import { Outlet } from "react-router-dom";
import Footer from "../components/Section/Footer";
import Header from "../components/Section/Header";
import SideBar from "../components/Section/SideBar";

const PanelLayoutPage = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex flex-col min-h-screen rounded-3xl">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default PanelLayoutPage;
