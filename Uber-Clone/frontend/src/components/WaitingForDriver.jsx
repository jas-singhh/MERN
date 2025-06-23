import React from "react";
import { ChevronDown, Star, LocateFixed, MapPin, CreditCard } from "lucide-react";

const WaitingForDriver = ({ setShouldShowWaitingForDriverPanel }) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h5 className="w-full text-gray-200" onClick={() => setShouldShowWaitingForDriverPanel(false)}>
        <ChevronDown className="w-full" />
      </h5>
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">Meet at the pickup point</h4>

        <div className="flex flex-col items-center bg-black text-white px-4 py-2 text-sm">
          <span>2</span>
          <span>min</span>
        </div>
      </div>
      {/* Separator */}
      <span className="w-full h-[1px] bg-gray-400"></span>
      <div className="flex items-center w-full justify-between">
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
