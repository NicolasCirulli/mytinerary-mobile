import React from "react";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "./redux/reducers/mainReducer";

import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './navigation/Drawer'

import FlashMessage from "react-native-flash-message";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
  mainReducer,
  composeEnhancer(applyMiddleware(thunk))
);

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";


export default function App() {
  
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <DrawerNavigator style={styles.container}/>
          <View >
            <StatusBar style="auto" />
            <FlashMessage position="top" />
          </View>
      </NavigationContainer>
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
