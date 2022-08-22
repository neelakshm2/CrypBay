import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";

let entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default function Withdraw({ vault, setVault, bal, setBal }) {
  const [amount, setAmount] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.content}>
          Your Earning is: <Text style={{ fontWeight: "bold" }}>$ 0.01</Text>
        </Text>
      </View>
      <View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setAmount(val)}
            value={amount}
            placeholder="Enter Amount"
            keyboardType="numeric"
          />
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity>
            <Text
              style={styles.button}
              onPress={() => {
                setAmount(vault);
                console.log(amount);
              }}
            >
              Max
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity>
            <Text
              style={styles.buttonMain}
              onPress={() => {
                const temp = bal + parseInt(amount) - 0.002;
                setVault(vault - parseFloat(amount) - 0.002);
                setBal(temp);
              }}
            >
              WITHDRAW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = EStyleSheet.create({
  container: {
    alignItems: "center",
    right: "193rem",
  },
  content: {
    position: "absolute",
    top: "250rem",
    fontWeight: "400",
    fontSize: "17rem",
    textAlign: "center",
    fontStyle: "italic",
  },
  input: {
    position: "absolute",
    top: "340rem",
    height: "38rem",
    borderWidth: "2rem",
    borderColor: "#777",
    borderRadius: "12rem",
    paddingLeft: "20rem",
    width: "310rem",
  },
  button: {
    position: "absolute",
    fontWeight: "300",
    fontSize: "16rem",
    top: "347rem",
    right: "55rem",
    color: "#9C27B0",
  },
  buttonMain: {
    position: "absolute",
    right: "46rem",
    top: "290rem",
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
