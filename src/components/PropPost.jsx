import React from "react";
import RenderProp from "./RenderProp";

export default function PropPost() {
  return (
    <RenderProp>
      {({ counter, clickCounter }) => {
        return (
          <div>
            <button onClick={clickCounter}>Like Post {counter}</button>
          </div>
        );
      }}
    </RenderProp>
  );
}