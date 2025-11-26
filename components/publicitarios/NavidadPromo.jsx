import moment from 'moment/moment';
import React, { Fragment, useEffect } from 'react';
import WhatsAppButtom from '../custom/WhatsAppButtom';
import navidadPromoImg from "@/img/navidadPromo.webp"

const NavidadPromo = () => {
  useEffect(() => {
    onStart()
  }, [])

  const onStart = () => {
    const now = moment().format('YYYY-MM-DD');
    const limitDate = moment('2024-12-06');
    const visible = moment(now).isSameOrBefore(limitDate)
    if (visible) {
      setTimeout(() => {
        try {
          document.getElementById('buttonNavidad').click()
        } catch ({ message }) {
          console.log('navidad promo', message)
        }
      }, 3000);
    }
  }

  return (
    <Fragment>
      <button
        id='buttonNavidad'
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal">
        click popup navidad
      </button>
      <div
        style={{ zIndex: 10000 }}
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
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
                <source srcSet={navidadPromoImg.src} type="image/webp" />
                <img
                  src={navidadPromoImg.src}
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
                phone={584126679598}
                message='Me interesa el promo de navidad'
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NavidadPromo