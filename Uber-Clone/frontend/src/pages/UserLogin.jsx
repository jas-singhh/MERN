import { Link } from "react-router-dom";

const UserLoginPage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full items-center p-7">
        <img
          src="https://pngimg.com/uploads/uber/small/uber_PNG16.png"
          alt="Uber Logo"
          className="w-20 self-start"
        />

        <form action="" className="w-full">
          <div className="flex flex-col w-full mb-6">
            <label htmlFor="email" className="text-xl mb-2 font-semibold">
              What's your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-[#eeeeee] p-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full mb-6">
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full bg-[#eeeeee] p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-[#111] font-semibold text-white mb-7 px-4 py-2 border w-full text-lg rounded"
          >
            Login
          </button>
        </form>

        <Link href={"/signup"}>Don't have an account? Sign up</Link>

        <button
          type="submit"
          className="bg-green-600 font-semibold text-white mb-7 px-4 py-2  w-full text-lg rounded"
        >
          Login as Driver
        </button>
      </div>
    </div>
  );
};

export default UserLoginPage;
