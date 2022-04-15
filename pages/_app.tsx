import React from "react"
import { AppProps } from "next/app"
import { GlobalStyles } from "twin.macro"
import "../styles/tailwind.globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
