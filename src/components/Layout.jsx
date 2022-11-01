import Footer from './Footer'
import Header from './Header'

export default ({ children }) => {
	return (
		<body className="antialiased font-heebo">
			<Header />
			<main>{children}</main>
			<Footer />
		</body>
	)
}
