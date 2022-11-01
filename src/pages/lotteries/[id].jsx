import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { getAllProducts, getProductByID } from '@/lib/api'
import Lottery from '../lotteries'

export default ({ lotteryDetail }) => {
	const router = useRouter()

	if (!router.isFallback && !lotteryDetail) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<>
			<Head>
				<title>LOttery DEtail</title>
			</Head>
			<Lottery details={lotteryDetail} />
		</>
	)
}

export const getStaticProps = async ({ params }) => {
	const lotteryDetail = await getProductByID(params.id)
	return {
		props: { lotteryDetail },
	}
}

export const getStaticPaths = async () => {
	const posts = await getAllProducts()

	return {
		paths: posts.map(post => `/lotteries/${post.id}`) || [],
		fallback: true,
	}
}
