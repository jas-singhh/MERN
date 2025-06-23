import React, { useState, useRef } from "react";
import { MapPin, MapPinCheck, ChevronDown, User } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import LookingForDriverPanel from "../components/LookingForDriverPanel";
import WaitingForDriver from "../components/WaitingForDriver";

const HomePage = () => {
  const [shouldShowPanel, setShouldShowPanel] = useState(false);
  const [shouldShowVehiclePanel, setShouldShowVehiclePanel] = useState(false);
  const [shouldShowConfirmRidePanel, setShouldShowConfirmRidePanel] = useState(false);
  const [shouldShowLookingForDriverPanel, setShouldShowLookingForDriverPanel] = useState(false);
  const [shouldShowWaitingForDriverPanel, setShouldShowWaitingForDriverPanel] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const lookingForDriverPanelRef = useRef(null);
  const waitingForDriverPanelRef = useRef(null);

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

  useGSAP(() => {
    if (!vehiclePanelRef.current) return;

    if (shouldShowVehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [shouldShowVehiclePanel]);

  useGSAP(() => {
    if (!confirmRidePanelRef.current) return;

    if (shouldShowConfirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [shouldShowConfirmRidePanel]);

  useGSAP(() => {
    if (!lookingForDriverPanelRef.current) return;

    if (shouldShowLookingForDriverPanel) {
      gsap.to(lookingForDriverPanelRef.current, {
        transform: "translateY(0%)",
      });

      // Hide all other panels
      setShouldShowPanel(false);
      setShouldShowVehiclePanel(false);
      setShouldShowConfirmRidePanel(false);
    } else {
      gsap.to(lookingForDriverPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [shouldShowLookingForDriverPanel]);

  useGSAP(() => {
    if (!waitingForDriverPanelRef.current) return;

    if (shouldShowWaitingForDriverPanel) {
      gsap.to(waitingForDriverPanelRef.current, {
        transform: "translateY(0%)",
      });

      // Hide all other panels
      setShouldShowPanel(false);
      setShouldShowVehiclePanel(false);
      setShouldShowConfirmRidePanel(false);
      setShouldShowLookingForDriverPanel(false);
    } else {
      gsap.to(waitingForDriverPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [shouldShowWaitingForDriverPanel]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="Uber Logo" className="w-14 absolute top-4 left-4 z-10" />

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
            <ChevronDown className="mb-4 ml-2 w-8 h-8" onClick={() => setShouldShowPanel(false)} />
          ) : (
            <h4 className="text-2xl font-semibold mb-2">Find a Ride</h4>
          )}
          <form className="relative w-full h-full" onSubmit={(e) => submitHandler(e)}>
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
          <LocationSearchPanel setShouldShowVehiclePanel={setShouldShowVehiclePanel} setShouldShowPanel={setShouldShowPanel} />
        </div>
      </div>

      <div className="w-full fixed bottom-0 z-[9999] bg-white p-6 pt-3 translate-y-full" ref={vehiclePanelRef}>
        <VehiclePanel setShouldShowVehiclePanel={setShouldShowVehiclePanel} setShouldShowConfirmRidePanel={setShouldShowConfirmRidePanel} />
      </div>

      <div className="w-full fixed bottom-0 z-[9999] bg-white p-6 pt-3 translate-y-full" ref={confirmRidePanelRef}>
        <ConfirmRidePanel
          setShouldShowConfirmRidePanel={setShouldShowConfirmRidePanel}
          setShouldShowLookingForDriverPanel={setShouldShowLookingForDriverPanel}
        />
      </div>

      <div className="w-full fixed bottom-0 z-[9999] bg-white p-6 pt-3 translate-y-full" ref={lookingForDriverPanelRef}>
        <LookingForDriverPanel
          setShouldShowLookingForDriverPanel={setShouldShowLookingForDriverPanel}
          setShouldShowWaitingForDriverPanel={setShouldShowWaitingForDriverPanel}
        />
      </div>

      <div className="w-full fixed bottom-0 z-[9999] bg-white p-6 pt-3 translate-y-full" ref={waitingForDriverPanelRef}>
        <WaitingForDriver setShouldShowWaitingForDriverPanel={setShouldShowWaitingForDriverPanel} />
      </div>
    </div>
  );
};

export default HomePage;
