import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Deposit() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.content}>
          Earn upto 5% stable interest by{"\n"} depositing your money
        </Text>
      </View>
      <View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter Amount"
            keyboardType="numeric"
          />
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity>
            <Text style={styles.button}>Max</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity>
            <Text style={styles.buttonMain}>DEPOSIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    right: 193,
  },
  content: {
    position: "absolute",
    top: 360,
    fontWeight: "400",
    fontSize: 18,
    textAlign: "center",
    fontStyle: "italic",
  },
  input: {
    //flex: 4,
    position: "absolute",
    top: 460,
    height: 40,
    borderWidth: 2,
    borderColor: "#777",
    borderRadius: 12,
    padding: 10,
    paddingLeft: 20,
    width: 330,
  },
  button: {
    position: "absolute",
    fontWeight: "300",
    fontSize: 16,
    top: 468,
    right: 55,
    textAlign: "center",
    color: "#9C27B0",
  },
  buttonMain: {
    position: "absolute",
    right: 41,
    top: 360,
    backgroundColor: "#9C27B0",
    color: "#FFFFFF",
    width: 300,
    padding: 10,
    paddingTop: 12,
    textAlign: "center",
    height: 50,
    paddingHorizontal: 40,
    borderRadius: 12,
    fontSize: 19,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
