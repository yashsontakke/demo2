import { View, Image, StyleSheet, Dimensions } from "react-native";
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
import { useTheme } from "../../hooks/useTheme";

const { width, height } = Dimensions.get('window');

const Index: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const { colorScheme } = useTheme(); // Get the current theme
  console.log("Current Theme:", colorScheme); // Log the current theme
  const welcomeTextColor = colorScheme === 'dark' ? '#F6E5E2' : '#52433F';
  const buttonTextColor = colorScheme === 'dark' ? '#F6E5E2' : '#52433F';
  const buttonColor = colorScheme === 'dark' ? '#392B27' : '#F6E5E2';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
      <View style={styles.welcome}>
        <Text style={[styles.welcomeText, { color: welcomeTextColor }]}>
          Welcome to FLEXBOX
        </Text>
      </View>
      <View style={styles.company}>
        <Image
          style={styles.companyimage}
          source={{
            uri: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/px8dkptpqet9hrjqupqc",
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttons}>
        <Button style={[styles.button, { backgroundColor: buttonColor }]}>
          <Text style={[styles.buttonText, { color: buttonTextColor }]}>Capital</Text>
        </Button>
        <Button style={[styles.button, { backgroundColor: buttonColor }]}>
          <Text style={[styles.buttonText, { color: buttonTextColor }]}>Campus</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 7,
  },
  header: {
    flex: 1 / 9,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  searchBar: {
    flex: 1,
    width: '50%',
  },
  image: {
    marginLeft: 10,
    marginRight: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
  welcome: {
    flex: 1 / 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: (1 / 18) * height,
    marginBottom: (2 / 18) * height,
  },
  welcomeText: {
    fontSize: 24, // Set font size
    fontWeight: '900', // Make the text bold
    textAlign: 'center', // Center the text
  },
  company: {
    flex: 7 / 18,
    justifyContent: "center",
    alignItems: "center",
  },
  companyimage: {
    height: '100%',
    width: '50%',
    backgroundColor: '#E5D7D3',
    borderRadius: 5,
  },
  button: {
    width: '50%',
    borderRadius: 5, // Rounded corners
    marginRight: 5, // Space between buttons
  },
  buttons: {
    flex: 2 / 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: (1 / 18) * height,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18, // Set font size
    fontWeight: '900', // Make the text bold
    textAlign: 'center', // Center the text
    padding: 10, // Add padding around the text
  },
});

export default Index;