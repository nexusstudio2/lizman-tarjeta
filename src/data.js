// Todo lo editable de la tarjeta vive aqui.
const b = import.meta.env.BASE_URL

export const negocio = {
  nombre: 'LIZMAN',
  lema: 'Desechables y más',
  intro: 'Desechables, limpieza, semillas y alimento para mascotas en la Ampliación Universitaria.',
  claves: ['Mayoreo y menudeo', 'Alimento y semillas a granel, por kilo'], // mayoreo: POR CONFIRMAR
  whatsapp: '526141637686', // +52 614 163 7686 (unico numero por ahora)
  telefono: '614 163 7686',
  facebook: 'https://www.facebook.com/share/1F6B1qC6Sj/',
  calle: 'Calle Jorge M. Cárdenas',
  colonia: 'Col. Ampliación Universitaria, C.P. 31416',
  ciudad: 'Chihuahua, Chih.',
  cp: '31416',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Calle+Jorge+M.+Cardenas+Ampliacion+Universitaria+31416+Chihuahua',
  pagos: 'Aceptamos tarjeta y dólares.',
  // POR CONFIRMAR: entregas a domicilio
}

export const categorias = [
  { nombre: 'Desechables', color: '#e9a867', nota: 'mayoreo', texto: 'Platos, vasos, cubiertos, charolas de aluminio, contenedores, bolsas y servilletas.' },
  { nombre: 'Limpieza', color: '#7fc4d6', texto: 'Escobas, cubetas, limpiadores, esponjas, atomizadores y papel higiénico.' },
  { nombre: 'Alimento para mascotas', color: '#d98ba3', nota: 'a granel', texto: 'Croquetas para perro y gato por kilo, además de collares, cadenas y arneses.' },
  { nombre: 'Semillas y granos', color: '#b9cf72', nota: 'a granel', texto: 'Maíz, alpiste y alimento para gallinas, pollos y conejos.' },
  { nombre: 'Especias y botanas', color: '#a99ad6', texto: 'Especias, chiles secos y botanas por bolsa.' },
]

// desde/hasta en minutos del dia (9:00 = 540, 19:30 = 1170). Sin desde/hasta = "por confirmar".
// Cuando te confirmen sabado y domingo: agrega texto, desde y hasta.
export const horario = [
  { etiqueta: 'Lunes a viernes', dias: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], texto: '9:00 am a 7:30 pm', desde: 540, hasta: 1170 },
  { etiqueta: 'Sábado', dias: ['Sat'], texto: 'Por confirmar' },
  { etiqueta: 'Domingo', dias: ['Sun'], texto: 'Por confirmar' },
]

export const fotos = {
  fachada: { src: `${b}fotos/fachada.jpg`, alt: 'Fachada de LIZMAN con el letrero y carteles de alimento para mascotas' },
  granel: { src: `${b}fotos/tapas.jpg`, alt: 'Botes de alimento a granel con tapas de colores y precios por kilo' },
  galeria: [
    { src: `${b}fotos/mostrador.jpg`, alt: 'Mostrador rosa con cubiertos desechables y productos para mascotas' },
    { src: `${b}fotos/pasillo.jpg`, alt: 'Pasillo con anaqueles de desechables y bolsas' },
    { src: `${b}fotos/escobas.jpg`, alt: 'Escobas de colores, botanas y alimento a granel' },
    { src: `${b}fotos/granel.jpg`, alt: 'Botes de semillas y alimento para animales, junto a las especias' },
  ],
}
