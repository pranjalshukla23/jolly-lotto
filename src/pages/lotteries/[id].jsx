import { generateRandomNum } from '@/components/Helpers'
import IconAdd from '@/components/Icons/IconAdd'
import LineCard from '@/components/LotteryDetails/LineCard'
import QuantityInput from '@/components/LotteryDetails/QuantityInput'
import SectionInfo from '@/components/LotteryDetails/SectionInfo'
import { getAllProducts, getProductByID } from '@/lib/api'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import Countdown from 'react-countdown'

export default ({ details }) => {
	const router = useRouter()
	const balls = details?.lottery?.balls

	if (!router.isFallback && !details) {
		return <ErrorPage statusCode={404} />
	}

	const [weeks, setWeeks] = useState(1)
	const [lotteryLines, setLotteryLines] = useState([])
	const [price, setPrice] = useState(details?.prices?.price)
	const [drawDays, setDrawDays] = useState([])
	const [selectedDrawDays, setSelectedDrawDays] = useState(0)
	const [cutoffTime, setCutoffTime] = useState(
		Date.now() + details?.lottery?.cut_offs[0]?.hours * 60 * 60 * 1000,
	)

	const LotteryLinesList = () => {
		let g = []

		for (let i = 0; i <= 2; i++) {
			g.push(addLotteryLine())
		}

		setLotteryLines(g)
	}

	const drawDates = () => {
		const f = []
		details?.lottery?.draw_dates.map((date, idx) => {
			f.push({
				id: idx,
				day: date.drawDay,
				selected: idx === 0,
			})
		})

		setSelectedDrawDays(selectedDrawDays + 1)
		setDrawDays(f)
	}

	useEffect(() => {
		LotteryLinesList()

		drawDates()
	}, [])

	const handleClearAll = () => {
		for (let i = 0; i <= lotteryLines.length; i++) {
			handleClearList(i)
		}
	}

	const addLotteryLine = () => {
		const rng = generateRandomNum(balls.total, balls.max)

		return {
			completed: false,
			selectedBalls: rng,
		}
	}

	const quickPickBalls = id => {
		const rng = generateRandomNum(balls.total, balls.max)
		setLotteryLines(lines =>
			lines.map((line, idx) =>
				idx === id
					? {
							...line,
							selectedBalls: rng,
					  }
					: { ...line },
			),
		)
	}

	const quickPickAllBalls = () => {
		for (let i = 0; i <= lotteryLines.length; i++) {
			quickPickBalls(i)
		}
	}

	const AddQuickCard = () => (
		<div
			className="flex w-full max-w-[225px] cursor-pointer flex-col items-center justify-center rounded-md border border-slate-300 bg-zinc-50 p-1.5"
			onClick={() =>
				setLotteryLines(data => [...data, addLotteryLine()])
			}>
			<IconAdd className={'w-16'} />
			<span className="mt-2.5 block text-base font-semibold text-cyan-900">
				Add Line
			</span>
		</div>
	)

	const handleClearList = id => {
		setLotteryLines(lines =>
			lines.map((line, idx) =>
				idx === id
					? {
							...line,
							selectedBalls: [],
					  }
					: { ...line },
			),
		)
	}

	const cutOffCountDown = ({ hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			//return <Completionist />
			return null
		} else {
			// Render a countdown
			return (
				<span>
					0 Day(s) {hours}:{minutes}:{seconds}
				</span>
			)
		}
	}

	const CutoffDay = ({ id, day, selected }) => {
		const handleCutoffDays = () => {
			if (selectedDrawDays <= 1 && selected) return

			if (selected) {
				setDrawDays(prev =>
					prev.map(day =>
						day.id === id
							? { ...day, selected: false }
							: { ...day },
					),
				)
				setSelectedDrawDays(selectedDrawDays - 1)
			} else {
				setDrawDays(prev =>
					prev.map(day =>
						day.id === id ? { ...day, selected: true } : { ...day },
					),
				)

				setSelectedDrawDays(selectedDrawDays + 1)
			}
			//if (checked) {
			//	console.log('beh ere')
			//	//setChecked(false)
			//	setSelectedDrawDays(prev =>
			//		prev.map(x =>
			//			x.day === day ? { selected: false } : { ...x },
			//		),
			//	)
			//} else {
			//	console.log('not checked')
			//	setChecked(prev => !prev)
			//	setSelectedDrawDays(prev => [...prev, { day }])
			//}
		}

		return (
			<li className="flex space-x-2 items-center">
				<input
					type="checkbox"
					checked={selected}
					onChange={handleCutoffDays}
				/>
				<span>{day}</span>
			</li>
		)
	}

	return (
		<>
			<Head>
				<title>Lottery Details</title>
			</Head>
			<section className="bg-orange-100 py-3">
				<div className="container mx-auto flex max-w-6xl items-center justify-between px-10">
					<Image
						src="/images/OZLotto.png"
						alt="OZ Lotto"
						width={100}
						height={80}
					/>
					<div className="text-center">
						<h2 className="text-2xl font-semibold text-zinc-500">
							Next {details?.lotteryName} Lotto
						</h2>
						<h1 className="text-7xl font-bold text-cyan-900">
							${details?.price} Million
						</h1>
					</div>
					<div>
						<span className="block text-zinc-500">
							Draw Cutoff Timer
						</span>
						<div className="rounded-lg bg-white py-1 px-9 text-center text-xl font-bold text-red-600">
							<Countdown
								daysInHours={true}
								date={cutoffTime}
								renderer={cutOffCountDown}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="pb-10">
				<div className="container mx-auto max-w-6xl">
					{/* tabbed nav */}
					<nav className="flex items-center bg-orange-50">
						<Link href="/">
							<span className="cursor-pointer border-b-2 border-cyan-900 py-3 px-12 text-center text-base font-semibold text-cyan-900">
								Single Play
							</span>
						</Link>
						<Link
							className="cursor-pointer border-b-2 py-3 px-12 text-center text-base font-semibold text-cyan-900"
							href="results">
							Results
						</Link>
					</nav>
					<h2 className="mt-8 text-2xl font-semibold text-teal-600">
						Play German Lotto Single Play
					</h2>
					<h6 className="text-sm text-cyan-900">
						German Lotto Single Play
					</h6>
					<div className="mt-6 flex items-center justify-between">
						<h3 className="text-base font-semibold">
							Quickpick, Edit or Delete lines
						</h3>

						<div className="flex gap-x-1.5">
							<button
								type="button"
								className="rounded-md bg-cyan-400 px-5 py-2.5 text-xs font-semibold text-white shadow shadow-cyan-600"
								onClick={quickPickAllBalls}>
								Quick Pick All
							</button>
							<button
								type="button"
								className="rounded-md bg-cyan-400 px-5 py-2.5 text-xs font-semibold text-white shadow shadow-cyan-600"
								onClick={handleClearAll}>
								Clear All
							</button>
						</div>
					</div>
					<div className="mt-4 mb-20 flex flex-wrap gap-x-1.5 gap-y-3">
						{lotteryLines.map((line, idx) => (
							<LineCard
								id={idx}
								quickPick={quickPickBalls}
								lotteryData={lotteryLines[idx]}
								setLines={setLotteryLines}
								clearList={handleClearList}
								totalLines={lotteryLines.length}
								key={idx}
								balls={balls}
							/>
						))}
						<AddQuickCard />
					</div>
				</div>
				<div className="container mx-auto flex max-w-4xl items-start justify-between">
					<div className="max-w-sm flex-1">
						<h4 className="text-base font-semibold text-cyan-900">
							Duration
						</h4>

						<QuantityInput weeks={weeks} setWeeks={setWeeks} />
						<div className="mt-7">
							<h4 className="text-base font-semibold text-cyan-900">
								Select your Draw Days
							</h4>
							<ul>
								{drawDays.map(date => {
									return (
										<CutoffDay
											key={date.id}
											id={date.id}
											day={date.day}
											selected={date.selected}
										/>
									)
								})}
							</ul>
						</div>
					</div>
					<div className="max-w-sm flex-1">
						<h4 className="text-base font-semibold text-cyan-900">
							{details?.lotteryName}
						</h4>
						<div>
							{/* item list here */}
							<div className="flex justify-between">
								<span>
									{lotteryLines.length}{' '}
									{lotteryLines.length > 1 ? 'lines' : 'line'}{' '}
									x {weeks} {weeks > 1 ? 'draws' : 'draw'}
								</span>
								<span>
									$
									{price *
										weeks *
										lotteryLines.length *
										selectedDrawDays}
								</span>
							</div>
							{/* total line here */}
							<div className="flex justify-between border-t-2 border-gray-300">
								<strong>Total:</strong>
								<span>
									$
									{price *
										weeks *
										lotteryLines.length *
										selectedDrawDays}
								</span>
							</div>
						</div>
						{/* confirm button */}
						<button
							type="submit"
							className="mt-5 w-full rounded-md bg-gradient-to-r from-orange-400 to-orange-500 py-3 px-14 text-lg text-white shadow-md shadow-orange-700 hover:from-orange-500 hover:to-orange-400">
							Play Now
						</button>
					</div>
				</div>
			</section>

			<SectionInfo />
		</>
	)
}

export const getStaticProps = async ({ params }) => {
	const details = await getProductByID(params.id)
	return {
		props: { details },
	}
}

export const getStaticPaths = async () => {
	const posts = await getAllProducts()

	return {
		paths: posts.map(post => `/lotteries/${post.id}`) || [],
		fallback: true,
	}
}
