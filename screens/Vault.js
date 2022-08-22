import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import EStyleSheet from "react-native-extended-stylesheet";
import VaultBottom from "../components/VaultBottom";

let entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Vault({ vault, setVault, bal, setBal }) {
  return (
    <DismissKeyboard>
      <View>
        <View>
          <View style={styles.container}>
            <Text style={styles.content}>
              {"  "}$ {vault.toString()}{" "}
              <Entypo name="lock" size={55} color="#9C27B0" />
            </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.address}> 0xe4D...8242 </Text>
          </View>
        </View>
        <View>
          <VaultBottom
            vault={vault}
            bal={bal}
            setVault={setVault}
            setBal={setBal}
          />
        </View>
      </View>
    </DismissKeyboard>
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
  },
  address: {
    top: "90rem",
    fontSize: "19rem",
    backgroundColor: "#F3E5F5",
    borderRadius: "25rem",
    paddingHorizontal: "5rem",
  },
});
