import { UserIcon } from '@heroicons/react/24/solid'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import cs from 'classnames'
import Link from 'next/link'
import IconWallet from './Icons/IconWallet'
import Logo from './Logo'
import Nav from './Nav'

export default () => {
	const HeaderLink = ({ href, children, className }) => (
		<Link href={href}>
			<a className={cs('flex gap-x-2', className)}>{children}</a>
		</Link>
	)

	const TopToolbar = () => (
		<div className="flex items-center justify-end space-x-5">
			<div className="flex flex-col text-xs">
				<span>Current Time: 4:25 PM</span>
				<span>Current Session: 00:14:55</span>
			</div>
			<button
				type="button"
				className="flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-green-600 to-lime-500 px-6 py-2 text-sm text-white hover:from-lime-500 hover:to-lime-500">
				<ArrowDownTrayIcon className="w-4 text-white" />
				Add Funds
			</button>
			<a href="#" className="flex items-center text-sm text-gray-700">
				<IconWallet className={'mr-2 w-4 fill-current text-gray-500'} />
				Balance: <strong>$45</strong>
			</a>
			<HeaderLink href={'#'}>
				<UserIcon className="w-4 text-gray-500" />
				<span className="flex items-center text-sm text-gray-700">
					John Doe
				</span>
			</HeaderLink>
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
