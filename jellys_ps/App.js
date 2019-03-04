import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo";
import First_Scene from "./First_Scene";

const { height, width } = Dimensions.get("window");
export default class App extends React.Component {
  render() {
    return <First_Scene />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
