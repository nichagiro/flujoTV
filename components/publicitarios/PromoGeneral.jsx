import React, { Fragment } from 'react'
import WhatsAppButtom from '../custom/WhatsAppButtom'
import promoNovImg from '@/img/promoNov.webp'

const PromoGeneral = () => {
  return (
    <Fragment>
      <button
        id='btnPromo'
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#promoModal">
        click popup navidad
      </button>
      <div
        style={{ zIndex: 10000 }}
        className="modal fade"
        id="promoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="promocion flujo tv internacional"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">FLUJO TV INTERNATIONAL</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <i className="fas fa-times-circle"></i>
              </button>
            </div>
            <div>
              <picture>
                <source srcSet={promoNovImg.src} type="image/webp" />
                <img
                  src={promoNovImg.src}
                  className="img-fluid"
                  alt="Navidad flujo tv international"
                  loading="lazy"
                />
              </picture>
            </div>
            <div
              className="d-flex justify-content-end px-2"
              style={{ background: '#174960' }}
            >
              <WhatsAppButtom
                label='Lo quiero!'
                message='Me interesa la promo'
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PromoGeneral