import { View, Text, StyleSheet } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

export default function Generator() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        <QRCode value="0x891673bfd490b1d0FD4d1534fD135e76bBF44dfE" size={200} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    right: 192,
  },
  content: {
    position: "absolute",
    top: 380,
  },
});
