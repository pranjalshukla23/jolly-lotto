import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
	BellIcon,
	ChevronDownIcon,
	PowerIcon,
	QueueListIcon,
	UserIcon,
	WalletIcon,
} from "@heroicons/react/24/solid";
import { useAuth } from "@/hooks/auth";
import Link from "next/link";

export default ({ user, logout }) => {
	//const { user, logout } = useAuth();

	return (
		<Menu as="div" className="relative inline-block">
			{user && user.statusCode === 200 ? (
				<Menu.Button className="flex items-center text-sm text-gray-700">
					<UserIcon className="mr-1 w-4 text-gray-500" />
					{user.user.name}
					<ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
				</Menu.Button>
			) : (
				<>
					<Link href="/register" className="gap-x-2">
						<button
							type="button"
							className="items-center gap-x-2 rounded-lg bg-gradient-to-r from-green-600 to-lime-500 px-4 py-1 md:px-6 md:py-2 text-xs md:text-sm text-white hover:from-lime-500 hover:to-lime-500 md:flex break-keep"
						>
							Sign up
						</button>
						{/*<UserIcon className="text-sm text-gray-500" />*/}
						{/*<span className="text-sm text-gray-700">Sign Up</span>*/}
					</Link>
				</>
			)}
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100 z-50"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-1 py-1 ">
						<Menu.Item>
							{({ active }) => (
								<Link
									href="/user/dashboard"
									className={`${
										active && "bg-slate-100"
									} group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-500`}
								>
									<UserIcon className="mr-2 w-4 text-gray-500" />
									Account
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active && "bg-slate-100"
									} group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-500`}
								>
									<WalletIcon className="mr-2 w-4 text-gray-500" />
									Wallet
								</button>
							)}
						</Menu.Item>
					</div>
					<div className="px-1 py-1">
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active && "bg-slate-100"
									} group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-500`}
								>
									<QueueListIcon className="mr-2 w-4 text-gray-500" />
									Orders
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active && "bg-slate-100"
									} group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-500`}
								>
									<BellIcon className="mr-2 w-4 text-gray-500" />
									Notification
								</button>
							)}
						</Menu.Item>
					</div>
					<div className="px-1 py-1">
						<Menu.Item>
							{({ active }) => (
								<button
									onClick={() => logout()}
									className={`${
										active && "bg-slate-100"
									} group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-500`}
								>
									<PowerIcon className="mr-2 w-4 text-gray-500" />
									Logout
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};
