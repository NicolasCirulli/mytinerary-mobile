import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Input , Button} from "react-native-elements";
import SelectDropdown from "react-native-select-dropdown";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import usuarioActions from "../redux/actions/usuarioActions";
const SignUp = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [booleano, setBooleano] = useState(true)

  const widthScreen = Dimensions.get("window").width;
  const heightScreen = Dimensions.get("window").height;

  const dispatch = useDispatch();

  const { values, isSubmitting, setFieldValue } = useFormik({
    initialValues: {
      firtsName: "",
      lastName: "",
      email: "",
      password: "",
      urlPhoto: "",
    },
    onSubmit: (values) => {
      console.log();
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
  useEffect(async () => {
    try {
      const res = await axios.get(
        "https://restcountries.com/v2/all?fields=name"
      );
      const aux = [];
      res.data.map((country) => {
        aux.push(country.name);
      });
      setCountries(aux);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
      const valores = Object.values(values)
      !valores.some(value => value === '') && country
      && setBooleano(false)
  }, [values, country])

  return (
    <View style={styles.contenedor}>
      <Input
        placeholder="Firts Name"
        value={values.firtsName}
        onChangeText={(text) => setFieldValue("firtsName", text)}
      />
      <Input
        placeholder="Last Name"
        value={values.lastName}
        onChangeText={(text) => setFieldValue("lastName", text)}
      />
      <Input
        placeholder="Email"
        value={values.email}
        onChangeText={(text) => setFieldValue("email", text)}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        value={values.password}
        onChangeText={(text) => setFieldValue("password", text)}
      />
      <Input
        placeholder="Url Photo"
        value={values.urlPhoto}
        onChangeText={(text) => setFieldValue("urlPhoto", text)}
      />

      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          setCountry(selectedItem)
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
      />
    </View>
  );
};

export default SignUp;
