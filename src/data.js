// Todo lo editable de la tarjeta vive aqui.
const b = import.meta.env.BASE_URL

export const negocio = {
  nombre: 'LIZMAN',
  lema: 'Desechables y más',
  intro: 'Desechables, limpieza, semillas y alimento para mascotas, en la Ampliación Universitaria.',
  whatsapp: '526141637686', // +52 614 163 7686 (unico numero por ahora)
  facebook: 'https://www.facebook.com/share/1F6B1qC6Sj/',
  calle: 'Calle Jorge M. Cárdenas',
  colonia: 'Col. Ampliación Universitaria, C.P. 31416',
  ciudad: 'Chihuahua, Chih.',
  cp: '31416',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Calle+Jorge+M.+Cardenas+Ampliacion+Universitaria+31416+Chihuahua',
  // POR CONFIRMAR: mayoreo y entregas a domicilio
  compra: ['Menudeo y mayoreo.', 'Pagas con tarjeta o en dólares.'],
}

// color = color de la tapa, giro = rotacion, nota = etiqueta amarilla (opcional)
export const tapas = [
  { nombre: 'Mascotas', color: 'var(--rosa)', giro: '-8deg', nota: 'a granel' },
  { nombre: 'Desechables', color: 'var(--naranja)', giro: '6deg', nota: 'mayoreo' },
  { nombre: 'Limpieza', color: 'var(--cian)', giro: '-4deg' },
  { nombre: 'Semillas', color: 'var(--lima)', giro: '9deg', nota: 'a granel' },
]

// desde/hasta en minutos del dia (9:00 = 540, 19:30 = 1170). Sin desde/hasta = "por confirmar".
// Cuando te confirmen sabado y domingo: agrega texto, desde y hasta.
export const horario = [
  { etiqueta: 'Lunes a viernes', dias: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], texto: '9:00 am a 7:30 pm', desde: 540, hasta: 1170 },
  { etiqueta: 'Sábado', dias: ['Sat'], texto: 'Por confirmar' },
  { etiqueta: 'Domingo', dias: ['Sun'], texto: 'Por confirmar' },
]

export const fotos = [
  { src: `${b}fotos/fachada.jpg`, alt: 'Fachada de LIZMAN con el letrero y carteles de alimento para mascotas' },
  { src: `${b}fotos/tapas.jpg`, alt: 'Botes de alimento a granel con tapas de colores y precios por kilo' },
  { src: `${b}fotos/granel.jpg`, alt: 'Botes de semillas y alimento para animales, junto a las especias' },
  { src: `${b}fotos/mostrador.jpg`, alt: 'Mostrador rosa con cubiertos desechables y productos para mascotas' },
  { src: `${b}fotos/pasillo.jpg`, alt: 'Pasillo con anaqueles de desechables y bolsas' },
  { src: `${b}fotos/escobas.jpg`, alt: 'Escobas de colores, botanas y alimento a granel' },
]
