//import { ShoppingCartIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import Link from 'next/link'
import IconEnvelopeCircle from './Icons/IconEnvelopeCircle'
import IconPhoneCircle from './Icons/IconPhoneCircle'

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
					{
						'rounded-full bg-purple-600 px-5 py-3 text-white shadow-md transition-all duration-200 hover:bg-purple-700 hover:shadow-lg': false,
					},
					{
						'text-purple-600 after:scale-x-100': true,
					},
					className,
				)}
				{...props}>
				{children}
			</Link>
		)
	}

	return (
		<div className="hidden items-center justify-between md:flex">
			<nav className="space-x-10 text-sm">
				<NavLink href="/designer">Lotteries</NavLink>
				<NavLink href="/about">Promotions</NavLink>
				<NavLink href="/contact">Lottery Results</NavLink>
				<NavLink href="/contact">Contact Us</NavLink>
			</nav>
			<div className="hidden items-center gap-x-2 md:flex">
				<Link href="/">
					<IconPhoneCircle className="w-6 fill-current text-gray-500" />
				</Link>
				<Link href="/">
					<IconEnvelopeCircle className="w-6 fill-current text-gray-500" />
				</Link>
			</div>
		</div>
	)
}
