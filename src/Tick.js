import React, { useEffect, useState } from "react";
const Tick = () => {
  let [tick, setTick] = useState(0);
  useEffect(() => {
    setTick(setInterval(1000));
  }, [tick]);
  return <div>{tick}</div>;
};
export default Tick;
