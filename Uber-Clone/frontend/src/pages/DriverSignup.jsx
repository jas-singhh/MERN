import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { DriverDataContext } from "../contexts/DriverContext";
import axios from "axios";

const DriverSignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleReg, setVehicleReg] = useState("");
  const [vehicleColour, setVehicleColour] = useState("");
  const [vehicleSize, setVehicleSize] = useState("small"); // Default to small
  const [vehicleCapacity, setVehicleCapacity] = useState(0);

  const { setDriverData } = useContext(DriverDataContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("vehicle size", vehicleSize);

    const driver = {
      fullname: { firstname: firstName, lastname: lastName },
      email,
      password,
      vehicle: {
        plate: vehicleReg,
        colour: vehicleColour,
        size: vehicleSize,
        capacity: vehicleCapacity,
      },
    };

    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/drivers/register`, driver)
      .then((response) => {
        if (response.status === 201) {
          setDriverData(driver);
          // Store token in localStorage
          localStorage.setItem("token", response.data.token);
          navigate("/driver/home");
        }
      })
      .catch((error) => {
        // Handle registration error
        console.error("Error registering driver:", error);
      });

    // Clear the input fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleReg("");
    setVehicleColour("");
    setVehicleSize("");
    setVehicleCapacity(0);
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

          <div className="flex space-x-2 mb-3">
            <div className="flex flex-1 flex-col">
              <h3 className="font-semibold">Vehicle Reg</h3>
              <input
                type="text"
                name="vehicleReg"
                id="vehicleReg"
                placeholder="AA00AAA"
                className="w-full bg-[#eeeeee] p-2 rounded"
                value={vehicleReg}
                onChange={(e) => setVehicleReg(e.target.value)}
              />
            </div>

            <div className="flex flex-col flex-1">
              <h3 className="font-semibold">Vehicle Colour</h3>
              <input
                type="text"
                name="vehicleColour"
                id="vehicleColour"
                placeholder="Vehicle Colour"
                className="w-full bg-[#eeeeee] p-2 rounded"
                value={vehicleColour}
                onChange={(e) => setVehicleColour(e.target.value)}
              />
            </div>
          </div>

          <div className="flex space-x-2 mb-3">
            <div className="flex flex-1 flex-col">
              <h3 className="font-semibold">Vehicle Size</h3>
              <select
                name="vehicleSize"
                id="vehicleSize"
                className="w-full bg-[#eeeeee] p-2 rounded"
                value={vehicleSize}
                onChange={(e) => {
                  setVehicleSize(e.target.value);
                }}
              >
                <option value="small" defaultValue={true}>
                  Small
                </option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <h3 className="font-semibold">Vehicle Capacity</h3>
              <input
                type="number"
                name="vehicleCapacity"
                id="vehicleCapacity"
                placeholder="Vehicle Capacity"
                className="w-full bg-[#eeeeee] p-2 rounded"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />
            </div>
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
            className="bg-[#F28600] text-white mb-2 px-4 py-2  w-full text-md rounded flex justify-center"
            to={"/login"}
          >
            Signup as User
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

export default DriverSignupPage;
