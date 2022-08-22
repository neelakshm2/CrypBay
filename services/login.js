import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import Constants, { AppOwnership } from "expo-constants";
import Web3Auth from "@web3auth/react-native-sdk";
import { Buffer } from "buffer";
import { OPENLOGIN_NETWORK } from "@web3auth/react-native-sdk";

const scheme = "crypbay";

global.Buffer = global.Buffer || Buffer;

const resolvedRedirectUrl =
  Constants.appOwnership == AppOwnership.Expo ||
  Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("web3auth", {})
    : Linking.createURL("web3auth", { scheme: scheme });

export const login = async ({ setKey }) => {
  try {
    const web3auth = new Web3Auth(WebBrowser, {
      clientId: "BKdBQDC_z6Uvn7wNScvemlwOjGQwFegRnB420NrLAxveH-WAoyebOcYQvOp_x3XVh7hVHttCHe7gn5yneQQtNsY",
      network: OPENLOGIN_NETWORK.TESTNET,
    });
    const state = await web3auth.login({
      redirectUrl: resolvedRedirectUrl,
    });
    setKey(state.privKey || "no key");
  } catch (e) {
    console.error(e);
  }
};
