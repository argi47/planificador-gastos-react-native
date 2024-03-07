import React from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable
} from 'react-native'
import { classes } from './NuevoPresupuesto'

const NuevoPresupuesto = (props: any) => {
  const { presupuesto, setPresupuesto, handleNuevoPresupuesto } = props

  return (
    <View style={classes.contenedor}>
      <Text style={classes.label}>Definir Presupuesto</Text>

      <TextInput
        keyboardType='numeric'
        placeholder='Agrega tu presupuesto: Ej. 300'
        style={classes.input}
        value={presupuesto > 0 ? presupuesto.toString() : ''}
        onChangeText={(budget) => {
          if (Number(parseInt(budget)) || budget === '') {
            setPresupuesto(parseInt(budget))
          }
        }}
      />

      <Pressable
        style={classes.boton}
        onPress={() => handleNuevoPresupuesto(presupuesto)}
      >
        <Text style={classes.botonTexto}>Agregar Presupuesto</Text>
      </Pressable>
    </View>
  )
}

export default NuevoPresupuesto