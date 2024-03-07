import { StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/index'

export const classes = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#3B82F6'
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 30
  },
  boton: {
    marginTop: 30,
    backgroundColor: '#1048A4',
    padding: 10,
    borderRadius: 10
  },
  botonTexto: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})