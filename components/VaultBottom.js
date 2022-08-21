import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { TouchableOpacity, KeyboardAvoidingView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

let entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default function Bottom() {
  const [activeTab, setActiveTab] = useState("Deposit");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Deposit"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Withdraw"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "Deposit" && <Deposit />}
      {activeTab === "Withdraw" && <Withdraw />}
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={[
      styles.button,
      {
        borderBottomColor:
          props.activeTab == props.text ? "#9C27B0" : "#C2B6C3",
      },
    ]}
    onPress={() => {
      props.setActiveTab(props.text);
    }}
  >
    <Text style={styles.content}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = EStyleSheet.create({
  button: {
    borderBottomWidth: "2.5rem",
    paddingVertical: "4.5rem",
    paddingHorizontal: "55rem",
    marginTop: "170rem",
  },
  content: { fontSize: "22.5rem", fontWeight: "400" },
});
