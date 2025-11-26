"use client";

import Link from 'next/link';
import React, { useMemo } from 'react'

const WhatsAppButtom = ({ phone, message = '', label = 'WhatsApp' }) => {
  const finalPhone = phone ?? `${process.env.NEXT_PUBLIC_WHATSAPP_COUNTRY}${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`

  const urlWhatsapp = useMemo(() =>
    `https://wa.me/${finalPhone}?text=${encodeURIComponent(message)}`
    , [finalPhone, message])

  return (
    <Link href={urlWhatsapp} className="mt-4 btn-get-started" target='whatsaap'>
      {label}
      <i className="fab fa-whatsapp ml-1"></i>
    </Link>
  )
}

export default WhatsAppButtom;