import axios from "axios";
import { get, defaults } from "partial.lenses";

export const FETCH_ALL_CAPSULES_START =
  "control-console/fetch-all-capsules-start";
export const FETCH_ALL_CAPSULES_SUCCESS =
  "control-console/fetch-all-capsules-success";
export const FETCH_ALL_CAPSULES_FAILURE =
  "control-console/fetch-all-capsules-failure";
export const UPDATE_LANDING_PAD_INPUT =
  "control-console/update-landing-pad-input";

export const FETCH_LANDING_PAD_START =
  "control-console/fetch-landing-pad-start";
export const FETCH_LANDING_PAD_SUCCESS =
  "control-console/fetch-landing-pad-success";
export const FETCH_LANDING_PAD_FAILURE =
  "control-console/fetch-landing-pad-failure";

export function fetchLandingPad() {
  return (dispatch, getState) => {
    dispatch(fetchLandingPadStart());
    const landingPadInput = getState().spaceData.landingPadInput;
    axios
      .get(`http://localhost:4000/v3/landpads/${landingPadInput}?pretty=true`)
      .then((response) => {
        dispatch(fetchLandingPadSuccess(response));
      })
      .catch((error) => {
        const errorMessage = get(
          ["response", "data", defaults("request failed")],
          error
        );
        dispatch(fetchLandingPadFailure(errorMessage));
      });
  };
}

export function fetchLandingPadStart() {
  return {
    type: FETCH_LANDING_PAD_START,
  };
}

export function fetchLandingPadSuccess(data) {
  return {
    type: FETCH_LANDING_PAD_SUCCESS,
    data,
  };
}

export function fetchLandingPadFailure(data) {
  return {
    type: FETCH_LANDING_PAD_FAILURE,
    data,
  };
}

export function fetchAllCapsules() {
  return (dispatch) => {
    dispatch(fetchAllCapsulesStart());
    axios
      .get("http://localhost:4000/v3/capsules?pretty=true")
      .then((response) => {
        dispatch(fetchAllCapsulesSuccess(response));
      })
      .catch((error) => {
        const errorMessage = get(
          ["response", "data", defaults("request failed")],
          error
        );
        dispatch(fetchAllCapsulesFailure(errorMessage));
      });
  };
}

export function fetchAllCapsulesStart() {
  return {
    type: FETCH_ALL_CAPSULES_START,
  };
}

export function fetchAllCapsulesSuccess(data) {
  return {
    type: FETCH_ALL_CAPSULES_SUCCESS,
    data,
  };
}

export function fetchAllCapsulesFailure(data) {
  return {
    type: FETCH_ALL_CAPSULES_FAILURE,
    data,
  };
}

export function updateLandingPadInput(data) {
  return {
    type: UPDATE_LANDING_PAD_INPUT,
    data,
  };
}
