import React from 'react'

const Descargar = ({ className = 'mt-2 dg-red px-5 py-3' }) => {
  return (
    <section>
      <button
        // data-toggle="modal"
        // data-target="#app_magis"
        className={`btn-download ${className}`}
      >
        Asesor Técnico
      </button>
    </section>)
}

export default Descargar
