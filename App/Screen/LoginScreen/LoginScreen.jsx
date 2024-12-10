import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function LoginScreen() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("../../../assets/images/ev-charging.png")}
        style={styles.logoImg}
      />

      <View style={{ padding: 20 }}>
        <Text style={styles.heading}>
          Your Ultimate EV charging Station Finder App
        </Text>
        <Text style={styles.desc}>
          Find EV charging station near you, plan trip and so much more in just
          one click
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
            }}
          >
            Login With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  logoImage: {
    width: 200,
    height: 40,
    objectFit: "contain",
  },

  logoImg: {
    width: "100%",
    height: 240,
    objectFit: "cover",
    marginTop: 20,
  },

  heading: {
    fontSize: 25,
    fontFamily: "OutfitB",
    textAlign: "center",
    marginTop: 20,
    color: Colors.BLACK,
  },
  desc: {
    fontSize: 17,
    fontFamily: "Outfit",
    marginTop: 15,
    textAlign: "center",
    color: Colors.GRAY,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 60,
  },
});
