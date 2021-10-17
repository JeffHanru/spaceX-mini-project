import React from "react";
import DisplayConsole from "../components/display-console";
import { useSelector } from "react-redux";

function DisplayConsoleContainer() {
  const propsFromState = useSelector((state) => ({
    capsules: state.spaceData.capsules,
    landingPad: state.spaceData.landingPad,
    ui: state.spaceData.ui,
    error: state.spaceData.error
  }));

  return <DisplayConsole {...propsFromState} />;
}

export default DisplayConsoleContainer;
