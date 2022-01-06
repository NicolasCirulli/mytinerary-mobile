import React from 'react'
import {View,Dimensions} from 'react-native'
import {Button } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import usuarioActions from '../redux/actions/usuarioActions'

const LogOut = () => {
     const dispatch = useDispatch()
     const heightScreen = Dimensions.get("window").height;
     const widthScreen = Dimensions.get("window").width;
    return (
        <View style={{width:widthScreen}}>
            <Button
              onPress={()=> dispatch(usuarioActions.cerrarSesion())}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: widthScreen / 6,
                marginRight: widthScreen / 6,
                marginBottom: 0,
                marginTop: heightScreen / 2.5,
                backgroundColor: 'tomato',
                
              }}
              title="Log Out"
            />
        </View>
    )
}

export default LogOut
