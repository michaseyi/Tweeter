import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="shortcut icon" href="images/tweeter-small.svg" type="image/x-icon" />
				<link rel="apple-touch-icon" href="images/tweeter-small.svg" type="image/x-icon" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;1,100;1,500&display=swap"
					rel="stylesheet"
				></link>
				<link rel="manifest" href="manifest.json" />
			</Head>
			<body>
				<Main />
				<Script src="http://localhost:3000/service_worker_starter.js" strategy="beforeInteractive" />
				<NextScript />
			</body>
		</Html>
	)
}
