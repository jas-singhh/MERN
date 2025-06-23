import { ChevronDown, User } from "lucide-react";

const VehiclePanel = ({ setShouldShowVehiclePanel, setShouldShowConfirmRidePanel }) => {
  return (
    <div>
      <h5 className="w-full text-gray-200" onClick={() => setShouldShowVehiclePanel(false)}>
        <ChevronDown className="w-full " />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Select a Ride</h3>
      {/* Extra small ride */}
      <div
        className="flex justify-between items-center w-full rounded border-[1px] border-gray-300 px-2 py-4 mb-2"
        onClick={() => {
          setShouldShowConfirmRidePanel(true);
        }}
      >
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
      <div
        className="flex justify-between items-center w-full rounded border-[1px] border-gray-300 px-2 py-4 mb-2"
        onClick={() => setShouldShowConfirmRidePanel(true)}
      >
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
      <div
        className="flex justify-between items-center w-full rounded border-[1px] border-gray-300 px-2 py-4 mb-2"
        onClick={() => setShouldShowConfirmRidePanel(true)}
      >
        <img src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="Uber Medium Car Icon" className="h-auto max-w-16" />

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
      <div className="flex justify-between items-center w-full rounded border-[1px] border-gray-300 px-2 py-4 mb-2">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
          alt="Uber Large Car Icon"
          className="h-auto max-w-16"
        />

        <div className="w-full h-full flex flex-col items-start justify-center" onClick={() => setShouldShowConfirmRidePanel(true)}>
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
  );
};

export default VehiclePanel;
