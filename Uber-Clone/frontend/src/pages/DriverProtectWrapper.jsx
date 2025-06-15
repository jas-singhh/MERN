import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DriverProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if token is present in localStorage
    if (!token) {
      // If not, redirect to login page
      navigate("/driver/login");
    }

    // Fetch driver profile to ensure the token is valid
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/drivers/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("Driver profile fetched successfully:", response.data);

        if (response.status === 200) {
          // If the response is OK, set loading to false
          setIsLoading(false);
        }

        // If the response is not OK, redirect to login page
        else {
          localStorage.removeItem("token"); // Clear token if profile fetch fails
          navigate("/driver/login");
        }
      })
      .catch((error) => {
        console.error("Error fetching driver profile:", error);
        localStorage.removeItem("token"); // Clear token if there's an error
        setIsLoading(false); // Set loading to false even if there's an error
        // If there's an error, redirect to login page
        navigate("/driver/login");
      });
  }, [navigate, token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default DriverProtectWrapper;
