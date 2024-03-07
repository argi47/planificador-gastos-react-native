import React, { useState, useEffect } from 'react'
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Pressable
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { classes } from './FormularioGasto'

const FormularioGasto = (props: any) => {
  const {
    setModal,
    handleGasto,
    gasto,
    setGasto,
    eliminarGasto
  } = props

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [id, setId] = useState(0)
  const [fecha, setFecha] = useState('')

  useEffect(() => {
    if (gasto?.nombre) {
      setNombre(gasto.nombre)
      setCantidad(gasto.cantidad)
      setCategoria(gasto.categoria)
      setId(gasto.id)
      setFecha(gasto.fecha)
    }
  }, [gasto])

  return (
    <SafeAreaView style={classes.contenedor}>
      <View style={classes.contenedorBotones}>
        <Pressable
          style={[classes.btn, classes.btnCancelar]}
          onPress={() => {
            setModal(false)
            setGasto({})
          }}
        >
          <Text style={classes.btnTexto}>Cancelar</Text>
        </Pressable>

        {!!id &&
          <Pressable
            style={[classes.btn, classes.btnEliminar]}
            onPress={() => eliminarGasto(id)}
          >
            <Text style={classes.btnTexto}>Eliminar</Text>
          </Pressable>
        }
      </View>

      <View style={classes.formulario}>
        <Text style={classes.titulo}>
          {gasto?.nombre ?
            'Editar gasto'
            :
            'Nuevo gasto'
          }
        </Text>

        <View style={classes.campo}>
          <Text style={classes.label}>Nombre Gasto</Text>

          <TextInput
            style={classes.input}
            placeholder='Nombre del gasto: Ej. Comida'
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={classes.campo}>
          <Text style={classes.label}>Cantidad Gasto</Text>

          <TextInput
            style={classes.input}
            placeholder='Cantidad del gasto: Ej. 300'
            keyboardType='numeric'
            value={cantidad}
            onChangeText={setCantidad}
          />
        </View>

        <View style={classes.campo}>
          <Text style={classes.label}>Categoría Gasto</Text>

          <Picker
            selectedValue={categoria}
            onValueChange={(item) => { setCategoria(item) }}
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

        <Pressable
          style={classes.submitBtn}
          onPress={() => handleGasto({ nombre, cantidad, categoria, id, fecha })}
        >
          <Text style={classes.submitBtnTexto}>
            {gasto?.nombre ?
              'Guardar Cambios Gasto'
              :
              'Nuevo Gasto'
            }
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default FormularioGasto