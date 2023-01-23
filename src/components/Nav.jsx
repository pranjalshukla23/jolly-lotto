//import { ShoppingCartIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import Link from 'next/link'

export default () => {
	const NavLink = ({ href, cta, className, children, ...props }) => {
		return (
			<Link
				href={href}
				// @todo: maybe cleanup this logic here?
				className={classNames(
					{
						'relative transition-all': !cta,
					},
					className,
				)}
				{...props}>
				{children}
			</Link>
		)
	}

	return (
		<div className="mx-4 hidden w-2/3 items-center justify-between gap-2 md:flex">
			<nav className="flex w-full items-center justify-center space-x-6 text-sm">
				<NavLink href="/designer">Lotteries</NavLink>
				<NavLink href="/about">Promotions</NavLink>
				<NavLink href="/contact">Lottery Results</NavLink>
				<NavLink href="/contact">Contact Us</NavLink>
			</nav>
			{/*<div className="hidden items-center gap-x-2 md:flex">*/}
			{/*	<Link href="/">*/}
			{/*		<IconPhoneCircle className="w-6 fill-current text-gray-500" />*/}
			{/*	</Link>*/}
			{/*	<Link href="/">*/}
			{/*		<IconEnvelopeCircle className="w-6 fill-current text-gray-500" />*/}
			{/*	</Link>*/}
			{/*</div>*/}
		</div>
	)
}
