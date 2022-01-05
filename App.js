import React from "react";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "./redux/reducers/mainReducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
  mainReducer,
  composeEnhancer(applyMiddleware(thunk))
);

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Home from "./Screens/Home";
import Cities from "./Screens/Cities";
import SignUp from "./Screens/SignUp";

export default function App() {
  return (
    <Provider store={reduxStore}>
      <View style={styles.container}>
        {/* <Home/> */}
        {/* <Cities /> */}
        <SignUp />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
