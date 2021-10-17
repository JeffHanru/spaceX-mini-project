import React from "react";
import {
  DisplayConsoleWrapper,
  ConsoleItem,
  ConsoleTitle,
} from "../styles/display-console";

function DisplayConsole(props) {
  return <DisplayConsoleWrapper>{renderContent()}</DisplayConsoleWrapper>;

  function renderContent() {
    if (props.ui.loading) {
      return <ConsoleItem>Loading...</ConsoleItem>;
    }
    if (props.error) {
      return <ConsoleItem>Error: {props.error}</ConsoleItem>;
    }
    return (
      <>
        {" "}
        {renderTitle()}
        {renderCapsuleOptions()}
      </>
    );
  }

  function renderCapsuleOptions() {
    if (props.ui.mode === "capsules") {
      return props.capsules.map((capsule) => (
        <ConsoleItem key={capsule.capsule_serial}>
          {JSON.stringify(capsule, null, 2)}
        </ConsoleItem>
      ));
    }
    return (
      <ConsoleItem>{JSON.stringify(props.landingPad, null, 2)}</ConsoleItem>
    );
  }

  function renderTitle() {
    return (
      <ConsoleTitle>Current mode: Displaying {props.ui.mode}</ConsoleTitle>
    );
  }
}

export default DisplayConsole;
