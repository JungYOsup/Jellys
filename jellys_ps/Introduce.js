import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Search from "react-native-search-box";
import styled from "styled-components";

const Intro_container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const Search_container = styled.View`
  flex: 1;
`;
const Left_array_img = styled.Image`
margin: 35px 0px 15px 0px
height: 30
width: 25

`;

const List_container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 308;
  height: 121;
  margin: 10px 0px 0px 30px;
`;

const List_Text = styled.Text`
  width: 137px;
  height: 40px;
  font-size: 25px;
  margin-top: 5px;
`;

const ListView_container = styled.View`
  flex: 1;
  background-color: blue;
`;

export default class Introduce extends Component {
  state = {};

  render() {
    return (
      <Intro_container>
        <Search_container>
          <TouchableOpacity>
            <Left_array_img source={require("./img/left-arrow.png")} />
          </TouchableOpacity>
          <Search />
          <List_container>
            <TouchableOpacity>
              <List_Text>Gum</List_Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <List_Text>Sausage</List_Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <List_Text>Sashimi</List_Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <List_Text>Can/Pouch</List_Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <List_Text>Treat/Jerky</List_Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <List_Text>Bread</List_Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <List_Text>Biscuit</List_Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <List_Text>Homemade</List_Text>
            </TouchableOpacity>
          </List_container>
        </Search_container>

        <ListView_container />
      </Intro_container>
    );
  }
}
