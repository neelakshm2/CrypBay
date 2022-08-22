import { View, Text, ScrollView, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Bottom from "../components/Bottom";
import { useWallet } from "../hooks/useWallet";

let entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default function Feed({ key, vault, setVault, bal, setBal }) {
  // const wallet = useWallet(key);
  // useEffect(()=>{
  //   console.log(wallet.getAddress())
  // })
  return (
    <View>
      <View>
        <View style={styles.container}>
          <Text style={styles.content}> $ {bal.toString()} </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.address}> 0xe4D...8242 </Text>
        </View>
      </View>
      <Bottom />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    fontWeight: "400",
    fontSize: "55rem",
    top: "76rem",
    letterSpacing: -2,
  },

  address: {
    top: "90rem",
    fontSize: "19rem",
    backgroundColor: "#F3E5F5",
    borderRadius: "25rem",
    paddingHorizontal: "5rem",
  },
});
