import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'

import Carousel from 'react-native-snap-carousel';

 

export default function CarouselHome({imagenes, height, width}) {
    const renderItem =({ item })=>{

        return (
            <View style={styles.contenedorCarousel}>
            <Image 
                style={{width,height}}
                placeholderContent={<ActivityIndicator color='#FFF' /> }
                source={{ uri : item.imagen}}
                />
            <Text style={styles.texto}>{item.nombre}</Text>
            </View>
        )

    }
    return (
        <Carousel 
            layout={'default'} 
            
            data={imagenes}
            sliderWidth={width}
            itemWidth={width}
            itemHeight={height}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    contenedorCarousel:{
        backgroundColor:'#ffaf34',
        
    },
    texto: {
        textAlign:'center',
        color: '#414141',
        fontWeight:'bold'
    }
})

