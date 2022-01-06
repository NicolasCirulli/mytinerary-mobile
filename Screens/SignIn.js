import React, { useEffect, useState } from "react";
import axios from "axios";


import {ScrollView ,View, StyleSheet, Dimensions } from "react-native";

import { Input , Button} from "react-native-elements";

import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";
import usuarioActions from "../redux/actions/usuarioActions";


const SignIn = () => {

  const [booleano, setBooleano] = useState(true)

  const widthScreen = Dimensions.get("window").width;
  const heightScreen = Dimensions.get("window").height;

  const dispatch = useDispatch();

  // const countries = ["Egypt", "Canada", "Australia", "Ireland", "Argentina", "Colombia", "Peru","United States", "Chile", "China", "Japan", "Pakistan", "Colombia", "Uruguay", "Cuba"]

  const { values, isSubmitting, setFieldValue } = useFormik({
    initialValues: {
      email: "",
      contraseña: "",
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
  
  useEffect(() => {
      const valores = Object.values(values)
      !valores.some(value => value === '')
      ? setBooleano(false)
      : setBooleano(true)
  }, [values])

  const loguear = async()=>{
    try{
      const res = await dispatch(usuarioActions.iniciarSesion(values))
     
      if(res.data.error){
          
          showMessage({
              message: res.data.response[0].message,
              type: "danger",
              floating : true,
              position : 'bottom'
            });
        }else{
          
        showMessage({
          message: 'Welcome ',
          type: "success",
          floating : true,
          position : 'bottom'
        });
      }
    }catch(err){console.log(err)}

   
  }

  return (
    <ScrollView >
      <View style={styles.contenedor}>

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
        onPress={()=>loguear()}
      />
      </View>
    </ScrollView>
  );
};

export default SignIn;