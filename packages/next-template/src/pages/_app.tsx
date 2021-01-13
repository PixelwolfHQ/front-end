import type { AppProps } from 'next/app'

// Styles
import 'ui/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp