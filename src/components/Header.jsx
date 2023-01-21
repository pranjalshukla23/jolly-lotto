import { Bars3Icon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import IconWallet from "./Icons/IconWallet";
import Logo from "./Logo";
import Nav from "./Nav";
import UserInfo from "./Header/UserInfo";
import { useState } from "react";
import { useAuth } from "@/hooks/auth";

export default () => {
	const TopToolbar = () => {
		const [showMenu, setShowMenu] = useState(false);
		const { user, logout } = useAuth();
		return (
			<div className="flex items-center justify-between md:justify-end w-3/4 md:w-1/2 gap-4">
				<button
					type="button"
					className="items-center gap-x-2 rounded-lg bg-gradient-to-r from-green-600 to-lime-500 px-4 py-1 md:px-6 md:py-2 text-xs md:text-sm text-white hover:from-lime-500 hover:to-lime-500 md:flex"
				>
					{/*<ArrowDownTrayIcon className="text-white" />*/}
					Add Funds
				</button>
				{user ? (
					<div className="relative mx-4 z-50">
						<a href="#">
							<i
								className="fa-regular fa-user text-blue-500"
								onClick={() => setShowMenu(!showMenu)}
							></i>
						</a>

						<div
							className={`${
								showMenu ? "block" : "hidden"
							} absolute bg-slate-200 p-4 flex flex-col top-5 p-4`}
						>
							<a
								href="#"
								className="hidden items-center text-sm text-gray-700 md:flex border-b-2 border-b-gray-800"
							>
								<IconWallet
									className={
										"mr-2 w-4 fill-current text-gray-500"
									}
								/>
								Balance: <strong>$45</strong>
							</a>
							<span className="text-center text-xs border-b-2 border-b-gray-800">
								Current Time: <br /> 4:25 PM
							</span>
							<hr />
							<span className="text-center text-xs border-b-2 border-b-gray-800">
								Current Session: 00:14:55
							</span>
						</div>
					</div>
				) : (
					<UserInfo user={user} logout={logout} />
				)}
			</div>
		);
	};

	return (
		<header className="border-2 border-b-gray-200 p-2 md:px-6 md:py-3">
			<div className="flex items-center justify-between md:justify-evenly gap-4 md:gap-8">
				{/*<div className="container mx-auto flex max-w-6xl">*/}
				{/*<Navigation />*/}
				<div className="flex md:hidden justify-between items-center gap-2">
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
	);
};
