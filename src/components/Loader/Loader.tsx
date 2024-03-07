import React from 'react'
import {
  View,
  ActivityIndicator
} from 'react-native'
import { classes } from './Loader'

const Loader = () => {
  return (
    <View style={classes.container}>
      <ActivityIndicator
        color='#3B82F6'
        size={100}
      />
    </View>
  )
}

export default Loader