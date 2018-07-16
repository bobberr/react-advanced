import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/index";
import Root from "./Components/Root";
import { ConnectedRouter } from "react-router-redux";
import history from "./redux/history";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Root />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
