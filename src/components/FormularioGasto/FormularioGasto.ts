import { StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/index'

export const classes = StyleSheet.create({
  contenedor: {
    backgroundColor: '#1E40AF',
    flex: 1
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
    flex: 1
  },
  btnCancelar: {
    backgroundColor: '#DB2777'
  },
  btnEliminar: {
    backgroundColor: 'red'
  },
  btnTexto: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFF'
  },
  formulario: {
    ...globalStyles.contenedor
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
    color: '#64748B'
  },
  campo: {
    marginVertical: 10
  },
  label: {
    color: '#64748B',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  submitBtn: {
    backgroundColor: '#3B82F6',
    padding: 10,
    marginTop: 20
  },
  submitBtnTexto: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})