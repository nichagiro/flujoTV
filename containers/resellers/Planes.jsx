import WhatsAppButtom from '@/components/custom/WhatsAppButtom'
import { planesData } from '@/data/planes'
import React from 'react'

const PlanCard = ({ plan }) => {
  return (
    <div className="col-12 col-sm-7 col-lg-4 mb-4">
      <div className={`card wow animate bounceInUp ${plan.delay} ${plan.color}`}>
        <h2>{plan.nombre}</h2>
        <div className="card-body">
          <b className="precio">{plan.precio}</b>
          <p className='pb-3' style={{ fontSize: '1.3rem', color: 'white', margin: 0 }}>
            {plan.creditos}
          </p>
          <ul className="ul-precios text-left">
            {plan.features.map((feature, index) => (
              <div key={index} className="row border-precio align-items-center">
                <i className={feature.icon}></i>
                <span className="p-3">{feature.text}</span>
              </div>
            ))}
          </ul>
          <div>
            <WhatsAppButtom
              label='Comprar'
              message={plan.mensaje}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const Planes = () => {
  return (
    <section id="why-us" className="wow fadeIn">
      <div className="container" style={{ maxWidth: 1500 }}>
        <header className="section-header">
          <h3>PLANES RESELLERS</h3>
          <p className="text-white w-75 text-left">
            Una oportunidad de construir tu propio negocio independiente, puedes trabajar donde quieras y
            cuándo quieras, relacionándote con tus clientes desde la comodidad de tu hogar. con una manera
            muy sencilla y fácil, una vez que te conviertes en revendedor, comenzarás a trabajar al instante.
            <br /><br />
            Nuestro objetivo principal es generar un vínculo de compañerismo y solidaridad con nuestros
            revendedores que perdure a lo largo de los años.
          </p>
        </header>
        <div className="row row-eq-height w-100 justify-content-center">
          {planesData.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Planes