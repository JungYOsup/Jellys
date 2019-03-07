//styled-components로 바꾸기전

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity //Button 태그는 사이즈에 한정이 있으므로 TouchableOpacity를 사용하는것이 좋다.
} from "react-native";
import { LinearGradient } from "expo";

// import styled from "styled-components";

const { height, width } = Dimensions.get("window");
export default class Login extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.uppercontainer}>
          <LinearGradient
            colors={["#FF9231", "#EE3A3A"]}
            style={styles.upperbackground}
          >
            <View style={styles.linearcontainer}>
              <Image
                style={styles.upperlogo}
                source={require("./img/cat.png")}
              />
              <Text style={styles.uppertitle}>Jellys</Text>
              <Text style={styles.upperdisc}>to keep every doggy healthy</Text>
              <Text style={styles.version}>v1.0</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.bottomcontainer}>
          <View style={styles.id}>
            <Image
              source={require("./img/envelope.png")}
              style={styles.evelope}
            />
            <TextInput
              placeholder="이메일을 입력해 주세요           "
              style={styles.id_input}
            />
          </View>
          <View style={styles.pw}>
            <Image source={require("./img/unlocked.png")} style={styles.lock} />
            <TextInput
              placeholder="Password                   forgot?"
              style={styles.id_pw}
            />
          </View>

          <View style={styles.login}>
            <LinearGradient
              styls={styles.button_LinearGradient}
              colors={["#FF9231", "#EE3A3A"]}
            >
              <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text}>Log In</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          {/*지금 이 View 상태에서 borderRadius를 하는 방법을 모르겠다..  */}

          <View style={styles.footer}>
            <View style={styles.qs_joinus_container}>
              <Text style={styles.qs}>Don't have an account yet?</Text>
              <Text style={styles.joinus}>Join us!</Text>
            </View>
            <Text style={styles.policy}>
              By logging in. you agree to the JELLY's poilicy
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  uppercontainer: {
    flex: 1.2,
    width: width,
    alignItems: "center",
    justifyContent: "center"
  },
  upperbackground: {
    width: 600,
    height: 600,
    borderRadius: 300,
    marginTop: -200,
    alignItems: "center",
    justifyContent: "center"
  },
  linearcontainer: {
    paddingTop: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  upperlogo: {
    width: 60,
    height: 60
  },
  uppertitle: {
    marginTop: 10,
    color: "white",
    fontSize: 23
  },
  upperdisc: {
    marginTop: 40,
    color: "white",
    fontSize: 15
  },
  version: {
    marginTop: 40,
    color: "white",
    fontSize: 15
  },
  bottomcontainer: {
    flex: 0.8,
    alignItems: "center",
    marginTop: 20
  },
  id: {
    flexDirection: "row"
  },
  pw: {
    flexDirection: "row"
  },
  id_input: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#dfe4ea"
  },
  id_pw: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#dfe4ea"
  },
  evelope: {
    marginTop: 5,
    width: 20,
    height: 20,
    marginRight: 10
  },
  lock: {
    marginTop: 5,
    width: 20,
    height: 20,
    marginRight: 10
  },
  login: {
    marginTop: 30,
    marginLeft: 10
  },
  button_LinearGradient: {
    borderRadius: 30
  },
  button: {
    padding: 10,
    width: 150,
    alignItems: "center",
    borderRadius: 10
  },
  button_text: {
    color: "white"
  },
  qs_joinus_container: {
    flexDirection: "row",
    marginTop: 70
  },
  qs: {
    fontSize: 12,
    color: "#dfe4ea"
  },
  joinus: {
    fontSize: 12,
    marginLeft: 57,
    color: "red"
  },
  policy: {
    fontSize: 12,
    color: "#dfe4ea"
  }
});
