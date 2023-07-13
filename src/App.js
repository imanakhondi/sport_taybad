// import logo from './logo.svg';
import "./App.css";
import { Routes } from "./navigation";

function App() {
  return(
    <div className="min-h-screen bg-mainBgColor dark:bg-mainBgColorDark w-full text-primaryColor dark:text-primaryColorDark">
       <Routes />
    </div>
  );
}

export default App;
