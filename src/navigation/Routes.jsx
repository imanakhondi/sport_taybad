import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Pages from "../pages";
import { useSelector } from "react-redux";
import PanelLayoutPage from "../layout/PanelLayoutPage";

export default function AuthRoute() {
  const userState = useSelector((state) => state.userReducer);
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Pages.Dashboard />} />
      </Routes> */}
      {userState.isAuthenticated && (
        <Routes>
          <Route path="/" element={<Pages.Dashboard />} />
        </Routes>
      )}
      {!userState.isAuthenticated && (
        <Routes>
          <Route path="/" element={<Pages.HomePage />} />
          <Route path="login" element={<Pages.Login />} />
          <Route path="forget" element={<Pages.ForgetPassword />} />
          <Route path="referee" element={<Pages.AddReferees />} />
          <Route path="student" element={<Pages.AddStudents />} />
          <Route path="manager" element={<Pages.AddManagers />} />
          <Route path="trainer" element={<Pages.AddTrainers />} />
          <Route path="panel" element={<PanelLayoutPage />}>
            <Route path="dashboard" element={<Pages.Dashboard />} />
            <Route path="referees" element={<Pages.Referees />} />
            <Route path="students" element={<Pages.Students />} />
            <Route path="managers" element={<Pages.Managers />} />
            <Route path="trainers" element={<Pages.Trainers />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}
