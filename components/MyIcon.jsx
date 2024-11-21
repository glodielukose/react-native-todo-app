import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

const MyIcon = ({name, color='#000', size=30}) => {
  return (
    <Icon name={name} size={size} color={color}/>
  )
}

export default MyIcon