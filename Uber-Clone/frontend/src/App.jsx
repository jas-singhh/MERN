import { Route, Routes } from "react-router-dom";
import SplashPage from "./pages/Splash";
import HomePage from "./pages/Home";
import UserLoginPage from "./pages/UserLogin";
import UserSignupPage from "./pages/UserSignup";
import DriverHome from "./pages/DriverHome";
import DriverLoginPage from "./pages/DriverLogin";
import DriverSignupPage from "./pages/DriverSignup";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import DriverProtectWrapper from "./pages/DriverProtectWrapper";
import Riding from "./pages/Riding";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashPage />} />

        {/* User routes */}
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <HomePage />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/riding"
          element={
            <UserProtectWrapper>
              <Riding />
            </UserProtectWrapper>
          }
        />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/signup" element={<UserSignupPage />} />
        <Route path="/logout" element={<UserLogout />} />

        {/* Driver routes */}
        <Route
          path="/driver/home"
          element={
            <DriverProtectWrapper>
              <DriverHome />
            </DriverProtectWrapper>
          }
        />
        <Route path="/driver/login" element={<DriverLoginPage />} />
        <Route path="/driver/signup" element={<DriverSignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
