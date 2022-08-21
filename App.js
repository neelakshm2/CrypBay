import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Feed from "./screens/Feed";
import Vault from "./screens/Vault";

function LogoTitle() {
  return (
    <Image
      style={{
        width: 200,
        height: 50,
        flex: 1,
        marginHorizontal: "21%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
      source={require("./assets/logo_.png")}
    />
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#9C27B0",
        tabBarStyle: { backgroundColor: "#F3E5F5" },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Home",
          headerStyle: {
            backgroundColor: "#F3E5F5",
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Vault"
        component={Vault}
        options={{
          tabBarLabel: "Vault",
          headerStyle: {
            backgroundColor: "#F3E5F5",
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="wallet" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
