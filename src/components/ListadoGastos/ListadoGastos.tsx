import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { classes } from './ListadoGastos'
import Gasto from '../Gasto/Gasto.tsx'

const ListadoGastos = (props: any) => {
  const { gastos, setModal, setGasto, filtro, gastosFiltrados } = props

  return (
    <View style={classes.contenedor}>
      <Text style={classes.titulo}>Gastos</Text>

      {filtro ? gastosFiltrados.map((gasto: any) => (
        <Gasto
          key={gasto.id}
          gasto={gasto}
          setModal={setModal}
          setGasto={setGasto}
        />
      ))
        : gastos.map((gasto: any) => (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            setModal={setModal}
            setGasto={setGasto}
          />
        ))
      }

      {(gastos.length === 0 || (gastosFiltrados.length === 0 && !!filtro)) &&
        <Text style={classes.noGastos}>No hay gastos</Text>
      }
    </View>
  )
}

export default ListadoGastos