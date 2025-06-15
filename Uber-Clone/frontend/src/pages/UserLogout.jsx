import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  axios
    .get(`${import.meta.env.VITE_API_URL}/api/users/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        // Successfully logged out
        localStorage.removeItem("token");
        navigate("/login");
      }
    })
    .catch((error) => {
      console.error("Logout error", error);
    });

  return (
    <div>
      <h1>You have been logged out</h1>
    </div>
  );
};

export default UserLogout;
