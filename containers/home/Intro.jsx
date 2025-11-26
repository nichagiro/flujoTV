import React from 'react'
import Descargar from './Descargar'

import hd from '@/img/hd.webp'
import tresPantallas from '@/img/3pantallas.webp'
import mb from '@/img/mb.webp'

const Intro = () => {
  return (
    <section id="intro" className="intro-img clearfix">
      <div className="container">
        <div className="intro-info">
          <h2>TELEVISIÓN <br /> <span>EN VIVO</span><br />PARA TU HOGAR</h2>
          <b className="text-white text-xs-justify">
            FLUJO TV es una aplicación innovadora, exclusiva para dispositivos Android,
            la cuál mediante nuestro servicio de IPTV Latino reproduce en una interfaz sencilla
            canales en HD. Somos el servicio de IPTV con mayor estabilidad, contenido y la mejor
            experiencia de usuario. Servidores privados y dedicados para brindar la mayor
            estabilidad en su programación.
          </b>
          <div className="row py-3">
            <div className="col-4">
              <picture>
                <source srcSet={hd.src} type="image/webp" />
                <img
                  loading='lazy'
                  src={hd.src}
                  alt="beneficio"
                  className="img-fluid"
                  height={225}
                  width={600}
                />
              </picture>
            </div>
            <div className="col-4">
              <picture>
                <source srcSet={tresPantallas.src} type="image/webp" />
                <img
                  loading='lazy'
                  src={tresPantallas.src}
                  alt="beneficio"
                  className="img-fluid"
                  height={225}
                  width={600}
                />
              </picture>
            </div>
            <div className="col-4">
              <picture>
                <source srcSet={mb.src} type="image/webp" />
                <img
                  loading='lazy'
                  src={mb.src}
                  alt="beneficio"
                  className="img-fluid"
                  height={225}
                  width={600}
                />
              </picture>
            </div>
          </div>
          <Descargar className='dg-red d-xl-none' />
        </div>
      </div>
    </section>
  )
}

export default Intro