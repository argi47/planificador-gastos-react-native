export const formatearCantidad = (cantidad: number) => {
  return Number(cantidad).toLocaleString('es-ES',
    {
      style: 'currency',
      currency: 'EUR'
    })
}

export const formatearFecha = (fecha: any) => {
  const fechaNueva = new Date(fecha)
  const opciones: any = {
    year: 'numeric',
    // month: 'short',
    month: 'long',
    // year: '2-digit',
    // month: '2-digit',
    day: '2-digit'
  }

  return fechaNueva.toLocaleDateString('es-ES', opciones)
}

export const generarId = () => {
  const random = Math.random().toString(36).substring(2, 11)  // 36 = máximo de carácteres diferentes (2 = 0 i 1). El substring es para quitar el 0. del inicio de la cadena
  const fecha = Date.now().toString(36)

  return random + fecha
}