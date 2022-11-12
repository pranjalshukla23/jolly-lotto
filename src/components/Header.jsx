import Image from 'next/image'
import Link from 'next/link'
import Logo from './Logo'
import Nav from './Nav'

export default () => {
	const TopToolbar = () => (
		<div className="flex justify-end space-x-5">
			<div className="flex flex-col text-xs">
				<span>Current Time: 4:25 PM</span>
				<span>Current Session: 00:14:55</span>
			</div>
			<button type="button">Add Funds</button>
			<a href="#">Balance: $45</a>
			<a href="#">John Doe</a>
		</div>
	)

	return (
		<header className="border-b border-b-gray-200 bg-white py-2.5">
			<div className="container mx-auto flex max-w-6xl items-center space-x-20">
				<Link href="/">
					<a className="w-32 flex-shrink-0">
						<Logo />
					</a>
				</Link>

				<div className="flex-1">
					<TopToolbar />
					<Nav />
				</div>
			</div>
		</header>
	)
}
