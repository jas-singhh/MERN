import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserSignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      fullname: { firstname: firstName, lastname: lastName },
      email,
      password,
    };

    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/users/register`, userData)
      .then((response) => {
        if (response.status === 201) {
          setUser({
            fullname: {
              firstname: response.data.user.fullname.firstname,
              lastname: response.data.user.fullname.lastname,
            },
            email: response.data.user.email,
            password: response.data.user.password,
          });

          navigate("/home");
        }
      })
      .catch((error) => console.error(error));

    // Clear the input fields
    setFirstName("");
    setLastName("");
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
          <div className="flex space-x-2 mb-3">
            <div className="flex flex-1 flex-col">
              <h3 className="font-semibold">First Name</h3>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="w-full bg-[#eeeeee] p-2 rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="flex flex-col flex-1">
              <h3 className="font-semibold">Last Name</h3>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="w-full bg-[#eeeeee] p-2 rounded"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-3">
            <h3 htmlFor="email" className=" mb-2 font-semibold">
              Email
            </h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full bg-[#eeeeee] p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <h3 htmlFor="password" className=" mb-2 font-semibold">
              Password
            </h3>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full bg-[#eeeeee] p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full justify-center items-center space-y-1">
            <button
              type="submit"
              className={`bg-[#111] text-white px-4 py-2 border w-full text-md rounded `}
              disabled={!firstName || !lastName || !email || !password}
            >
              Sign Up
            </button>
            <p>
              Already have an account?
              <Link to={"/login"} className="text-blue-600 cursor-pointer">
                {" "}
                Sign In
              </Link>
            </p>
          </div>
        </form>

        <div className="flex flex-col w-full">
          <Link
            type="submit"
            className="bg-green-600 text-white mb-2 px-4 py-2 w-full text-md rounded flex justify-center"
            to={"/driver/signup"}
          >
            Sign Up as Driver
          </Link>

          <p className="text-[7px]">
            By signing up, you confirm that you are at least 18 years old and
            agree to our Terms & Conditions and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignupPage;
