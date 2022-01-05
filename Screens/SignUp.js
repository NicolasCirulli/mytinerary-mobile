import React, { useEffect, useState } from "react";
import {ScrollView ,View, StyleSheet, Dimensions } from "react-native";
import { Input , Button} from "react-native-elements";
import SelectDropdown from "react-native-select-dropdown";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";
import usuarioActions from "../redux/actions/usuarioActions";
const SignUp = () => {
  // const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [booleano, setBooleano] = useState(true)

  const widthScreen = Dimensions.get("window").width;
  const heightScreen = Dimensions.get("window").height;

  const dispatch = useDispatch();


  const countries = ["Egypt", "Canada", "Australia", "Ireland", "Argentina", "Colombia", "Peru","United States", "Chile", "China", "Japan", "Pakistan", "Colombia", "Uruguay", "Cuba"]


  const { values, isSubmitting, setFieldValue } = useFormik({
    initialValues: {
      primerNombre: "",
      apellido: "",
      email: "",
      contraseña: "",
      fotoPerfil: "",
      pais:''
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const styles = StyleSheet.create({
    contenedor: {
      backgroundColor: "#414141",
      width: widthScreen,
      height: heightScreen,
      display: "flex",
      justifyContent: "center",
    },
  });
  // useEffect(async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://restcountries.com/v2/all?fields=name"
  //     );
  //     const aux = [];
  //     res.data.map((country) => {
  //       aux.push(country.name);
  //     });
  //     setCountries(aux);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  useEffect(() => {
      const valores = Object.values(values)
      console.log(valores)
      !valores.some(value => value === '')
      ? setBooleano(false)
      : setBooleano(true)
  }, [values])

  const probando = async()=>{
   
    // try{

    //   const res = await dispatch(usuarioActions.nuevoUsuario(values))
    //   console.log(res)
    // }catch(err){console.log(err)}
    showMessage({
      message: "as",
      type: "danger",
      floating : true,
      position : 'bottom'
    });
  }


  return (
    <ScrollView >
      <View style={styles.contenedor}>

      
      <Input
        label="Firts Name"
        value={values.firtsName}
        onChangeText={(text) => setFieldValue("primerNombre", text)}
        inputStyle={{
          color:'#FFF'
        }}
      />
      <Input
        label="Last Name"
        value={values.lastName}
        onChangeText={(text) => setFieldValue("apellido", text)}
        inputStyle={{
          color:'#FFF'
        }}
      />
      <Input
        // placeholder="Email"
        value={values.email}
        onChangeText={(text) => setFieldValue("email", text)}
        inputStyle={{
          color:'#FFF'
        }}
        label='email'
      />
      <Input
        label="Password"
        secureTextEntry={true}
        value={values.password}
        onChangeText={(text) => setFieldValue("contraseña", text)}
        inputStyle={{
          color:'#FFF'
        }}
      />
      <Input
        label="Url Photo"
        value={values.urlPhoto}
        onChangeText={(text) => setFieldValue("fotoPerfil", text)}
        inputStyle={{
          color:'#FFF'
        }}
      />

      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          setFieldValue('pais',selectedItem)
        }}
        defaultButtonText="Country"
        buttonStyle={{ marginHorizontal: widthScreen / 4 , height: 30}}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem}
        rowTextForSelection={(item, index) => item}
      />

      <Button
        title="SIGN UP"
        disabled={booleano}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{
          backgroundColor: "rgba(92, 99,216, 1)",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5,
        }}
        containerStyle={{
          width: widthScreen / 1.5,
          height: 55,
          marginHorizontal: widthScreen / 6,
          marginVertical: 30,
        }}
        onPress={()=>probando()}
      />
      </View>
    </ScrollView>
  );
};

export default SignUp;
