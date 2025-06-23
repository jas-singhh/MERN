import React from "react";
import { ChevronDown, LocateFixed, MapPin, CreditCard } from "lucide-react";

const LookingForDriverPanel = ({ setShouldShowLookingForDriverPanel, setShouldShowWaitingForDriverPanel }) => {
  return (
    <div>
      <h5 className="w-full text-gray-200" onClick={() => setShouldShowLookingForDriverPanel(false)}>
        <ChevronDown className="w-full" />
      </h5>

      <h3 className="text-2xl font-semibold text-center my-5">Looking for a Driver</h3>
      <div className="flex flex-col items-center w-full gap-4">
        {/* Image */}
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_311,w_552/v1630694937/assets/43/a4d033-3346-4b1a-a42d-af4fbe2e935e/original/uber-bike.png"
          alt="Uber Bicycle Icon"
          className="h-auto max-w-48"
        />

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
        </div>

        {/* Button */}
        <button className="w-full bg-green-700 rounded-lg text-white py-3" onClick={() => setShouldShowWaitingForDriverPanel(true)}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default LookingForDriverPanel;
