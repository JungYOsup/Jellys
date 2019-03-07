import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppContainer from "./MainNavigator";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
