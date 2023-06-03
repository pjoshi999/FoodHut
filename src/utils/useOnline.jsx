import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  function handleOnline() {
    setIsOnline(true);
  }
  function handleOffline() {
    setIsOnline(false);
  }

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    // console.log("added event");

    // componentWillUnmount() version of functional components
    return () => {
      //   console.log("removed event");
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
