import React, { useState, useEffect } from "react";
import axios from 'axios'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
const CardCity = ({ data, usuarios }) => {
  const widthScreen = Dimensions.get("window").width;
  const heightScreen = Dimensions.get("window").height;
  const dispatch = useDispatch();

  const guia = usuarios.filter((e) => e.id === data.idGuia);

  const foto = guia[0].fotoPerfil;

  const styles = StyleSheet.create({
    flex: {
      display: "flex",
      flexDirection: "column",
      height: heightScreen / 1.5,
      width: widthScreen,
      marginTop: 100,
      backgroundColor: "#b8c4d6",
      alignItems: "center",
      borderRadius: 10,
    },
    titulo: {
      color: "black",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
      alignSelf: "center",
    },
    nombre: {
      fontSize: 40,
      fontWeight: "bold",
    },
    textos: {
      fontWeight: "bold",
      fontSize: 18,
      marginTop: 15,
    },
    activities: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 15,
        textAlign:'center'
      },
  });

  const [actividades, setActividades] = useState([])

  useEffect(async() => {
      try{
          const res = await dispatch(itinerariesActions.obtenerActividadesItinerario(data._id))
          setActividades(res.data.response)
        }catch(err){console.log(err)}
        }, [])


    const Activity = ({activity}) =>{
        return(
            <View style={{width: widthScreen, marginLeft:10}}>
                <Text style={styles.activities}>{activity.titulo}</Text>
                <Image
                source={{ uri: `${activity.imagen}` }}
                style={{ height: 250, width: widthScreen - 20, borderRadius: 5 }}
                />
            </View>
        )
    }

    const Comentarios = ({comentarios}) => {
        return (
            <ScrollView
            style={{
                width:widthScreen,
                backgroundColor: "#b8c4d6"
            }}
            >
            <View style={{
                display:'flex',
                flexDirection: 'row',
                alignItems : 'center',
                justifyContent:'flex-start',
                
                // width : widthScreen 
            }}>
            <Image
                source={{ uri: `${data.imagen}` }}
                style={{ flex: 1, width: widthScreen / 6, borderRadius: 5}}
              />
                <Text>Nicolas Cirulli</Text>
                <Text style={{flex:2}}> Este es un comentario de prueba</Text>
            </View>
            </ScrollView>
        )
    }


  return (
    <ScrollView >
      <View style={styles.flex}>
        <Text style={styles.titulo}>{data.titulo}</Text>
        <Image
          source={{ uri: `${data.imagen}` }}
          style={{ flex: 1, width: widthScreen, borderRadius: 10 }}
        />
      </View>
      <View style={styles.flex}>
        <Image
          source={{ uri: `${foto}` }}
          style={{ height: 150, width: widthScreen / 2.5, borderRadius: 70 }}
        />
        <Text style={styles.nombre}>{data.guia}</Text>
        <Text style={styles.textos}>Price: {"💵".repeat(data.precio)} </Text>
        <Text style={styles.textos}>Duration: {data.duracion} ⏳</Text>
        <Text style={styles.textos}>#{data.hashtags[0]} </Text>
        <Text style={styles.textos}>#{data.hashtags[1]} </Text>
        <Text style={styles.textos}>#{data.hashtags[2]} </Text>
      </View>

      <View style={{backgroundColor:'#b8c4d6'}}>
      {actividades.map(e =>{
          return <Activity activity={e} />
        })}
    </View>
   
    </ScrollView>
  );
};

export default CardCity;
