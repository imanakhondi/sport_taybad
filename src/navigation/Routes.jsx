import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Pages from "../pages";
import { useSelector } from "react-redux";

export default function AuthRoute() {
  const userState = useSelector((state) => state.userReducer);
  return (
    <BrowserRouter>
      {userState.isAuthenticated && (
        <Routes>
          <Route path="/" element={<Pages.Dashboard />} />
        </Routes>
      )}
      {!userState.isAuthenticated && (
        <Routes>
          <Route path="/login" element={<Pages.Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
