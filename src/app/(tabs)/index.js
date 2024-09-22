import { View, Image , StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  IconButton,
  Searchbar,
  Appbar,
} from "react-native-paper";
import React, { useState } from "react";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function Index() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.iconButton}>
        <IconButton
          icon="menu"
          size={31}
          onPress={() => console.log("Hamburger icon pressed")}
        />
      </View>
      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Search here..."
          onChangeText={(value) => setSearch(value)}
          value={search}
        />
      </View>
      <View style={styles.image}>
        <Image
          source={{
            uri: "https://images.softwaresuggest.com/software_logo/1583220567_virtusa.png",
          }}
          style={{ width: 55, height: 55 }}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    marginLeft: 10,
  },
  iconButton: {
    marginLeft: 10,
  }, 
});
