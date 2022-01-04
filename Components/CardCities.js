import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {Card, Button, Icon} from 'react-native-elements'

const CardCities = ({datos}) => {
    return (
        <>
        
        
        <Card containerStyle={styles.CardCities}>
            <Card.Title>{datos.ciudad}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:datos.imagen,
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              {datos.descripcion}
            </Text>
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: 'black',
                
              }}
              title="VIEW MORE"
            />
          </Card>

        
        </>
    )
}

export default CardCities

const styles = StyleSheet.create({
    CardCities: {
        backgroundColor:'#ffaf34'
    }
})

  
