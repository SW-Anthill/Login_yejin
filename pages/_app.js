import { GlobalStyles } from "twin.macro"
import "../styles/tailwind.globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
