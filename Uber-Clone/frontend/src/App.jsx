import { Route, Routes } from "react-router-dom";
import SplashPage from "./pages/Splash";
import UserLoginPage from "./pages/UserLogin";
import UserSignupPage from "./pages/UserSignup";
import DriverLoginPage from "./pages/DriverLogin";
import DriverSignupPage from "./pages/DriverSignup";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/signup" element={<UserSignupPage />} />

        {/* Driver routes */}
        <Route path="/driver/login" element={<DriverLoginPage />} />
        <Route path="/driver/signup" element={<DriverSignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
