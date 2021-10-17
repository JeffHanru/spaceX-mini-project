import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  FETCH_ALL_CAPSULES_START,
  FETCH_ALL_CAPSULES_SUCCESS,
  FETCH_ALL_CAPSULES_FAILURE,
  UPDATE_LANDING_PAD_INPUT,
  FETCH_LANDING_PAD_FAILURE,
  FETCH_LANDING_PAD_START,
  FETCH_LANDING_PAD_SUCCESS,
} from "../App/actions/control-console";
import thunk from "redux-thunk";
import { set } from "partial.lenses";
import { pipe, sort, defaultTo } from "ramda";

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === "development";
const initialState = {
  ui: { mode: "capsules", loading: false },
  capsules: [],
  landingPad: {},
  landingPadInput: "",
  error: "",
};

const reducers = {
  spaceData: (state = initialState, action) => {
    const { type } = action;
    switch (type) {
      case FETCH_ALL_CAPSULES_START: {
        return pipe(
          set(["ui", "mode"], "capsules"),
          set(["ui", "loading"], true)
        )(state);
      }
      case FETCH_LANDING_PAD_START: {
        return pipe(
          set(["ui", "mode"], "landing pad"),
          set(["ui", "loading"], true)
        )(state);
      }
      case FETCH_ALL_CAPSULES_SUCCESS: {
        const capsulesSortedByDate = sort(
          (a, b) =>
            new Date(a.original_launch).getTime() -
            new Date(b.original_launch).getTime(),
          action.data.data.data
        );
        return pipe(
          set(["capsules"], defaultTo([], capsulesSortedByDate)),
          set(["ui", "loading"], false),
          set(["error"], "")
        )(state);
      }
      case FETCH_LANDING_PAD_SUCCESS: {
        return pipe(
          set(["ui", "mode"], "landing pad"),
          set(["landingPad"], defaultTo({}, action.data.data)),
          set(["ui", "loading"], false),
          set(["error"], ""),
        )(state);
      }
      case FETCH_LANDING_PAD_FAILURE: {
        return pipe(
          set(["landingPad"], {}),
          set(["ui", "loading"], false),
          set(["error"], action.data)
        )(state);
      }
      case FETCH_ALL_CAPSULES_FAILURE: {
        return pipe(
          set(["capsules"], {}),
          set(["ui", "loading"], false),
          set(["error"], action.data)
        )(state);
      }
      case UPDATE_LANDING_PAD_INPUT: {
        if (action.data.length >= 15) {
          return state;
        }
        return set(["landingPadInput"], defaultTo("", action.data), state);
      }

      default:
        return state;
    }
  },
};

const slices = combineReducers({ ...reducers });

const composeEnhancers =
  isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    : compose;

const store = createStore(slices, composeEnhancers(applyMiddleware(thunk)));

export default store;
