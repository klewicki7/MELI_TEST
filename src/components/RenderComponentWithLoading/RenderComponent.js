import React from "react";
import { SpinnerCircularSplit } from "spinners-react";
function RenderComponent({ isLoading, children }) {
  if (isLoading) {
    return (
      <SpinnerCircularSplit
        enabled={isLoading}ƒ
        color={"#ffe600"}
        thickness={250}
        secondaryColor={"#333333"}
      />
    );
  } else {
    return [children];
  }
}

export default RenderComponent;
