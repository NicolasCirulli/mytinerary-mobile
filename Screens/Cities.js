import React,{useState,useEffect,useRef} from 'react';
import { ScrollView,View, Text, StyleSheet, TextInput,ImageBackground } from 'react-native'
import {Input} from 'react-native-elements'
import CardCities from '../Components/CardCities';
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'
const Cities = () => {

    
    const dispatch = useDispatch()
    const ciudadesStore = useSelector(state => state.citiesReducer.ciudadesFiltradas)
    const filtro = useRef()
    
    const [ciudades,setCiudades] = useState(ciudadesStore)

    useEffect(()=>{
        dispatch(citiesActions.obtenerTodas())
    },[])
    
    useEffect(() => {
        setCiudades(ciudadesStore)
    }, [ciudadesStore])

    const handleText = (e)=>{
        dispatch(citiesActions.filtrarCiudades(e.nativeEvent.text, 'City'))
        
    }
    const fondo = {
        uri: "https://mytinerary-cirulli.herokuapp.com/static/media/headerCities.95fe6132.jpg",
      };
    return (
        <ScrollView style={styles.cities}>
            <View style={styles.flex}>
            <ImageBackground
                source={fondo}
                resizeMode="cover"
                style={{ flex: 1, justifyContent: "center" }}
            >
            <Text style={styles.texto}>Unleash the traveler inside you</Text>
            </ImageBackground>
            </View>
            <Input
                placeholder='FILTER BY CITY'
                style={{color: '#ffaf34', marginTop:20}}
                onChange={handleText}
                ref={filtro}
            />
            {
             ciudades.map( ciudad => {
                 return <CardCities datos={ciudad} key={ciudad._id}/>
             })   
            }   
        </ScrollView>
    )
}

export default Cities

const styles = StyleSheet.create({
    cities: {
        backgroundColor: '#414141'
    },  
    header: {
        height: '40vh',
        width: '100vw',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color:'#ffaf34',
        fontSize: 25.6,
        textAlign: 'center',
        fontWeight:'bold'
    },
    contenedorInput:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px'

    },
    input:{
        width : '60vw',
        height: '40px',
        color: '#fff'
    },
    flex: {
        display: "flex",
        flexDirection: "column",
        height: 400,
        marginTop: 25,
      },
    
})