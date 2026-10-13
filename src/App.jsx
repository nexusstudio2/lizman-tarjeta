import { useEffect, useState } from 'react'
import { negocio, tapas, horario, fotos } from './data'

function calcularEstado() {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chihuahua',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (t) => partes.find((p) => p.type === t).value
  const minutos = Number(get('hour')) * 60 + Number(get('minute'))
  const hoy = horario.find((h) => h.dias.includes(get('weekday')))
  if (!hoy || hoy.desde === undefined) return null
  return minutos >= hoy.desde && minutos < hoy.hasta
}

function guardarContacto() {
  const vcf = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${negocio.nombre}`,
    `ORG:${negocio.nombre}`,
    `TEL;TYPE=WORK,VOICE:+${negocio.whatsapp}`,
    `ADR;TYPE=WORK:;;${negocio.calle};Chihuahua;Chihuahua;${negocio.cp};México`,
    `URL:${negocio.facebook}`,
    'END:VCARD',
  ].join('\r\n')
  const url = URL.createObjectURL(new Blob([vcf], { type: 'text/vcard;charset=utf-8' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'LIZMAN.vcf'
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export default function App() {
  const [abierto, setAbierto] = useState(null)

  useEffect(() => {
    setAbierto(calcularEstado())
    const id = setInterval(() => setAbierto(calcularEstado()), 60000)
    return () => clearInterval(id)
  }, [])

  const externo = { target: '_blank', rel: 'noopener noreferrer' }

  return (
    <div className="pagina">
      <header className="portada">
        <h1 className="marca">{negocio.nombre}</h1>
        <p className="lema">{negocio.lema}</p>
        <p className="intro">{negocio.intro}</p>
        {abierto !== null && (
          <p className={'estado' + (abierto ? ' abierto' : '')}>
            {abierto ? 'Abierto ahora' : 'Cerrado ahora'}
          </p>
        )}

        <ul className="tapas" aria-label="Lo que vendemos">
          {tapas.map((t, i) => (
            <li key={t.nombre} className="tapa" style={{ '--c': t.color, '--r': t.giro, '--i': i }}>
              {t.nombre}
              {t.nota && <em>{t.nota}</em>}
            </li>
          ))}
        </ul>

        <div className="acciones">
          <a className="boton principal" href={`https://wa.me/${negocio.whatsapp}`} {...externo}>
            Escribir por WhatsApp
          </a>
          <a className="boton" href={`tel:+${negocio.whatsapp}`}>Llamar</a>
          <a className="boton" href={negocio.facebook} {...externo}>Facebook</a>
          <button className="boton" type="button" onClick={guardarContacto}>Guardar contacto</button>
          <a className="boton" href={negocio.mapa} {...externo}>Cómo llegar</a>
        </div>
      </header>

      <main className="contenido">
        <section className="horario">
          <h2>Horario</h2>
          <dl>
            {horario.map((h) => (
              <div key={h.etiqueta}>
                <dt>{h.etiqueta}</dt>
                <dd className={h.desde === undefined ? 'pendiente' : ''}>{h.texto}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="compra">
          <h2>Cómo comprar</h2>
          {negocio.compra.map((t) => <p key={t}>{t}</p>)}
        </section>

        <section className="galeria">
          <h2>El local</h2>
          <ul>
            {fotos.map((f) => (
              <li key={f.src}><img src={f.src} alt={f.alt} loading="lazy" /></li>
            ))}
          </ul>
        </section>

        <section className="donde">
          <h2>Dónde estamos</h2>
          <address>
            {negocio.calle}<br />{negocio.colonia}<br />{negocio.ciudad}
          </address>
          <a className="boton oscuro" href={negocio.mapa} {...externo}>Abrir en Google Maps</a>
        </section>
      </main>
    </div>
  )
}
