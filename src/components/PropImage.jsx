import React from "react";
import RenderProp from "./RenderProp";

function PropImage() {
  return (
    <RenderProp>
      {({ counter, clickCounter }) => {
        return (
          <div>
            <button onClick={clickCounter}>Like Image {counter}</button>
          </div>
        );
      }}
    </RenderProp>
  );
}

export default PropImage
