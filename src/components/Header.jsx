import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import IconWallet from './Icons/IconWallet'
import Logo from './Logo'
import Nav from './Nav'
import UserInfo from './Header/UserInfo'
import { useState } from 'react'
import { useAuth } from '@/hooks/auth'

export default () => {
	const TopToolbar = () => {
		const [showMenu, setShowMenu] = useState(false)
		const { user, logout } = useAuth()
		return (
			<div className="flex w-full items-center justify-end gap-4 ">
				<button
					type="button"
					className="items-center gap-x-2 rounded-lg bg-gradient-to-r from-green-600 to-lime-500 px-4 py-1 text-xs text-white hover:from-lime-500 hover:to-lime-500 md:flex md:px-6 md:py-2 md:text-sm">
					{/*<ArrowDownTrayIcon className="text-white" />*/}
					Add Funds
				</button>
				{user ? (
					<div className="relative z-50 mx-4">
						<a href="#">
							<i
								className="fa-regular fa-user text-blue-500"
								onClick={() => setShowMenu(!showMenu)}></i>
						</a>

						<div
							className={`${
								showMenu ? 'block' : 'hidden'
							} absolute top-5 flex flex-col bg-slate-200 p-4 p-4`}>
							<a
								href="#"
								className="hidden items-center border-b-2 border-b-gray-800 text-sm text-gray-700 md:flex">
								<IconWallet
									className={
										'mr-2 w-4 fill-current text-gray-500'
									}
								/>
								Balance: <strong>$45</strong>
							</a>
							<span className="border-b-2 border-b-gray-800 text-center text-xs">
								Current Time: <br /> 4:25 PM
							</span>
							<hr />
							<span className="border-b-2 border-b-gray-800 text-center text-xs">
								Current Session: 00:14:55
							</span>
						</div>
					</div>
				) : (
					<UserInfo user={user} logout={logout} />
				)}
			</div>
		)
	}

	return (
		<header className="border-2 border-b-gray-200 p-2 md:px-6 md:py-3">
			<div className="flex items-center justify-between gap-4 md:justify-evenly md:gap-8">
				{/*<div className="container mx-auto flex max-w-6xl">*/}
				{/*<Navigation />*/}
				<div className="flex items-center justify-between gap-2 md:hidden">
					<div className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span className="sr-only">Open menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</div>
				</div>

				<Link href="/" className="w-32">
					<Logo />
				</Link>

				<div className="flex w-2/3">
					<Nav />
					<TopToolbar />
				</div>
			</div>
		</header>
	)
}
