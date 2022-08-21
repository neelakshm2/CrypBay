import React, { useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

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
    style={{
      borderBottomWidth: 3,
      borderBottomColor: props.activeTab == props.text ? "#9C27B0" : "#C2B6C3",
      padding: 20,
      paddingVertical: 6,
      paddingHorizontal: 55,
      marginTop: 280,
    }}
    onPress={() => {
      props.setActiveTab(props.text);
    }}
  >
    <Text style={{ fontSize: 22, fontWeight: "400" }}>{props.text}</Text>
  </TouchableOpacity>
);
