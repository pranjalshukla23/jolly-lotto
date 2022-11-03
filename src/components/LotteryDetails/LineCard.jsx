import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { generateRandomNum } from '../Helpers'
import IconTrash from '../Icons/IconTrash'

export default ({
	balls,
	lotteryData,
	setLines,
	id,
	totalLines,
	clearList,
	quickPick,
}) => {
	const LotteryBalls = () => {
		const b = []

		for (let i = 1; i <= balls.max; i++) {
			b.push(<BallUI key={i} number={i} />)
		}

		return b
	}

	const removeList = id => {
		setLines(lines => lines.filter(list => list.id !== id))
	}

	const BallUI = ({ number }) => {
		//const isSelected = selectedBalls.includes(number)
		const isSelected = lotteryData.selectedBalls.includes(number)

		const handleToggleSelected = () => {
			if (isSelected) {
				setLines(lines =>
					lines.map(line =>
						line.id === id
							? {
									...line,
									selectedBalls: lotteryData.selectedBalls.filter(
										x => x !== number,
									),
							  }
							: { ...line },
					),
				)
			} else {
				console.log('why here')
				//if (selectedBalls.length < balls.total) {
				if (lotteryData.selectedBalls.length < balls.total) {
					let y = lotteryData.selectedBalls.push(number)
					setLines(lines =>
						lines.map(line =>
							line.id === id
								? {
										...line,
										selectedBalls:
											lotteryData.selectedBalls,
								  }
								: { ...line },
						),
					)
				}
			}
		}

		return (
			<span
				className={classNames(
					'flex h-6 w-6 cursor-pointer select-none items-center justify-center rounded border border-slate-200 text-xs',
					{
						'bg-white': !isSelected,
						'bg-green-500 text-white': isSelected,
					},
				)}
				onClick={handleToggleSelected}>
				{number}
			</span>
		)
	}

	const BonusBalls = () => {
		const ballUI = []
		if (balls.bonus.length > 1) return null

		// @todo: we always take the first bonus ball type.
		const bonusBall = balls.bonus[0]

		const rng = generateRandomNum(bonusBall.ballNumber, bonusBall.maxNumber)
		// need to know which card it 	belongs to.
		// then set state for that card index.
		//setLotteryLines((state) => (state[0]['selected'] = ballsToSelect))

		//for ( let i = 1; i <= bonusBall.maxNumber; i++ ) {
		//    <span className="flex h-6 w-6 cursor-pointer items-center justify-center rounded border border-slate-200 bg-amber-100 text-xs">
		//		1
		//	</span>
		//	ballUI.push(<BallUI number={i} isSelected={rng.has(i)} key={i} />)
		//}

		//<div className="mt-3">
		//		<span className="block text-sm">Select 2 Super</span>
		//		<div className="mt-2 flex flex-wrap gap-1.5">
		//		</div>
		//	</div>
		//return ballUI
	}

	return (
		<div
			className={classNames('max-w-[225px] rounded-md border p-1.5', {
				'border-slate-300 bg-zinc-50': true,
				//'border-red-300 bg-red-100': false,
			})}>
			<div className="flex items-stretch justify-between gap-x-1 pt-8">
				<button
					type="button"
					className="flex-1 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 py-1 px-2 text-xs font-medium text-white hover:from-orange-500 hover:to-orange-400"
					onClick={() => quickPick(id)}>
					Quick Pick
				</button>
				<button
					type="button"
					className="rounded-xl bg-cyan-400 py-1 px-4 text-xs font-medium text-white"
					onClick={() => clearList(id)}>
					Clear
				</button>
				<button
					type="button"
					className={classNames(
						'rounded-xl py-1 px-4 text-xs font-medium text-white',
						{
							'bg-cyan-400': totalLines > 1,
							'cursor-not-allowed bg-gray-300': totalLines <= 1,
						},
					)}
					onClick={() => removeList(id)}>
					<IconTrash className={'w-2.5'} />
				</button>
			</div>
			<div className="mt-3">
				<span className="block text-sm">
					Select {balls.max} Numbers
				</span>
				<div className="mt-2 flex flex-wrap gap-1.5">
					<LotteryBalls />
				</div>
			</div>
			<BonusBalls />
		</div>
	)
}
