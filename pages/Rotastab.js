import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity, Alert} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "./Home.js";
import Pesquisa from "./Pesquisa.js"
import Frutas from "./Animes.js"


const Tab = createBottomTabNavigator();
export default function RotasTab(){
    return(
        <Tab.Navigator initialRouteName="Home"
        style={estilo.container}>
            <Tab.Screen
            name="Home"
            component={Home}
                options = {{
                tabBarIcon:({color,size})=><MaterialCommunityIcons
                name="home" color={color} size ={size}/>}}
            />
            <Tab.Screen
            name="Agenda"
            component={Frutas}
                options = {{
                tabBarIcon:({color,size})=><MaterialCommunityIcons
                name="calendar-range" color={color} size ={size}/>}}
            />
             <Tab.Screen
            name="Feed" style={estilo.aaa}
            component={Pesquisa}
                options = {{
                tabBarIcon:({color,size})=><MaterialCommunityIcons
                name="newspaper" color={color} size ={size}/>}}
            />
             
          
            
        </Tab.Navigator>


    );


}

const estilo = StyleSheet.create({
    container: {
      
    },
    aaa:{
    color:'#D50000'
    }
})