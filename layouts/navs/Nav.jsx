import React from 'react'
import Link from 'next/link'
import Descargar from '@/containers/home/Descargar'

const Nav = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <b className="d-none d-md-block mr-1 text-white" style={{ fontSize: '12px' }}>
          <i className="far fa-clock"></i>  Lun - Sab: 9:00am - 8:30pm
        </b>
      </div>
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        <div className="logo d-flex align-items-center">
          <h1 className="text-light">
            <Link href="/#" className="d-flex align-items-center">
              <div className="px-xs-3">
                <picture>
                  <source srcSet={"/images/icon.jpg"} />
                  <img
                    loading='lazy'
                    src={"/images/icon.jpg"}
                    alt="flujoTV"
                    height={'100%'}
                    width={'100%'}
                  />
                </picture>
              </div>
            </Link>
          </h1>
        </div>
        <nav id="menu" className="main-nav float-right d-none d-lg-block mr-lg-5">
          <ul>
            <li>
              <Link href='/'>Inicio</Link>
            </li>
            <li>
              <Link href="/#services">Deportes</Link>
            </li>
            <li>
              <Link href="/#why-us">Suscripción</Link>
            </li>
            <li>
              <Link href='/resellers'>Resellers</Link>
            </li>
            <li>
              <Descargar className='dg-red' />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Nav