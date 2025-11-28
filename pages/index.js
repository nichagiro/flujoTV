import Deportes from '@/containers/home/Deportes'
import Exclusivos from '@/containers/home/Exclusivos'
import Intro from '@/containers/home/Intro'
import InvitacionReseller from '@/containers/home/InvitacionReseller'
import Suscripcion from '@/containers/home/Suscripcion'
import Vod from '@/containers/home/Vod'
import Layout from '@/layouts/Layout'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.$(".testimonials-carousel").owlCarousel({
      autoplay: true,
      items: 1,
      lazyLoad: true,
      loop: true,
      mouseDrag: false,
    });
  }, [])

  const getDataStructure = () => {
    return {
      __html: `
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "FlujoTV",
          "operatingSystem": "ANDROID",
          "applicationCategory": "EntertainmentApplication",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "2019828903"
          },
          "offers": {
            "@type": "Offer",
            "price": "27.00",
            "priceCurrency": "USD"
          }
        }
      `
    }
  }

  return (
    <>
      <Head>
        <meta name="keywords" content="Flujo TV International, flujo tv, películas, deportes, premium, Netflix, Prime, Disney Plus" />
        <meta name="description" content="Explora un mundo de entretenimiento con Flujo TV. Disfruta de streaming de alta calidad con acceso a canales en vivo, amplia selección de series y películas" />

        <link rel="canonical" href="https://flujotvinter.com/" />
        <title>FLUJO TV INTERNATIONAL - APP DE PELICULAS Y SERIES - FLUJO TV</title>

        <meta name="twitter:title" content="FLUJO TV INTERNATIONAL - APP DE PELICULAS Y SERIES - FLUJO TV" />
        <meta name="twitter:description" content="Explora un mundo de entretenimiento con Flujo TV. Disfruta de streaming de alta calidad con acceso a canales en vivo, amplia selección de series y películas" />
        <meta name="twitter:image" content="https://flujotvinter.com/images/home.webp" />

        <meta property="og:url" content="https://flujotvinter.com/" />
        <meta property="og:title" content="FLUJO TV INTERNATIONAL - APP DE PELICULAS Y SERIES - FLUJO TV" />
        <meta property="og:image" content="https://flujotvinter.com/images/home.webp" />
        <meta property="og:image:alt" content="FLUJO TV ENTRETENIMIENTO" />
        <meta property="og:description" content="Explora un mundo de entretenimiento con Flujo TV. Disfruta de streaming de alta calidad con acceso a canales en vivo, amplia selección de series y películas" />

        <script type="application/ld+json" dangerouslySetInnerHTML={getDataStructure()} />
      </Head>
      <Layout>
        <Intro />
        <Exclusivos />
        <Deportes />
        <Suscripcion />
        <InvitacionReseller />
        <Vod />
      </Layout>
    </>
  )
}

