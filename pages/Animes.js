
import { StatusBar } from 'expo-status-bar';
import {Text,View,StyleSheet,FlatList,TouchableOpacity, Alert} from 'react-native';
import { useState , useEffect} from 'react';
import api from '../pages/Api';

export default function Frutas(){
const [datalancamento,setdadosLuta] = useState([]);

async function getFrutas(){
  try
  {
    const resultado = await api.get(`/datalancamento`);
    return resultado.data
  }catch(error){
    console.log(error)
    return[]
  }
}
useEffect(async() =>{
  const resp = await getFrutas()
  setdadosLuta(resp);
},[]);



    return(
    <View style={estilo.container}>

      <Text style={estilo.titulo}>Agenda Champions</Text>

      <FlatList
      
      data={datalancamento}
      keyExtractor={datalancamento => datalancamento.id}
      renderItem={({item})=>
      
      <TouchableOpacity>
      <View style={estilo.grupoAnime}>

     
          <Text style={estilo.textoBotaoNome}>{item.nome}</Text>
          <Text style={estilo.textoBotaoEp}>{item.data}</Text>

          </View>
        </TouchableOpacity>

      
    }
      
      />

      <StatusBar style="auto" />
    </View>
    );
}



const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
     
    },

    titulo:{
      fontSize:50,
      color:'#FED570',
      textAlign: 'center',
      justifyContent: 'center',
      marginVertical:20

    },
    

    grupoAnime:{
      backgroundColor:'#E02121',
      margin:15,
      padding:5,
      borderRadius:10,
      alignItems:'center',
      justifyContent: 'center',
    },

    textoBotaoNome:{
      fontSize:25,
      color:'#FED570',
      marginBottom: 20
     },
 
     textoBotaoEp:{
      fontSize:20,
     },
    
  });   
