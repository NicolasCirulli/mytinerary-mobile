import React,{useState,useEffect,useRef} from 'react';
import { ScrollView,View, Text, StyleSheet, TextInput } from 'react-native'
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
        dispatch(citiesActions.filtrarCiudades(e.target.value, 'City'))
    }
    
    return (
        <ScrollView style={citiesSTyles.Cities}>

            <View style={citiesSTyles.header}>
                <Text style={citiesSTyles.texto}>Unleash the traveler inside you</Text>
            </View>
            <View style={citiesSTyles.contenedorInput}>

                <TextInput
                    style={citiesSTyles.input}
                    placeholder="Filter by city"
                    onChange={handleText}
                    placeholderTextColor={'#ffaf34'}
                />
            </View>
            <View>

            {
             ciudades.map( ciudad => {
                 return <CardCities datos={ciudad} key={ciudad._id}/>
             })   
            }   
            </View>
        </ScrollView>
    )
}

export default Cities

const citiesSTyles = StyleSheet.create({
    Cities: {
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
    
})