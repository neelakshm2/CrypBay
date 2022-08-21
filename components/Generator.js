import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import EStyleSheet from "react-native-extended-stylesheet";

let entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default function Generator() {
  return (
    <View>
      <Text style={styles.content}>
        <QRCode value="0x891673bfd490b1d0FD4d1534fD135e76bBF44dfE" size={200} />
      </Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  content: {
    position: "absolute",
    top: "260rem",
    alignSelf: "center",
    right: "96rem",
  },
});
