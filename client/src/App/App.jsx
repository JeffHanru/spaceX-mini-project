import { hot } from "react-hot-loader/root";
import React from "react";
import GlobalStyle from "../theme";
import { Application, Wrapper } from "./styles";
import DisplayConsoleContainer from "./containers/display-console-container";
import ControlConsoleContainer from "./containers/control-console-container";
import { Provider } from "react-redux";
import store from "../redux/index";

const App = () => (
  <Wrapper>
    <Provider store={store}>
      <Application>
        <DisplayConsoleContainer />
        <ControlConsoleContainer />
      </Application>
      <GlobalStyle />
    </Provider>
  </Wrapper>
);

export default hot(App);
