import React from 'react'

import a15Img from "@/img/a-15.webp"
import btn1Img from "@/img/btn1.webp"
import btn2Img from "@/img/btn2.webp"
import btn3Img from "@/img/btn3.webp"
import btn4Img from "@/img/btn4.webp"
import btn5Img from "@/img/btn-5.webp"
import btn6Img from "@/img/btn6.webp"
import btn8Img from "@/img/btn8.webp"


const Exclusivos = () => {
  return (
    <section id="sports" className="bg-white py-5" >
      <div className="container">
        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <div className="img-fluid">
              <picture>
                <source srcSet={a15Img.src} type="image/webp" />
                <img
                  loading='lazy'
                  src={a15Img.src}
                  alt="premim"
                  width='100%'
                  height='100%'
                />
              </picture>
            </div>
          </div>
          <div className="d-none d-sm-block col-lg-6 wow fadeInUp order-2 order-lg-1">
            <h4 className="pb-3">EXCLUSIVOS</h4>
            <div className="row">
              <div className="col-4 wow bounceInUp">
                <picture>
                  <source srcSet={btn1Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn1Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
              <div className="col-4 wow bounceInUp">
                <picture>
                  <source srcSet={btn2Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn2Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
              <div className="col-4  wow bounceInUp">
                <picture>
                  <source srcSet={btn3Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn3Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-4  wow bounceInUp">
                <picture>
                  <source srcSet={btn4Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn4Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
              <div className="col-4  wow bounceInUp">
                <picture>
                  <source srcSet={btn5Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn5Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
              <div className="col-4 wow bounceInUp">
                <picture>
                  <source srcSet={btn6Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn6Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
            </div>
            <div className="row">
              <div className="col-4 wow bounceInUp">
                <picture>
                  <source srcSet={btn8Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn8Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="d-sm-none col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <div className="row">
              <div className="col-4 my-2 wow bounceInUp">
                <picture>
                  <source srcSet={btn1Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn1Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
              <div className="col-4 my-2 wow bounceInUp">
                <picture>
                  <source srcSet={btn2Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn2Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
              <div className="col-4 my-2 wow bounceInUp">
                <picture>
                  <source srcSet={btn3Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn3Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
            </div>
            <div className="row">
              <div className="col-4 my-2 wow bounceInUp">
                <picture>
                  <source srcSet={btn4Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn4Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
              <div className="col-4 my-2 wow bounceInUp">
                <picture>
                  <source srcSet={btn5Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn5Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
              <div className="col-4 my-2 wow bounceInUp">
                <picture>
                  <source srcSet={btn6Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn6Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
            </div>
            <div className="row">
              <div className="col-4 my-2 wow bounceInUp">
                <picture>
                  <source srcSet={btn8Img.src} type="image/webp" />
                  <img
                    loading='lazy'
                    src={btn8Img.src}
                    alt="btn"
                    width='100%'
                    height='100%'
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Exclusivos

