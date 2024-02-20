import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { Routes } from "./navigation/routes";

function App() {
  return (
    <>
      {/* <StatusBar barStyle={"dark-content"} /> */}
      <Routes />
    </>
  );
}
export default App;
