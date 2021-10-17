import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ControlConsole from "../components/control-console";
import { useSelector } from "react-redux";
import {
  fetchAllCapsules,
  updateLandingPadInput,
  fetchLandingPad,
  fetchLandingPadFailure,
  fetchLandingPadSuccess,
} from "../actions/control-console";

function ControlConsoleContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCapsules());
  }, [dispatch]);

  const propsFromState = useSelector((state) => ({
    landingPadInput: state.spaceData.landingPadInput,
  }));

  const propsFromActions = {
    fetchAllCapsules,
    fetchLandingPad,
    updateLandingPadInput,
    fetchLandingPadFailure,
    fetchLandingPadSuccess,
  };

  return <ControlConsole {...propsFromState} {...propsFromActions} />;
}

export default ControlConsoleContainer;
