import React, { useState } from "react";

const HOC = (Wrapped) => {
  return (props) => {
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLike = () => {
      setLikeCounter((prevCounter) => prevCounter + 1);
    };

    return (
      <Wrapped
        {...props}
        handleLike={handleLike}
        likeCounter={likeCounter}
      />
    );
  };
};

export default HOC;

// import React, { useState } from "react";

// const HOC = (WrappedComponent) => {
//   return function HOC(props) {
//     const [likeCounter, setLikeCounter] = useState(0);

//     const handleLike = () => {
//       setLikeCounter((prevCounter) => prevCounter + 1);
//     };

//     return (
//       <WrappedComponent
//       likeCounter={likeCounter}
//         likeHandle={handleLike}
//         {...props}
//       />
//     );
//   };
// };

// export default HOC;
