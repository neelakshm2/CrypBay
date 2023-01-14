import * as React from "react";
import Auth from "./screens/Auth";
import Buy from "./screens/Buy";
import EStyleSheet from "react-native-extended-stylesheet";
import Feed from "./screens/Feed";
import Vault from "./screens/Vault";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Image, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";

let entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

function LogoTitle() {
  return <Image style={styles.logo} source={require("./assets/logo_.png")} />;
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  const [key, setKey] = useState("");
  const [vault, setVault] = useState(0.498);
  const [bal, setBal] = useState(1.098);
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
        children={() => (
          <Feed
            key={key}
            vault={vault}
            bal={bal}
            setVault={setVault}
            setBal={setBal}
          />
        )}
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
        children={() => (
          <Vault
            key={key}
            vault={vault}
            bal={bal}
            setVault={setVault}
            setBal={setBal}
          />
        )}
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
      <Tab.Screen
        name="Buy"
        children={() => <Buy key={key} />}
        options={{
          tabBarLabel: "Buy",
          headerStyle: {
            backgroundColor: "#F3E5F5",
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="shopping-bag-1" size={size} color={color} />
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

const styles = EStyleSheet.create({
  logo: {
    width: "240rem",
    height: "60rem",
    marginLeft: "54rem",
  },
});
