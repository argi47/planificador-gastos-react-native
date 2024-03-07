import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Alert,
  Pressable,
  Image,
  Modal
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from './src/components/Header/Header.tsx'
import NuevoPresupuesto from './src/components/NuevoPresupuesto/NuevoPresupuesto.tsx'
import ControlPresupuesto from './src/components/ControlPresupuesto/ControlPresupuesto.tsx'
import FormularioGasto from './src/components/FormularioGasto/FormularioGasto.tsx'
import ListadoGastos from './src/components/ListadoGastos/ListadoGastos.tsx'
import Filtro from './src/components/Filtro/Filtro.tsx'
import Loader from './src/components/Loader/Loader.tsx'
import { generarId } from './src/helpers/index.ts'

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState<any>([])
  const [modal, setModal] = useState(false)
  const [gasto, setGasto] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState<any>([])
  const [isLoadingPresupuesto, setIsLoadingPresupuesto] = useState(false)
  const [isLoadingGastos, setIsLoadingGastos] = useState(false)

  const handleNuevoPresupuesto = (presupuesto: number) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    }
    else {
      Alert.alert('Error', 'El Presupuesto no puede ser 0 o menor', [{ text: 'Ok' }])
    }
  }

  const handleGasto = (gasto: any) => {
    if ([gasto.nombre, gasto.categoria, gasto.cantidad].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
      )

      return
    }

    if (gasto.id) {
      const gastosActualizados = gastos.map((item: any) => item.id === gasto.id ? gasto : item)
      setGastos(gastosActualizados)
    }
    else {
      // Añadir el nuevo gasto al state
      gasto.id = generarId()
      gasto.fecha = Date.now()

      setGastos([...gastos, gasto])
    }

    setModal(!modal)
  }

  const eliminarGasto = (id: any) => {
    Alert.alert(
      '¿Deseas eliminar este gasto?',
      'Un gasto eliminado no se puede recuperar',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Si, Eliminar', onPress: () => {

            const gastosActualizados = gastos.filter((item: any) => item.id !== id)

            setGastos(gastosActualizados)
            setModal(!modal)
            setGasto({})
            setFiltro('')
          }
        }
      ]
    )
  }

  const resetearApp = () => {
    Alert.alert(
      'Deseas resetear la app?',
      'Esto eliminará el presupuesto y los gastos',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Sí, Eliminar', onPress: async () => {
            try {
              await AsyncStorage.clear()

              setIsValidPresupuesto(false)
              setPresupuesto(0)
              setGastos([])
            }
            catch (error) {
              console.log(error)
            }
          }
        }
      ]
    )
  }

  //  Recuperar datos almacenados de Presupuesto
  useEffect(() => {
    const obtenerPresupuestoStorage = async () => {
      setIsLoadingPresupuesto(true)
      try {
        const presupuestoStorage = await AsyncStorage.getItem('planificador_presupuesto')
        const result = (typeof presupuestoStorage === 'string' && parseInt(presupuestoStorage)) ? parseInt(presupuestoStorage) : 0

        if (result > 0) {
          setPresupuesto(result)
          setIsValidPresupuesto(true)
        }
        setIsLoadingPresupuesto(false)
      }
      catch (error) {
        console.log(error)
        setIsLoadingPresupuesto(false)
      }
    }

    obtenerPresupuestoStorage()
  }, [])

  //  Almacenar datos de Presupuesto
  useEffect(() => {
    if (isValidPresupuesto) {
      const guardarPresupuestoStorage = async () => {
        try {
          await AsyncStorage.setItem('planificador_presupuesto', presupuesto.toString())
        }
        catch (error) {
          console.log(error)
        }
      }

      guardarPresupuestoStorage()
    }
  }, [isValidPresupuesto])

  //  Recuperar datos almacenados de Gastos
  useEffect(() => {
    const obtenerGastosStorage = async () => {
      setIsLoadingGastos(true)
      try {
        const gastosStorage = await AsyncStorage.getItem('planificador_gastos')

        setGastos(gastosStorage ? JSON.parse(gastosStorage) : [])
        setIsLoadingGastos(false)
      }
      catch (error) {
        console.log(error)
        setIsLoadingGastos(false)
      }
    }

    obtenerGastosStorage()
  }, [])

  //  Almacenar datos de Gastos
  useEffect(() => {
    const guardarGastosStorage = async () => {
      try {
        await AsyncStorage.setItem('planificador_gastos', JSON.stringify(gastos))
      }
      catch (error) {
        console.log(error)
      }
    }

    guardarGastosStorage()
  }, [gastos])

  return (
    <>
      {(isLoadingGastos || isLoadingPresupuesto) &&
        <Loader />
      }

      <View style={classes.contenedor}>
        <ScrollView>
          <View style={classes.header}>
            <Header />

            {isValidPresupuesto ?
              <ControlPresupuesto
                presupuesto={presupuesto}
                gastos={gastos}
                resetearApp={resetearApp}
              />
              :
              <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                handleNuevoPresupuesto={handleNuevoPresupuesto}
              />
            }
          </View>

          {isValidPresupuesto &&
            <>
              <Filtro
                filtro={filtro}
                setFiltro={setFiltro}
                gastos={gastos}
                setGastosFiltrados={setGastosFiltrados}
              />

              <ListadoGastos
                gastos={gastos}
                setModal={setModal}
                setGasto={setGasto}
                filtro={filtro}
                gastosFiltrados={gastosFiltrados}
              />
            </>
          }
        </ScrollView>

        {modal &&
          <Modal
            animationType='slide'
            visible={modal}
            onRequestClose={() => {
              setModal(!modal)
            }}
          >
            <FormularioGasto
              setModal={setModal}
              handleGasto={handleGasto}
              gasto={gasto}
              setGasto={setGasto}
              eliminarGasto={eliminarGasto}
            />
          </Modal>
        }

        {isValidPresupuesto &&
          <Pressable
            style={classes.pressable}
            onPress={() => {
              setModal(!modal)
              setFiltro('')
            }}
          >
            <Image
              style={classes.imagen}
              source={require('./src/img/nuevo-gasto.png')}
            />
          </Pressable>
        }
      </View>
    </>
  )
}

const classes = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1
  },
  header: {
    backgroundColor: '#3B82F6',
    minHeight: 400
  },
  pressable: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30
  },
  imagen: {
    width: 60,
    height: 60
  }
})

export default App
