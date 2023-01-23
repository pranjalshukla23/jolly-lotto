import Image from 'next/image'

export default () => {
	return (
		<section className="mt-10 bg-orange-50 py-10 px-6">
			<div className="mx-auto flex max-w-6xl flex-col justify-between gap-x-5 md:flex-row">
				<div className="max-w-xl flex-1">
					<h2 className="text-2xl font-semibold text-teal-600">
						Play Australian 6/45 Lotto
					</h2>
					<p className="text-sm text-cyan-900">
						French Lotto combines big jackpots with excellent
						prize-winning odds making it a lucrative choice to play.
						Choose 5 winning numbers plus a &quote;lucky&quote;
						number to win prizes up to €21 million!
					</p>
					<div className="mt-5 space-y-11">
						<div className="flex items-center gap-x-5">
							<Image
								src="/images/draw-list-icon1.svg"
								alt="icon"
								width={64}
								height={64}
							/>
							<div>
								<h3 className="text-lg font-semibold text-teal-600">
									Three Draws per week
								</h3>
								<p className="pt-0.5 text-sm text-cyan-900">
									Feel the excitement of French Lotto every
									Monday, Wednesday and Saturday!
								</p>
							</div>
						</div>
						<div className="flex items-center gap-x-5">
							<Image
								src="/images/draw-list-icon1.svg"
								alt="icon"
								width={64}
								height={64}
							/>
							<div>
								<h3 className="text-lg font-semibold text-teal-600">
									Fantastic Prize odds
								</h3>
								<p className="pt-0.5 text-sm text-cyan-900">
									Overall odds of winning any prize are better
									than 1 in 6!
								</p>
							</div>
						</div>
						<div className="flex items-center gap-x-5">
							<Image
								src="/images/draw-list-icon1.svg"
								alt="icon"
								width={64}
								height={64}
							/>
							<div>
								<h3 className="text-lg font-semibold text-teal-600">
									Bonne Chance!
								</h3>
								<p className="pt-0.5 text-sm text-cyan-900">
									Jackpots climb quickly with up to 3
									rollovers every week!
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-xl flex-1">
					<Image
						src="/images/oz-doc-img.png"
						className="hidden md:block"
						width={600}
						height={250}
						alt="ban"
					/>
					<div className="mt-8 divide-y divide-black border-t border-b border-black">
						<details className="cursor-pointer py-4 px-3">
							<summary>Quick Facts</summary>
							<p className="px-5 pt-5">
								Something small enough to escape casual notice.
							</p>
						</details>
						<details className="cursor-pointer py-4 px-3">
							<summary>10 Prize Categories</summary>
							Something small enough to escape casual notice.
						</details>
						<details className="cursor-pointer py-4 px-3">
							<summary>Why Play?</summary>
							Something small enough to escape casual notice.
						</details>
					</div>
				</div>
			</div>
		</section>
	)
}
