import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";

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
          style={{
            position: "absolute",
            top: 360,
            right: -300,
            width: 600,
            height: 280,
            padding: 20,
          }}
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

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    right: 192,
  },
  content: {
    position: "absolute",
    top: 380,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  scanner: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  button: {
    position: "absolute",
    top: 450,
    right: -145,
    backgroundColor: "#9C27B0",
    color: "#FFFFFF",
    width: 300,
    padding: 10,
    paddingTop: 12,
    textAlign: "center",
    height: 50,
    borderRadius: 12,
    fontSize: 19,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
