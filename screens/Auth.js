import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, Button, TouchableOpacity, Dimensions } from "react-native";
import { login } from "../services/login";

import EStyleSheet from "react-native-extended-stylesheet";

let entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

global.key = "";
export default function Auth() {
  //const [key, setKey] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    console.log(key);
  }, [key, userInfo]);
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Please Login to Continue</Text>
      <TouchableOpacity>
        <Text style={styles.buttonMain}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontWeight: "200",
    fontSize: "28rem",
    top: "-40rem",
    fontStyle: "italic",
  },
  buttonMain: {
    backgroundColor: "#9C27B0",
    color: "#FFFFFF",
    width: "290rem",
    paddingTop: "12rem",
    textAlign: "center",
    height: "50rem",
    borderRadius: "12rem",
    fontSize: "19rem",
    fontWeight: "600",
    letterSpacing: 1,
  },
});
