import Countdown from 'react-countdown'
import Image from 'next/image'
import { useState } from 'react'

export default ({ details }) => {
	const [cutoffTime, setCutoffTime] = useState(
		Date.now() + details?.lottery?.cut_offs[0]?.hours * 60 * 60 * 1000,
	)

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

	return (
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
					<h1 className="font-impact text-7xl font-bold text-cyan-900">
						<small className="text-3xl">$</small>
						{details?.price} Million
					</h1>
				</div>
				<div className="text-center">
					<span className="block text-base text-zinc-600">
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
	)
}
