import React from 'react'
import {
  Text,
  View,
  Image,
  Pressable
} from 'react-native'
import { classes } from './Gasto'
import { formatearCantidad, formatearFecha } from '../../helpers'

const diccionarioIconos: any = {
  ahorro: require('../../img/icono_ahorro.png'),
  comida: require('../../img/icono_comida.png'),
  casa: require('../../img/icono_casa.png'),
  gastos: require('../../img/icono_gastos.png'),
  ocio: require('../../img/icono_ocio.png'),
  salud: require('../../img/icono_salud.png'),
  suscripciones: require('../../img/icono_suscripciones.png')
}

const Gasto = (props: any) => {
  const { gasto, setModal, setGasto } = props

  const { nombre, categoria, cantidad, id, fecha } = gasto

  const handleAcciones = () => {
    setModal(true)
    setGasto(gasto)
  }

  return (
    <Pressable
      onPress={handleAcciones}
    >
      <View style={classes.contenedor}>
        <View style={classes.contenido}>
          <View style={classes.contenedorImagen}>
            <Image
              style={classes.imagen}
              source={diccionarioIconos[categoria]}
            />

            <View style={classes.contenedorTexto}>
              <Text style={classes.categoria}>{categoria}</Text>
              <Text style={classes.nombre}>{nombre}</Text>
              <Text style={classes.fecha}>{formatearFecha(fecha)}</Text>
            </View>
          </View>

          <Text style={classes.cantidad}>{formatearCantidad(cantidad)}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default Gasto