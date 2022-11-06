import SectionHero from '@/components/LotteryDetails/SectionHero'
import SectionInfo from '@/components/LotteryDetails/SectionInfo'
import SectionLotteryCards from '@/components/LotteryDetails/SectionLotteryCards'
import SectionResults from '@/components/LotteryDetails/SectionResults'
import { getAllProducts, getLotteryResults, getProductByID } from '@/lib/api'
import classNames from 'classnames'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default ({ details, results }) => {
	const router = useRouter()
	const [activeTab, setActiveTab] = useState('cards')

	if (!router.isFallback && !details) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<>
			<Head>
				<title>Lottery Details</title>
			</Head>

			<SectionHero details={details} />
			{/*<nav className="flex items-center bg-orange-50">
				<Link href="/">
					<span className="cursor-pointer border-b-2 border-cyan-900 py-3 px-12 text-center text-base font-semibold text-cyan-900">
						Single Play
					</span>
				</Link>
				<Link
					className="cursor-pointer border-b-2 py-3 px-12 text-center text-base font-semibold text-cyan-900"
					href={`/lotteries/${details?.lottery?.id}/results`}>
					Results
				</Link>
			</nav>*/}

			<div className="container mx-auto flex max-w-6xl items-center bg-orange-50">
				<span
					className={classNames(
						'cursor-pointer border-b-2 py-3 px-12 text-center text-base font-semibold text-cyan-900',
						{
							'border-cyan-900': activeTab === 'cards',
							'border-orange-50': activeTab !== 'cards',
						},
					)}
					onClick={() => setActiveTab('cards')}>
					Single Play
				</span>
				<span
					className={classNames(
						'cursor-pointer border-b-2 py-3 px-12 text-center text-base font-semibold text-cyan-900',
						{
							'border-cyan-900': activeTab === 'results',
							'border-orange-50': activeTab !== 'results',
						},
					)}
					onClick={() => setActiveTab('results')}>
					Results
				</span>
			</div>

			{activeTab === 'cards' ? (
				<SectionLotteryCards details={details} />
			) : (
				<SectionResults results={results} />
			)}
			<SectionInfo />
		</>
	)
}

export const getStaticProps = async ({ params }) => {
	const details = await getProductByID(params.id)
	//const results = await getLotteryResults(details?.lottery?.id)
	const results = await getLotteryResults(1)

	return {
		props: { details, results },
	}
}

export const getStaticPaths = async () => {
	const posts = await getAllProducts()

	return {
		paths: posts.map(post => `/lotteries/${post.id}`) || [],
		fallback: true,
	}
}
