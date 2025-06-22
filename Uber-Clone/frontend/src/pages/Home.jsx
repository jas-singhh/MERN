import React, { useState, useRef } from "react";
import { MapPin, MapPinCheck, ChevronDown, User } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LocationSearchPanel from "../components/LocationSearchPanel";

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
    <div className="h-screen relative overflow-hidden">
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

        <div className={`w-full h-0 bg-white px-7 `} ref={panelRef}>
          <LocationSearchPanel />
        </div>
      </div>

      <div className="w-full fixed bottom-0 z-[9999] bg-white px-3 py-6 translate-y-full">
        <h3 className="text-2xl font-semibold mb-5">Select a Ride</h3>

        {/* Extra small ride */}
        <div className="flex justify-between items-center w-full rounded bg-gray-100 px-2 py-4 mb-2">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_311,w_552/v1630694937/assets/43/a4d033-3346-4b1a-a42d-af4fbe2e935e/original/uber-bike.png"
            alt="Uber Bicycle Icon"
            className="h-auto max-w-16"
          />

          <div className="w-full h-full flex flex-col items-start justify-center">
            <h4 className="font-medium text-sm flex gap-2">
              UberECO
              <span className="flex items-center text-sm font-base">
                <User className="w-4 h-4" /> 1
              </span>
            </h4>
            <h5 className="font-light text-xs">25mins away</h5>
          </div>

          <h2 className="text-lg font-semibold">£1.20</h2>
        </div>

        {/* Small ride */}
        <div className="flex justify-between items-center w-full rounded bg-gray-100 px-2 py-4 mb-2">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png"
            alt="Uber Small Car Icon"
            className="h-auto max-w-16"
          />

          <div className="w-full h-full flex flex-col items-start justify-center">
            <h4 className="font-medium text-sm flex gap-2">
              Comfort
              <span className="flex items-center text-sm font-base">
                <User className="w-4 h-4" /> 2
              </span>
            </h4>
            <h5 className="font-light text-xs">10mins away</h5>
          </div>

          <h2 className="text-lg font-semibold">£4.42</h2>
        </div>

        {/* Medium ride */}
        <div className="flex justify-between items-center w-full rounded bg-gray-100 px-2 py-4 mb-2">
          <img
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt="Uber Medium Car Icon"
            className="h-auto max-w-16"
          />

          <div className="w-full h-full flex flex-col items-start justify-center">
            <h4 className="font-medium text-sm flex gap-2">
              UberX
              <span className="flex items-center text-sm font-base">
                <User className="w-4 h-4" /> 4
              </span>
            </h4>
            <h5 className="font-light text-xs">2mins away</h5>
          </div>

          <h2 className="text-lg font-semibold">£7.12</h2>
        </div>

        {/* Large ride */}
        <div className="flex justify-between items-center w-full rounded bg-gray-100 px-2 py-4 mb-2">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
            alt="Uber Large Car Icon"
            className="h-auto max-w-16"
          />

          <div className="w-full h-full flex flex-col items-start justify-center">
            <h4 className="font-medium text-sm flex gap-2">
              UberXL
              <span className="flex items-center text-sm font-base">
                <User className="w-4 h-4" /> 6
              </span>
            </h4>
            <h5 className="font-light text-xs">18mins away</h5>
          </div>

          <h2 className="text-lg font-semibold">£10.22</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
