import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token is present in localStorage
    if (!token) {
      // If not, redirect to login page
      navigate("/login");
    }
  }, [navigate, token]);

  return <>{children}</>;
};

export default UserProtectWrapper;
