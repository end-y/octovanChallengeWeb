import '../styles/globals.css'
import GlobalStyle from '../styles/styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* styled components'dan gelen global style... */}
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
