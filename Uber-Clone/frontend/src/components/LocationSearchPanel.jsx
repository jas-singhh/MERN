import { MapPin } from "lucide-react";

const LocationSearchPanel = () => {
  return (
    <>
      <div className="flex justify-start items-center space-x-2 mb-4 border-2 active:border-black border-gray-100">
        <div className="p-2 bg-[#eeeeee] rounded-full">
          <MapPin className="w-5 h-5" />
        </div>

        <div className="">
          <h4 className="text-base font-semibold">Torishima Building</h4>
          <p className="text-sm font-light">Brook Lane, Westbury</p>
        </div>
      </div>

      <div className="flex justify-start items-center space-x-2 mb-4 border-2 border-gray-100 active:border-black rounded-lg ">
        <div className="p-2 bg-[#eeeeee] rounded-full">
          <MapPin className="w-5 h-5" />
        </div>

        <div className="">
          <h4 className="text-base font-semibold">Torishima Building</h4>
          <p className="text-sm font-light">Brook Lane, Westbury</p>
        </div>
      </div>

      <div className="flex justify-start items-center space-x-2 mb-4 border-2 border-gray-100 active:border-black rounded-lg">
        <div className="p-2 bg-[#eeeeee] rounded-full">
          <MapPin className="w-5 h-5" />
        </div>

        <div className="">
          <h4 className="text-base font-semibold">Torishima Building</h4>
          <p className="text-sm font-light">Brook Lane, Westbury</p>
        </div>
      </div>

      <div className="flex justify-start items-center space-x-2 mb-4 border-2 border-gray-100 active:border-black rounded-lg">
        <div className="p-2 bg-[#eeeeee] rounded-full">
          <MapPin className="w-5 h-5" />
        </div>

        <div className="">
          <h4 className="text-base font-semibold">Torishima Building</h4>
          <p className="text-sm font-light">Brook Lane, Westbury</p>
        </div>
      </div>
    </>
  );
};

export default LocationSearchPanel;
