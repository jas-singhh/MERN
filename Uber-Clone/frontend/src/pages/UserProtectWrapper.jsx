import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token is present in localStorage
    if (!token) {
      // If not, redirect to login page
      navigate("/login");
    }

    // Fetch user profile to ensure the token is valid
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status !== 200) {
          // If the response is not OK, redirect to login page
          localStorage.removeItem("token"); // Clear token if profile fetch fails
          navigate("/login");
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        localStorage.removeItem("token"); // Clear token if there's an error
        // If there's an error, redirect to login page
        navigate("/login");
      });
  }, [navigate, token]);

  isLoading && (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl">Loading...</div>
    </div>
  );

  return <>{children}</>;
};

export default UserProtectWrapper;
