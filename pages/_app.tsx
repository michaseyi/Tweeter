import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="description" content="" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,user-scalable=no, maximum-scale=1.0, shrink-to-fit=no"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
