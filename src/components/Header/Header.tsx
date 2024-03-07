import React from 'react'
import {
  Text,
  SafeAreaView
} from 'react-native'
import { classes } from './Header'

const Header = () => {
  return (
    <SafeAreaView>
      <Text style={classes.texto}>Planificador de gastos</Text>
    </SafeAreaView>
  )
}

export default Header