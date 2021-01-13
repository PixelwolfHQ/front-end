import type { AppProps } from 'next/app'

// Styles
import 'ui/global.css'

// Components
import { GlobalStyles, ThemeProvider, DefaultTheme } from '@pixelwolfhq/ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DefaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp