import React, { useState, useRef } from "react";
import { MapPin, MapPinCheck, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomePage = () => {
  const [shouldShowPanel, setShouldShowPanel] = useState(false);
  const panelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // Animation for the panel
  useGSAP(() => {
    if (!panelRef.current) return;

    if (shouldShowPanel) {
      gsap.to(panelRef.current, {
        height: "70%",
      });
    } else {
      gsap.to(panelRef.current, {
        height: 0,
      });
    }
  }, [shouldShowPanel]);

  return (
    <div className="h-screen relative">
      <img
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="Uber Logo"
        className="w-14 absolute top-4 left-4 z-10"
      />

      <div className="w-screen h-screen">
        {/* Temporary image */}
        <img
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt="Map Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 w-full z-100 shadow-lg h-screen flex flex-col justify-end">
        <div className="flex flex-col w-full h-[30%] bg-white p-6">
          {shouldShowPanel ? (
            <ChevronDown
              className="mb-4 ml-2 w-8 h-8"
              onClick={() => setShouldShowPanel(false)}
            />
          ) : (
            <h4 className="text-2xl font-semibold mb-2">Find a Ride</h4>
          )}
          <form
            className="relative w-full h-full"
            onSubmit={(e) => submitHandler(e)}
          >
            {/* Line from the pick up input to the destination input for styling */}
            <div className="w-[2px] h-10 top-1/2 translate-y-[-55%] absolute bg-black left-[8.4%] rounded-full z-[999]"></div>

            {/* Pickup */}
            <div className="relative w-full flex items-center">
              <div className="absolute left-4 top-3">
                <MapPin className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Enter pickup location"
                className="px-12 py-3 rounded-lg w-full bg-[#eeeeee] mb-3"
                onFocus={() => setShouldShowPanel(true)}
              />
            </div>

            <div className="relative w-full flex items-center">
              <div className="absolute left-4 top-3">
                <MapPinCheck className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Enter drop-off location"
                className="px-12 py-3 rounded-lg w-full bg-[#eeeeee]"
                onFocus={() => setShouldShowPanel(true)}
              />
            </div>
          </form>
        </div>

        <div className={`w-full h-0 bg-red-400 `} ref={panelRef}></div>
      </div>
    </div>
  );
};

export default HomePage;
