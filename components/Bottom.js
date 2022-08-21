import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Generator from "./Generator";
import Camera from "./Camera";

let entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

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
    paddingHorizontal: "64rem",
    marginTop: "190rem",
  },
  content: { fontSize: "22.5rem", fontWeight: "400" },
});
