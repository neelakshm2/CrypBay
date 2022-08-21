import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";
import EStyleSheet from "react-native-extended-stylesheet";

let entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default function Camera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const askPermissions = () => {
    (async () => {
      console.log("Asking for permissions");
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission && hasPermission) {
    console.log("Camera opened, permission true");
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={askPermissions}>
      <View style={styles.container}>
        <Text style={styles.button}>Open Camera</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
  container: {
    right: "185rem",
  },
  button: {
    position: "absolute",
    top: "330rem",
    right: "-140rem",
    backgroundColor: "#9C27B0",
    color: "#FFFFFF",
    width: "280rem",
    paddingTop: "12rem",
    textAlign: "center",
    height: "50rem",
    borderRadius: "20rem",
    fontSize: "18rem",
    fontWeight: "600",
    letterSpacing: 1,
  },
  scanner: {
    position: "absolute",
    top: "250rem",
    right: "-285rem",
    width: "580rem",
    height: "270rem",
  },
});
