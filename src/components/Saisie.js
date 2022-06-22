import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Saisie = () => {
  return (
    <View>
      <TextInput style={{height: 40,borderColor: 'gray', borderWidth: 1}}></TextInput>
      <TouchableOpacity style={{backgroundColor:'red'}}><Text>Bouton</Text></TouchableOpacity>
    </View>
  )
}

export default Saisie