import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import VaultBottom from '../components/VaultBottom'

 const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
);


export default function Vault() {
    return (
      <DismissKeyboard>
      <View>
        <View style ={styles.container1}>
          <View style={styles.container1}>
            <Text style = {styles.content}> $ 500 <Entypo name="lock" size={55} color="#9C27B0" /></Text>
          </View>
          <View style={styles.container2}>
            <Text style = {styles.address}>  0xe4D...8242  </Text>
          </View>
        </View>
        <View>
          <VaultBottom />
        </View>
      </View>
      </DismissKeyboard>
    );
  }

  const styles =StyleSheet.create({
    container1: { 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    content:{
        fontWeight: '400', 
        fontSize: 60, 
        position: 'absolute', 
        top:90, 
   
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    address:{
        position: 'absolute',
        top: 170,
        fontSize: 20,
        backgroundColor:"#F3E5F5",
        borderRadius: 25, 
    },
  });