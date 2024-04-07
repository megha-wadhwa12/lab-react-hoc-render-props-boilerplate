import { useState } from "react";

const RenderProp = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const clickCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return children({ counter, clickCounter });
};

export default RenderProp;