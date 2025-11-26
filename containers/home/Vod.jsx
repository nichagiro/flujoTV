import React from 'react'
import a15 from "@/img/a-15.webp"

const Vod = () => {
  return (
    <section id="testimonials" className="bg-white">
      <div className="p-3">
        <header className="section-header">
          <h3>CONTENIDO VOD</h3>
        </header>
        <p className="container text-justify">
          FLUJO TV es un servicio de entretenimiento que funciona a través de su App para dispositivos Android.
          Cuenta con más de +1000 canales de televisión latinos e internacionales en vivo, además de una
          amplia biblioteca VOD (Video-On-Demand) de películas y series. Tendrás acceso a todo el contenido
          conectando hasta (3) dispositivos o pantallas en simultáneo.
        </p>
        <div className='d-flex justify-content-center'>
          <picture>
            <source srcSet={a15.src} type="image/webp" />
            <img
              loading='lazy'
              src={a15.src}
              alt="premim"
              width='100%'
              height='100%'
              style={{maxHeight: 'auto', maxWidth: 600}}
            />
          </picture>
        </div>
        <div className="container text-justify mt-5">
          <small>
            FLUJO TV INTERNATIONAL no ofrece cuentas para estas plataformas solo su
            contenido en el VOD de Flujo TV / La disponibilidad de las películas o series
            depende de Flujo TV y no FLUJO TV INTERNATIONAL.
          </small>
        </div>
      </div>
    </section>
  )
}

export default Vod