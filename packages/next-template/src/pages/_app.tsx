import type { AppProps } from 'next/app';

// eslint-disable-next-line import/no-unresolved
import { GlobalStyles, ThemeProvider, DefaultTheme } from '@pixelwolfhq/ui';

import 'ui/global.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={DefaultTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
