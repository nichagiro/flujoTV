import Link from 'next/link'
import React from 'react'

const Descargar = ({ className = 'mt-2 dg-red px-5 py-3' }) => {
  return (
    <section>
      <Link
        // data-toggle="modal"
        // data-target="#app_magis"
        href={`https://wa.me/${ process.env.NEXT_PUBLIC_WHATSAPP_COUNTRY}${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
        target='whatsaap'
        className={`btn-download ${className}`}
      >
        Asesor Técnico
      </Link>
    </section>)
}

export default Descargar
