import { View, Text, PixelRatio } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Bottom from "../components/Bottom";

export default function Feed() {
  return (
    <View>
      <View style={styles.container1}>
        <View style={styles.container1}>
          <Text style={styles.content}> $ 156.12 </Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.address}> 0xe4D...8242 </Text>
        </View>
      </View>
      <View>
        <Bottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontWeight: "400",
    fontSize: 60,
    position: "absolute",
    top: 90,
    letterSpacing: -1,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  address: {
    position: "absolute",
    top: 170,
    fontSize: 20,
    backgroundColor: "#F3E5F5",
    borderRadius: 25,
  },
});
