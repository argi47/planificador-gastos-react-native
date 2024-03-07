import { StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/index'

export const classes = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor
  },
  centrarGrafica: {
    alignItems: 'center'
  },
  boton: {
    backgroundColor: '#DB2777',
    padding: 10,
    marginBottom: 40,
    borderRadius: 5
  },
  textoBoton: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  contenedorTexto: {
    marginTop: 50
  },
  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10
  },
  label: {
    fontWeight: '700',
    color: '#3B82F6'
  }
})