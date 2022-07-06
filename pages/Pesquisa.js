import { StatusBar } from 'expo-status-bar';
import {Text,View,StyleSheet,FlatList,TouchableOpacity, Alert} from 'react-native';
import { useState , useEffect} from 'react';
import apia from '../pages/Apia';


export default function Frutas(){
  const [datalancamento,setdadosLuta] = useState([]);
  
  async function getFrutas(){
    try
    {
      const resultado = await apia.get(`/feed`);
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

      <Text style={estilo.titulo}>Feed de Notícias</Text>

      <FlatList
      
      data={datalancamento}
      keyExtractor={datalancamento => datalancamento.id}
      renderItem={({item})=>
      
      <TouchableOpacity>
      <View style={estilo.grupoAnime}>

     
          <Text style={estilo.textoBotaoNome}>{item.noticia}</Text>
          <Text style={estilo.textoBotaoEp}>{item.descricao}</Text>

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
    backgroundColor: '#170101',
   
  },

  titulo:{
    fontSize:50,
    color:'#FCF670',
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
    fontSize:40,
    marginBottom:20,
    color:"#FCF670"

    
   },

   textoBotaoEp:{
    fontSize:20,
   },
  
  });