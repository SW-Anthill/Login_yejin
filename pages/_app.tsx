import React from "react"
import { AppProps } from "next/app"
import Script from "next/script"
import { GlobalStyles } from "twin.macro"
import { Helmet } from "react-helmet"
import "../styles/tailwind.globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Anthill</title>
        <script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js?autoload=false" />
      </Helmet>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
