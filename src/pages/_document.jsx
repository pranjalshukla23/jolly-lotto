import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.bunny.net" />
					<link
						href="https://fonts.bunny.net/css?family=heebo:400,500,700|lato:400i,700i|open-sans:400,400i"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
						integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
						crossOrigin="anonymous"
						referrerPolicy="no-referrer"
					/>
				</Head>
				<body className="font-heebo antialiased">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
