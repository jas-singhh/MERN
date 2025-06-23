import { MapPin } from "lucide-react";

const LocationSearchPanel = ({ setShouldShowPanel, setShouldShowVehiclePanel }) => {
  const sampleLocations = ["7 Fowler Street, Wolverhampton", "5 Fowler Street, Wolverhampton", "3 Fowler Street, Wolverhampton"];

  return (
    <>
      {sampleLocations.map(function (loc, id) {
        return (
          <div
            className="flex justify-start items-center space-x-2 mb-4 border-2 active:border-black border-gray-100 rounded-lg p-1"
            onClick={() => {
              setShouldShowVehiclePanel(true);
              setShouldShowPanel(false);
            }}
            key={id}
          >
            <div className="p-2 bg-[#eeeeee] rounded-full">
              <MapPin className="w-5 h-5" />
            </div>

            <div className="">
              <h4 className="text-base font-semibold">{loc.split(",")[0]}</h4>
              <p className="text-sm font-light">{loc.split(",")[1]}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LocationSearchPanel;
