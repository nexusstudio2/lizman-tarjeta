import { useEffect, useState } from 'react'
import { negocio, categorias, horario, fotos } from './data'

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
        <div className="foto">
          <img src={fotos.fachada.src} alt={fotos.fachada.alt} />
        </div>
        <div className="titulo">
          <h1 className="marca">{negocio.nombre}</h1>
          <p className="lema">{negocio.lema}</p>
          <p className="intro">{negocio.intro}</p>
          <ul className="claves">
            {negocio.claves.map((c) => <li key={c}>{c}</li>)}
          </ul>
          {abierto !== null && (
            <p className={'estado' + (abierto ? ' abierto' : '')}>
              {abierto ? 'Abierto ahora' : 'Cerrado ahora'}
            </p>
          )}
        </div>
      </header>

      <main className="contenido">
        <section>
          <h2>Qué vendemos</h2>
          <ul className="catalogo">
            {categorias.map((c) => (
              <li key={c.nombre}>
                <span className="mini" style={{ '--c': c.color }} aria-hidden="true" />
                <div>
                  <h3>
                    {c.nombre}
                    {c.nota && <span className="nota">{c.nota}</span>}
                  </h3>
                  <p>{c.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="granel">
          <img src={fotos.granel.src} alt={fotos.granel.alt} loading="lazy" />
          <h2>A granel, por kilo</h2>
          <p>Llevas solo lo que necesitas: croquetas, semillas y granos se pesan en el momento.</p>
        </section>

        <section>
          <h2>Horario</h2>
          <dl className="horario">
            {horario.map((h) => (
              <div key={h.etiqueta}>
                <dt>{h.etiqueta}</dt>
                <dd className={h.desde === undefined ? 'pendiente' : ''}>{h.texto}</dd>
              </div>
            ))}
          </dl>
          <p className="pagos">{negocio.pagos}</p>
        </section>

        <section>
          <h2>Dónde estamos</h2>
          <address>
            {negocio.calle}<br />{negocio.colonia}<br />{negocio.ciudad}
          </address>
          <div className="acciones">
            <a className="boton" href={negocio.mapa} {...externo}>Cómo llegar</a>
            <a className="boton" href={negocio.facebook} {...externo}>Facebook</a>
            <button className="boton" type="button" onClick={guardarContacto}>Guardar contacto</button>
          </div>
        </section>

        <section>
          <h2>El local</h2>
          <ul className="galeria">
            {fotos.galeria.map((f) => (
              <li key={f.src}><img src={f.src} alt={f.alt} loading="lazy" /></li>
            ))}
          </ul>
        </section>
      </main>

      <nav className="barra" aria-label="Contacto directo">
        <a className="boton principal" href={`https://wa.me/${negocio.whatsapp}`} {...externo}>WhatsApp</a>
        <a className="boton" href={`tel:+${negocio.whatsapp}`}>Llamar</a>
      </nav>
    </div>
  )
}

