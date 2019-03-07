import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Search from "react-native-search-box";

export default class Introduce extends Component {
  state = {};

  render() {
    return (
      <View style={styles.Intro_container}>
        <View style={styles.Search_container}>
          <View>
            <TouchableOpacity>
              <Image
                source={require("./img/left-arrow.png")}
                style={styles.backButton}
              />
            </TouchableOpacity>
            <Search style={styles.Search} />
          </View>

          <View style={styles.List_container}>
            <TouchableOpacity>
              <Text style={styles.List_text}>Gum</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.List_text}>Sausage</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.List_text}>Sashimi</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.List_text}>Can/Pouch</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.List_text}>Treat/Jerky</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.List_text}>Bread</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.List_text}>Biscuit</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.List_text}>Homemade</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ListView_container} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Intro_container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Search_container: {
    flex: 1.0
  },
  backButton: {
    marginTop: 35,
    height: 30,
    width: 25,
    marginBottom: 15
  },
  Search: {},
  List_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: 308,
    height: 121,
    marginLeft: 30,
    marginTop: 10
  },
  List_text: {
    width: 137,
    height: 40,
    fontSize: 25,
    marginTop: 5
  },
  ListView_container: {
    flex: 1.0,
    backgroundColor: "blue"
  }
});
