import React from 'react'
import paquetes_incluidos from "@/img/paquetes_incluidos.webp"

const PaquetesIncluidos = () => {
  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <h3 className="text-white">PAQUETES INCLUIDOS</h3>
        </header>
        <div className="w-100 text-center">
          <picture>
            <source srcSet={paquetes_incluidos.src} type="image/webp" />
            <img
              loading='lazy'
              src={paquetes_incluidos.src}
              alt="paqetes incluidos"
              className="img-fluid"
              width={1000}
              height={665}
            />
          </picture>
        </div>
      </div>
    </section>

  )
}

export default PaquetesIncluidos