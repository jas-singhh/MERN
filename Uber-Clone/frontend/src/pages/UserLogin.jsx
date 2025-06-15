import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // User login data
    const user = { email, password };
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/users/login`, user)
      .then((response) => {
        if (response.status == 200) {
          setUser(response.data.user);
          // Store token in localStorage
          localStorage.setItem("token", response.data.token);

          navigate("/home");
        }
      })
      .catch((error) => console.error(error));

    // Clear the input fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col w-full h-full items-center p-7 justify-between">
        <form action="" className="w-full" onSubmit={handleSubmit}>
          <img
            src="https://pngimg.com/uploads/uber/small/uber_PNG16.png"
            alt="Uber Logo"
            className="w-20 self-start"
          />
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="email" className="text-xl mb-2 font-semibold">
              What's your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-[#eeeeee] p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full mb-6">
            <label htmlFor="password" className="text-lg mb-2 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full bg-[#eeeeee] p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full justify-center items-center space-y-1">
            <button
              type="submit"
              className="bg-[#111] text-white px-4 py-2 border w-full text-md rounded"
            >
              Login
            </button>
            <p>
              Don't have an account?
              <Link to={"/signup"} className="text-blue-600 cursor-pointer">
                {" "}
                Sign up
              </Link>
            </p>
          </div>
        </form>

        <div className="flex flex-col w-full">
          <Link
            type="submit"
            className="bg-green-600 text-white mb-7 px-4 py-2  w-full text-md rounded flex justify-center"
            to={"/driver/login"}
          >
            Login as Driver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
