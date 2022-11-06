import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import moment from 'moment'
import { useEffect, useState } from 'react'

export default ({ results }) => {
	const [months, setMonths] = useState([])
	const [selectedMonth, setSelectedMonth] = useState('Aug 2022')

	const getMonths = () => {
		const z = []
		results.map(result => {
			const m = moment(result.draw_date)
			const date = m.format('MMM Y')

			if (z.indexOf(date) === -1) {
				z.push(date)
			}
		})

		setMonths(z)
	}

	useEffect(() => {
		getMonths()
	}, [])

	//useEffect(() => {
	//	document
	//		.querySelectorAll('[data-month-group="' + selectedMonth + '"]')
	//		.forEach(elm => {
	//			elm.classList.remove('hidden')
	//			elm.classList.add('flex')
	//		})
	//}, [selectedMonth])

	const Results = () => {
		const rows = results.map(row => (
			<Disclosure key={row.id}>
				{({ open }) => {
					const m = moment(row.draw_date)
					const g = m.format('MMM Y')

					return (
						<>
							<Disclosure.Button
								as="div"
								data-month-group={g}
								className={classNames(
									'w-full cursor-pointer items-center justify-between border-b border-gray-200 py-3 text-sm',
									{
										'bg-gray-100': open,
										hidden: selectedMonth !== g,
										flex: selectedMonth === g,
									},
								)}>
								<span className="max-w-[200px] flex-1">
									{moment(row.draw_date).format('Do MMM')}
								</span>
								<span className="flex-1">${row.jackpot}</span>
								<div className="flex flex-1 space-x-3">
									{row.board.split(',').map(n => (
										<span
											key={n}
											className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-xs">
											{n}
										</span>
									))}
								</div>
								<span className="ml-6 flex items-center">
									{open ? (
										<ChevronUpIcon
											className="h-5 w-5"
											aria-hidden="true"
										/>
									) : (
										<ChevronDownIcon
											className="h-5 w-5"
											aria-hidden="true"
										/>
									)}
								</span>
							</Disclosure.Button>
							<Transition
								show={open}
								className="overflow-hidden"
								enter="transition-[max-height] duration-300"
								enterFrom="max-h-0"
								enterTo="max-h-screen"
								leave="transition-[max-height] duration-200"
								leaveFrom="max-h-screen"
								leaveTo="max-h-0">
								<Disclosure.Panel className="pt-6">
									<div className="flex border-b-2 border-gray-200">
										<span className="w-60 flex-1">
											Prize Tiers
										</span>
										<span className="w-60 flex-1">
											Winners
										</span>
										<span className="w-60 flex-1">
											Prize Value
										</span>
										<span className="w-60 flex-1">
											Prize Payout
										</span>
									</div>

									{row.breakdowns.map((b, idx) => (
										<div
											key={idx}
											className="flex border-b-2 border-gray-200">
											<span className="flex-1">
												{b.type}
											</span>
											<span className="flex-1">
												{b.winners}
											</span>
											<span className="flex-1">
												${b.amount}
											</span>
											<span className="flex-1">0</span>
										</div>
									))}

									<div className="flex">
										<span className="flex-1">
											<strong>Total</strong>
										</span>
										<span className="flex-1">0</span>
										<span className="flex-1">3</span>
										<span className="flex-1">4</span>
									</div>
								</Disclosure.Panel>
							</Transition>
						</>
					)
				}}
			</Disclosure>
		))

		return (
			<div>
				<div className="flex space-x-10">
					<span className="max-w-[200px] flex-1">Draw Date</span>
					<span className="flex-1">Total Prices</span>
					<span className="flex-1">Numbers</span>
					<span className="flex-1"></span>
				</div>
				{rows}
			</div>
		)
	}

	return (
		<section>
			<div className="container mx-auto max-w-6xl">
				<h2 className="mt-8 text-2xl font-semibold text-teal-600">
					Play German Lotto Single Play
				</h2>
				<h6 className="text-sm text-cyan-900">
					German Lotto Single Play
				</h6>

				<div>
					<h3>Select month</h3>
					<select
						onChange={e => setSelectedMonth(e.target.value)}
						value={selectedMonth}>
						{months.map(month => (
							<option key={month} value={month}>
								{month}
							</option>
						))}
					</select>
				</div>

				<div>
					<h3>Results</h3>
					<Results />
				</div>
			</div>
		</section>
	)
}
