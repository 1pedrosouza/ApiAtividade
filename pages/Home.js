import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text,View,StyleSheet, ImageBackground} from 'react-native';

export default function Home(){
    return(
    <View style={estilo.container}>
      <ImageBackground  style={estilo.backgroundImage} source={require('../assets/jeti.gif')}>

</ImageBackground>

<StatusBar style="auto" />
    </View>
    );
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    backgroundImage: {
      flex: 1,
      width:420,
      height:580,
    
      
  }
   
  });  