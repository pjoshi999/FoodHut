import { useEffect, useState } from "react";

const ProfileFunctional = (props) => {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);

    console.log("useEffect child 1");
    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);

  console.log("render child 1");
  return (
    <>
      <h1>Profile Functional Component</h1>
      <h2>Name: {props.name}</h2>
      {/* <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button> */}
    </>
  );
};

export default ProfileFunctional;
