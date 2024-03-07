import React, { useEffect } from 'react'
import {
  Text,
  View
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { classes } from '../Filtro/Filtro.ts'

const Filtro = (props: any) => {
  const { filtro, setFiltro, gastos, setGastosFiltrados } = props

  useEffect(() => {
    if (filtro === '') {
      setGastosFiltrados([])
    }
    else {
      const gastosFiltrados = gastos.filter((item: any) => item.categoria === filtro)

      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro])

  return (
    <View style={classes.contenedor}>
      <Text style={classes.label}>Filtrar Gastos</Text>

      <Picker
        selectedValue={filtro}
        onValueChange={(valor) => {
          setFiltro(valor)
        }}
      >
        <Picker.Item label='-- Seleccione --' value='' />
        <Picker.Item label='Ahorro' value='ahorro' />
        <Picker.Item label='Comida' value='comida' />
        <Picker.Item label='Casa' value='casa' />
        <Picker.Item label='Gastos Varios' value='gastos' />
        <Picker.Item label='Ocio' value='ocio' />
        <Picker.Item label='Salud' value='salud' />
        <Picker.Item label='Suscripciones' value='suscripciones' />
      </Picker>
    </View>
  )
}

export default Filtro