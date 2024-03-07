import { StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/index'

export const classes = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    marginBottom: 20
  },
  contenido: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contenedorImagen: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  imagen: {
    width: 80,
    height: 80,
    marginRight: 20
  },
  contenedorTexto: {
    flex: 1
  },
  categoria: {
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 5
  },
  nombre: {
    fontSize: 22,
    color: '#64748B',
    marginBottom: 5
  },
  fecha: {
    fontWeight: '700',
    color: '#DB2777'
  },
  cantidad: {
    fontSize: 20,
    fontWeight: '700'
  }
})