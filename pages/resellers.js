import CardDescarga from '@/containers/resellers/CardDescarga'
import Intro from '@/containers/resellers/Intro'
import Planes from '@/containers/resellers/Planes'
import Layout from '@/layouts/Layout'
import Head from 'next/head'

export default function Home() {
  const getSocials = () => {
    return {
      __html: `
            {               
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "FLUJO TV INTERNATIONAL",
            "url": "https://flujotvinter.com/resellers",
            "address": "",
            "sameAs": [
            "https://www.facebook.com/nichagiro",
            "https://www.instagram.com/magistvinter/",
            "https://linkedin.com/in/nicolas-chamorro-9aa594196"
        ]
            }
            `
    }
  }

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
                "ratingValue": "5.0",
                "ratingCount": "2300115841"
                },
                "offers": {
                "@type": "Offer",
                "price": "9.00",
                "priceCurrency": "USD"
                }
            }
            `
    }
  }

  return (
    <>
      <Head>
        <meta name="keywords" content="flujo tv international, series, películas, deportes, premium, netflix, prime, magi" />
        <meta name="description" content="Flujo TV, oportunidad de incrementar sus ingresos pasivos a su ritmo desde su casa. Forma parte de nosotros ofreciendo el mejor servicio de TV en vivo" />

        <link rel="canonical" href="https://flujotvinter.com/resellers" />
        <title>FLUJO TV INTERNATIONAL | RESELLERS FLUJO TV | DESCARGAR FLUJO TV</title>
                
        <meta name="twitter:title" content="FLUJO TV INTERNATIONAL | RESELLERS FLUJO TV | DESCARGAR FLUJO TV" />
        <meta name="twitter:description" content="Flujo TV, oportunidad de incrementar sus ingresos pasivos a su ritmo desde su casa. Forma parte de nosotros ofreciendo el mejor servicio de TV en vivo" />
        <meta name="twitter:image" content="https://flujotvinter.com/img/magistv58.webp" />

        <meta property="og:url" content="https://flujotvinter.com/resellers" />
        <meta property="og:title" content="FLUJO TV INTERNATIONAL | RESELLERS FLUJO TV | DESCARGAR FLUJO TV" />
        <meta property="og:image" content="https://flujotvinter.com/img/magistv58.webp" />
        <meta property="og:image:alt" content="FLUJO TV ENTRETENIMIENTO" />
        <meta property="og:description" content="Flujo TV, oportunidad de incrementar sus ingresos pasivos a su ritmo desde su casa. Forma parte de nosotros ofreciendo el mejor servicio de TV en vivo" />

        <script type="application/ld+json" dangerouslySetInnerHTML={getDataStructure()} />
        <script type="application/ld+json" dangerouslySetInnerHTML={getSocials()} />
      </Head>
      <Layout>
        <Intro />
        <Planes />
        <CardDescarga target="app_magis" />
      </Layout>
    </>
  )
}
