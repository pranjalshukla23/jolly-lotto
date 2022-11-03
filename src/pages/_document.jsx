import Layout from '@/components/Layout'
import Document, { Html, Head, Main, NextScript } from 'next/document'

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
				</Head>
				<Layout>
					<Main />
					<NextScript />
				</Layout>
			</Html>
		)
	}
}

export default MyDocument
