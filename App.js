import React from "react";
import { Routes } from "./navigation/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      {/* <StatusBar barStyle={"dark-content"} /> */}
      <Routes />
    </Provider>
  );
}
export default App;
