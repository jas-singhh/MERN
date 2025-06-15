import { createContext, useState } from "react";

export const DriverDataContext = createContext();

const DriverContext = ({ children }) => {
  const [driverData, setDriverData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    vehicle: {
      make: "",
      model: "",
      year: "",
      licensePlate: "",
    },
    isAvailable: false,
    location: {
      latitude: null,
      longitude: null,
    },
  });

  return (
    <DriverDataContext.Provider value={{ driverData, setDriverData }}>
      {children}
    </DriverDataContext.Provider>
  );
};

export default DriverContext;
