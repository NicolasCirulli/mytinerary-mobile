import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import usuarioActions from "../redux/actions/usuarioActions";
import CardCity from '../Components/CardCity';

const City = ({ route, navigation }) => {
  const widthScreen = Dimensions.get("window").width;
  const heightScreen = Dimensions.get("window").height;

  const dispatch = useDispatch();
  const datos = Object.values(route);
  

  useEffect(() => {
    dispatch(citiesActions.obtenerUnaCiudad(datos[3]));
    dispatch(itinerariesActions.obtenerItinerariosPorCiudad(datos[3]))
    dispatch(usuarioActions.obtenerTodosLosUsuarios())
  }, []);

  const styles = StyleSheet.create({
    flex: {
      display: "flex",
      flexDirection: "column",
      height: 400,
      width: widthScreen,
      marginTop: 25,
    },
    titulo: {
      color: "#ffaf34",
      textAlign: "center",
      fontSize: 60,
      fontWeight: "bold",
      alignSelf: "center",
    },
  });

  const ciudad = useSelector((state) => state.citiesReducer.ciudad);
  const itinerarios = useSelector((state) => state.itinerariesReducer.itinerariosCiudad);
  const usuarios = useSelector(state => state.usuariosReducer.usuarios)

  return (
    ciudad && itinerarios && usuarios && (
      <ScrollView>
        <View style={styles.flex}>
          <ImageBackground
            style={{ width: widthScreen, flex: 1, justifyContent: "center" }}
            source={{ uri: `${ciudad.imagen}` }}
            resizeMode="cover"
          >
            <Text style={styles.titulo}>{ciudad.ciudad}</Text>
          </ImageBackground>
        </View>
       {itinerarios.map(itinerario => <CardCity data={itinerario} usuarios={usuarios} />)} 
      </ScrollView>
    )
  );
};

export default City;
