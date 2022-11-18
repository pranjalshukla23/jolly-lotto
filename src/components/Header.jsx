import { Bars3Icon, UserIcon } from '@heroicons/react/24/solid'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import cs from 'classnames'
import Link from 'next/link'
import IconWallet from './Icons/IconWallet'
import Logo from './Logo'
import Nav from './Nav'
import Navigation from './Navigation'

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
				className="hidden items-center gap-x-2 rounded-lg bg-gradient-to-r from-green-600 to-lime-500 px-6 py-2 text-sm text-white hover:from-lime-500 hover:to-lime-500 md:flex">
				<ArrowDownTrayIcon className="w-4 text-white" />
				Add Funds
			</button>
			<a
				href="#"
				className="hidden items-center text-sm text-gray-700 md:flex">
				<IconWallet className={'mr-2 w-4 fill-current text-gray-500'} />
				Balance: <strong>$45</strong>
			</a>
			<HeaderLink className="hidden md:flex" href={'/'}>
				<UserIcon className="w-4 text-gray-500" />
				<span className="flex items-center text-sm text-gray-700">
					John Doe
				</span>
			</HeaderLink>
		</div>
	)

	return (
		<header className="border-b border-b-gray-200 px-6 py-3">
			<div className="container mx-auto flex max-w-6xl items-center justify-center space-x-20">
				{/*<div className="container mx-auto flex max-w-6xl">*/}
				{/*<Navigation />*/}
				<div className="md:hidden">
					<div className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span className="sr-only">Open menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</div>
				</div>

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
