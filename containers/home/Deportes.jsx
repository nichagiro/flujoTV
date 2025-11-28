import React from 'react'

import nbaImg from "@/img/nba.webp"
import gamepassImg from "@/img/gamepass.webp"
import mlbImg from "@/img/mlb.webp"
import foxImg from "@/img/fox.webp"
import espnImg from "@/img/espn.webp"
import beingImg from "@/img/being.webp"
import ufcImg from "@/img/ufc.webp"
import tigoImg from "@/img/tigo.webp"
import directtvImg from "@/img/directtv.webp"


const Deportes = () => {
  return (
    <section id="services" className="section-deporte">
      <div className="container py-5">
        <header className="section-header-white">
          <h3 className="d-none d-sm-block">DEPORTES</h3>
          <p className="h1 d-none d-sm-block">+ DE 100 CANALES DE DEPORTES DISPONIBLES.</p>
        </header>
        <p className="d-sm-none h1 pb-3 text-white">+ DE 100 CANALES DE DEPORTES DISPONIBLES.</p>
        <div className="row">
          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <p className="description">
              Reúne a tus amigos y familiares para ver tus eventos deportivos favoritos, En Flujo TV tenemos una gran
              cantidad de canales de deportes, y canales de Pases exclusivos totalmente gratis en cualquiera de nuestros planes.
            </p>
            <div className="row justify-content-center">
              <div className="col-8 pt-xs-2 col-sm-4 d-flex justify-content-center" >
                <picture>
                  <source srcSet={nbaImg.src} type="image/webp" />
                  <img
                    loading='lazy'
                    height={'100%'}
                    width={'100%'}
                    src={nbaImg.src}
                    alt="deporte"
                  />
                </picture>
              </div>
              <div className="col-8 pt-xs-2 col-sm-4 d-flex justify-content-center">
                <picture>
                  <source srcSet={gamepassImg.src} type="image/webp" />
                  <img
                    loading='lazy'
                    height={'100%'}
                    width={'100%'}
                    src={gamepassImg.src}
                    alt="deporte"
                  />
                </picture>
              </div>
              <div className="col-8 pt-xs-2 col-sm-4 d-flex justify-content-center">
                <picture>
                  <source srcSet={mlbImg.src} type="image/webp" />
                  <img
                    loading='lazy'
                    height={'100%'}
                    width={'100%'}
                    src={mlbImg.src}
                    alt="deporte"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="d-none d-sm-block pt-xs-2 pt-sm-3 owl-carousel testimonials-carousel wow fadeInUp">
                  <div className="testimonial-item row">
                    <div className="col-4">
                      <picture>
                        <source srcSet={foxImg.src} type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src={foxImg.src}
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                    <div className="col-4">
                      <picture>
                        <source srcSet={espnImg.src} type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src={espnImg.src}
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                    <div className="col-4">
                      <picture>
                        <source srcSet={beingImg.src} type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src={beingImg.src}
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="testimonial-item row">
                    <div className="col-4">
                      <picture>
                        <source srcSet={ufcImg.src} type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src={ufcImg.src}
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                    <div className="col-4">
                      <picture>
                        <source srcSet={tigoImg.src} type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src={tigoImg.src}
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                    <div className="col-4">
                      <picture>
                        <source srcSet={directtvImg.src} type="image/webp" />
                        <img
                          loading='lazy'
                          height={'100%'}
                          width={'100%'}
                          src={directtvImg.src}
                          sizes="100vw"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center d-sm-none pt-xs-2 pt-sm-3 owl-carousel testimonials-carousel wow fadeInUp">
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center ">
                      <div className='col-12'>
                        <picture>
                          <source srcSet={foxImg.src} type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src={foxImg.src}
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <picture>
                          <source srcSet={espnImg.src} type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src={espnImg.src}
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <picture>
                          <source srcSet={beingImg.src} type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src={beingImg.src}
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <picture>
                          <source srcSet={ufcImg.src} type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src={ufcImg.src}
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <picture>
                          <source srcSet={tigoImg.src} type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src={tigoImg.src}
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                      <div className='col-12'>
                        <picture>
                          <source srcSet={directtvImg.src} type="image/webp" />
                          <img
                            loading='lazy'
                            height={'100%'}
                            width={'100%'}
                            src={directtvImg.src}
                            sizes="100vw"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deportes