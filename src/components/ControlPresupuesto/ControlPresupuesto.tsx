import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Pressable
} from 'react-native'
import { classes } from './ControlPresupuesto'
import { formatearCantidad } from '../../helpers/index'
import CircularProgress from 'react-native-circular-progress-indicator'

const ControlPresupuesto = (props: any) => {
  const { presupuesto, gastos, resetearApp } = props

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total: any, gasto: any) => Number(gasto.cantidad) + total, 0)

    const totalDisponible = presupuesto - totalGastado

    const nuevoPorcentaje = ((presupuesto - totalDisponible) / presupuesto) * 100

    //  Delay de 1 segundo al setear el porcentaje e iniciar la animación de la rueda %
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1000)
    setGastado(totalGastado)
    setDisponible(totalDisponible)
  }, [gastos])

  return (
    <View style={classes.contenedor}>
      <View style={classes.centrarGrafica}>
        <CircularProgress
          value={porcentaje}
          duration={1000}
          radius={150}
          valueSuffix={'%'}
          title='Gastado'
          inActiveStrokeColor='#F5F5F5'
          inActiveStrokeWidth={20}
          activeStrokeColor='#3B82F6'
          activeStrokeWidth={20}
          titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
          titleColor='#64748B'
        />
      </View>

      <View style={classes.contenedorTexto}>
        <Pressable
          style={classes.boton}
          onPress={resetearApp}
        >
          <Text style={classes.textoBoton}>Reiniciar App</Text>
        </Pressable>

        <Text style={classes.valor}>
          <Text style={classes.label}>Presupuesto: {''}</Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={classes.valor}>
          <Text style={classes.label}>Disponible: {''}</Text>
          {formatearCantidad(disponible)}
        </Text>

        <Text style={classes.valor}>
          <Text style={classes.label}>Gastado: {''}</Text>
          {formatearCantidad(gastado)}
        </Text>
      </View>
    </View>
  )
}

export default ControlPresupuesto