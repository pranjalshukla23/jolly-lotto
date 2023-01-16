import Footer from './Footer'
import Header from './Header'

export default ({ children, className }) => {
	return (
		<>
			<Header />
			<main className={className}>{children}</main>
			<Footer />
		</>
	)
}
