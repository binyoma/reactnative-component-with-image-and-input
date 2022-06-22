import { View, Text, Image } from 'react-native'
import React from 'react'

const Picture = () => {
  return (
    <View style={{flex:1}}>
        <View style={{flex:4}}>
            <Image style={{flex:1,height:'100%', width:'100%'}} source={require('../data/rover.jpg')}></Image>
        </View>
        <View style={{flex:1}}><Text>Image description</Text></View>
    </View>
  )
}

export default Picture