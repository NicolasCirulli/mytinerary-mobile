import React,{useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useDispatch, useSelector } from 'react-redux';

import Home from '../Screens/Home'
import Cities from '../Screens/Cities'
import SignUp from '../Screens/SignUp'
import SignIn from '../Screens/SignIn'
import LogOut from '../Screens/LogOut'

import StackNavigator from './Stack'



import usuarioActions from '../redux/actions/usuarioActions';
// Instanciamos createDrawerNavigator para obtener todos sus Metodos y Componentes
const Drawer = createDrawerNavigator();


// DrawerNavigator es el navigator que vamos a exportar y va a ser el encargado 
// de mostrar las distintas vistas mediante eventos de navegación y las distintas pantallas
// declaradas en el mismo, tambien es totalmente modificable su estilo y su forma de interaccion.-
const DrawerNavigator = ()=>{

     const dispatch = useDispatch()
     const usuario = useSelector(state => state.usuariosReducer.usuario)
    console.log(usuario)
     useEffect(() => {
         dispatch(usuarioActions.obtenerTodosLosUsuarios())
     }, [])

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Cities" component={StackNavigator} />
            {!usuario && <Drawer.Screen name="SignUp" component={SignUp} />}
            {!usuario && <Drawer.Screen name="SignIn" component={SignIn} />}
            {usuario && <Drawer.Screen name="Log out" component={LogOut} />}
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;