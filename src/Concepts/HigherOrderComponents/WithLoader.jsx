import React, { useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";

const WithLoader = (ChildComponent) => {
  return (props) => {
    const [loader, setLoader] = useState(true);

    setTimeout(() => {
      setLoader(false);
    }, 2000);

    return (
      <>
        {loader ? (
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
          />
        ) : (
          <ChildComponent {...props} />
        )}
      </>
    );
  };
};

export default WithLoader;
