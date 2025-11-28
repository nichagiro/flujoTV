import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

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

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="language" content="es" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="copyright" content="© OverWeb" />

        <meta name="twitter:site" content="@Nicolas63783814" />
        <meta name="twitter:creator" content="@Nicolas63783814" />
        <meta name="twitter:card" content="summary" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Flujo TV International" />

        <link href="/images/icon.jpg" rel="icon" />
        <link href="/images/icon.jpg" rel="apple-touch-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <script type="application/ld+json" dangerouslySetInnerHTML={getSocials()} />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script strategy='beforeInteractive' src="/lib/jquery/jquery.min.js" />
        <Script strategy='beforeInteractive' src="/lib/jquery/jquery-migrate.min.js" />
        <Script strategy='beforeInteractive' src="/lib/owlcarousel/owl.carousel.min.js" />
        <Script strategy='afterInteractive' src="/lib/waypoints/waypoints.min.js" />
        <Script strategy='afterInteractive' src="/lib/wow/wow.min.js" />
        <Script strategy='lazyOnload' src="/lib/mobile-nav/mobile-nav.js" />
        <Script strategy='lazyOnload' src="/lib/easing/easing.min.js" />
        <Script strategy='lazyOnload' src="/lib/bootstrap/js/bootstrap.bundle.min.js" />
        <Script strategy='lazyOnload' src="/js/main.js" />
      </body>
    </Html>
  )
}