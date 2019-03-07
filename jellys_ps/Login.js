import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity //Button 태그는 사이즈에 한정이 있으므로 TouchableOpacity를 사용하는것이 좋다.
} from "react-native";
import { LinearGradient } from "expo"; // styled.component로 바꿀수 없다.
import styled, { css, keyframes } from "styled-components";

const { width } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const UpperContainer = styled.View`
  flex: 1.2;
  width: ${width};
  align-items: center;
  justify-content: center;
`;
const Linearcontainer = styled.View`
  padding-top: 300;
  justify-content: center;
  align-items: center;
`;
const Cat_img = styled.Image`
  width: 60;
  height: 60;
`;

const Upper_title = styled.Text`
  margin-top: 10;
  color: white;
  font-size: 23;
`;
const Upper_disc = styled.Text`
  margin-top: 40;
  color: white;
  font-size: 15;
`;

const Version = styled.Text`
  margin-top: 40;
  color: white;
  font-size: 15;
`;

const Bottomcontainer = styled.View`
  flex: 0.8;
  align-items: center;
  margin-top: 20;
`;

const ID = styled.View`
  flex-direction: row;
`;
const PW = styled.View`
  flex-direction: row;
`;

const Envelope_img = styled.Image`
  margin: 5px 10px 0px 0px;
  width: 20;
  height: 20;
`;

const Unlocked_img = styled.Image`
  margin: 5px 10px 0px 0px;
  width: 20
  height: 20

`;
const Login_Container = styled.View`
  margin: 30px 0px 0px 10px;
`;

const Login_button = styled.TouchableOpacity`
  padding: 10px;
  width: 150;
  align-items: center;
  border-radius: 10;
`;
const Button_text = styled.Text`
  color: white;
`;

const Footer_container = styled.View`
  flex: 1
  background-color: #fff`;

const Qs_joinus_container = styled.View`
  flex-direction: row;
  margin-top: 70;
`;

const Qs = styled.Text`
  font-size: 12px;
  color: #dfe4ea;
`;

const JoinUs = styled.Text`
  font-size: 12px;
  margin-left: 57px;
  color: red;
`;

const Policy = styled.Text`
  font-size: 12;
  color: #dfe4ea;
`;

export default class Login extends Component {
  state = {};

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <UpperContainer>
          <LinearGradient
            colors={["#FF9231", "#EE3A3A"]}
            style={styles.upperbackground}
          >
            <Linearcontainer>
              <Cat_img source={require("./img/cat.png")} />
              <Upper_title>Jellys</Upper_title>
              <Upper_disc>to keep every doggy healthy</Upper_disc>
              <Version>v1.0</Version>
            </Linearcontainer>
          </LinearGradient>
        </UpperContainer>

        <Bottomcontainer>
          <ID>
            <Envelope_img source={require("./img/envelope.png")} />
            <TextInput
              placeholder="이메일을 입력해 주세요           "
              style={styles.id_input}
            />
          </ID>
          <PW>
            <Unlocked_img source={require("./img/unlocked.png")} />
            <TextInput
              placeholder="Password                   forgot?"
              style={styles.id_pw}
            />
          </PW>

          <Login_Container>
            <LinearGradient
              styls={styles.button_LinearGradient}
              colors={["#FF9231", "#EE3A3A"]}
            >
              <Login_button>
                <Button_text>Log In</Button_text>
              </Login_button>
            </LinearGradient>
          </Login_Container>
          {/*지금 이 View 상태에서 borderRadius를 하는 방법을 모르겠다..  */}

          <Footer_container>
            <Qs_joinus_container>
              <Qs>Don't have an account yet?</Qs>
              <JoinUs>Join us!</JoinUs>
            </Qs_joinus_container>
            <Policy>By logging in. you agree to the JELLY's poilicy</Policy>
          </Footer_container>
        </Bottomcontainer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  upperbackground: {
    width: 600,
    height: 600,
    borderRadius: 300,
    marginTop: -200,
    alignItems: "center",
    justifyContent: "center"
  },
  id_input: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#dfe4ea"
  },
  id_pw: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#dfe4ea"
  },
  button_LinearGradient: {
    borderRadius: 30
  },
  policy: {
    fontSize: 12,
    color: "#dfe4ea"
  }
});
