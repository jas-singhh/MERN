import { Star, LocateFixed, MapPin, CreditCard, House } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Riding = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col w-full">
      {/* Home icon */}
      <div className="p-3 rounded-full fixed bg-white m-2 right-0 top-0" onClick={() => navigate("/home")}>
        <House />
      </div>

      <div className="flex-1 w-full">
        {/* Map */}
        {/* Temporary image */}
        <img
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt="Map Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center w-full justify-between flex-1 flex-col  px-6 py-2">
        {/* Driver info */}

        <div className="w-full flex justify-between">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_311,w_552/v1630694937/assets/43/a4d033-3346-4b1a-a42d-af4fbe2e935e/original/uber-bike.png"
            alt="Driver"
            className=" h-20"
          />

          <div className="flex flex-col text-right">
            <h5 className="text-md  text-gray-400 uppercase">Jas Singh</h5>
            <h3 className="text-xl font-bold">JA 55 ING</h3>
            <p className="text-sm text-gray-400">Maserati Ghibli</p>
            <h6 className="text-sm text-gray-400 flex items-center gap-1 self-end">
              <Star className="w-4 h-4" /> 4.9
            </h6>
          </div>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col space-y-3">
          <span className="w-full h-[1px] bg-gray-200"></span>

          {/* Pickup location */}
          <div className="flex items-center space-x-4 w-full">
            <LocateFixed className="w-6 h-6" />

            <div className="flex flex-col w-full">
              <h4 className="text-xl font-semibold">7 Fowler Street</h4>
              <p className="text-lg font-light">Wolverhampton</p>
            </div>
          </div>

          <span className="w-full h-[1px] bg-gray-200"></span>

          {/* Destination */}
          <div className="">
            <div className="flex items-center space-x-4 w-full">
              <MapPin className="w-6 h-6" />

              <div className="flex flex-col w-full">
                <h4 className="text-xl font-semibold">42 Belvoir Rd</h4>
                <p className="text-lg font-light">Birmingham</p>
              </div>
            </div>
          </div>

          <span className="w-full h-[1px] bg-gray-200"></span>

          {/* Amount */}
          <div className="">
            <div className="flex items-center space-x-4 w-full">
              <CreditCard className="w-6 h-6" />

              <div className="flex flex-col w-full">
                <h4 className="text-xl font-semibold">£4.70</h4>
                <p className="text-lg font-light">Cash</p>
              </div>
            </div>
          </div>
          {/* Button */}
          <button className="w-full bg-green-700 rounded-lg text-white py-3" onClick={() => {}}>
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
