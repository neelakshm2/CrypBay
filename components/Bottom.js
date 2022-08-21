import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import Generator from "./Generator";
import Camera from "./Camera";

export default function Bottom() {
  const [activeTab, setActiveTab] = useState("Receive");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Receive"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Send"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "Receive" && <Generator />}
      {activeTab === "Send" && <Camera />}
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
      paddingHorizontal: 67,
      marginTop: 280,
    }}
    onPress={() => {
      props.setActiveTab(props.text);
    }}
  >
    <Text style={{ fontSize: 22, fontWeight: "400" }}>{props.text}</Text>
  </TouchableOpacity>
);
