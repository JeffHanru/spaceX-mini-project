import React from "react";
import {
  ControlConsoleWrapper,
  ConsoleSectionWrapper,
} from "../styles/control-console";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";
import TextField from "@material-ui/core/TextField";

function ControlConsole(props) {
  const dispatch = useDispatch();
  const specialChars = /[#$%&]+/;
  const disableButton = specialChars.test(props.landingPadInput);
  return (
    <ControlConsoleWrapper>
      <ConsoleSectionWrapper>
        <Button
          variant="outlined"
          onClick={onCapsulesButtonClicked}
          size="large"
        >
          Capsules
        </Button>
      </ConsoleSectionWrapper>
      <ConsoleSectionWrapper>
        <Rocket />
      </ConsoleSectionWrapper>
      <ConsoleSectionWrapper>
        <TextField
          id="landing pad input"
          label="ID"
          onChange={onLandingPadInputUpdated}
          placeholder="LZ-1"
          size="small"
          value={props.landingPadInput}
          variant="outlined"
        />
      </ConsoleSectionWrapper>
      <ConsoleSectionWrapper>
        <Button
          disabled={disableButton}
          variant="outlined"
          onClick={onLandingPadButtonClicked}
          size="large"
        >
          Landing Pad
        </Button>
      </ConsoleSectionWrapper>
    </ControlConsoleWrapper>
  );

  function onCapsulesButtonClicked() {
    return dispatch(props.fetchAllCapsules());
  }

  function onLandingPadButtonClicked() {
    if (!props.landingPadInput) {
      return dispatch(props.fetchLandingPadFailure("Please input something"));
    }
    return dispatch(props.fetchLandingPad());
  }

  function onLandingPadInputUpdated(event) {
    return dispatch(props.updateLandingPadInput(event.target.value));
  }
}

export default ControlConsole;
