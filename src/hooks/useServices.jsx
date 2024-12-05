import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((data) => data.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return services;
};

export default useServices;
