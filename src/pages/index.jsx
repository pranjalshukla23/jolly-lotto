import React, { useRef } from 'react'
// Import Swiper React components
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'
import { getSingleProducts } from '@/lib/api'
import Image from 'next/image'
import Head from 'next/head'
import IconBoxesChecked from '@/components/Icons/IconBoxesChecked'
import IconPaper from '@/components/Icons/IconPaper'
import IconMoneyEnvelope from '@/components/Icons/IconMoneyEnvelope'
import IconTick from '@/components/Icons/IconTick'
import Layout from '@/components/Layout'

const sectionData = [
	{
		title: 'Choice',
		content:
			'Choose which lotteries you want to play. You can play your favorite numbers, or “Quick Pick” for a random selection.',
		icon: <IconBoxesChecked className={'mx-auto w-20'} />,
	},
	{
		title: 'Confirmation',
		content:
			"As soon as your order id processed we'll send you a confirmation of your lottery numbers and dates of play.",
		icon: <IconPaper className={'mx-auto w-16'} />,
	},
	{
		title: 'Winnings',
		content:
			"When you win a lotto prize, we'll immediately notify you and deposit your winning in to your Lotto Express account.",
		icon: <IconMoneyEnvelope className={'mx-auto w-20'} />,
	},
]

const qualityData = [
	{
		title: 'Exciting',
		content: [
			"The world's most exciting lotteries.",
			'Play for the biggest jackpots on Earth!',
		],
	},
	{
		title: 'Secure',
		content: [
			'Highest security standards in the industry.',
			'Exceeding regulated security requirements.',
			'Frequent system upgrades to keep your data safe.',
		],
	},
	{
		title: 'Honest',
		content: [
			'Service charges are included in the price.',
			'No additional fees to collect your winnings or for any other reason.',
		],
	},
]

export default function Home({ singleProducts }) {
	const HeroSlider = () => (
		<Swiper slidesPerView={1}>
			<SwiperSlide className="bg-[#dafcfe]">
				<div className="mx-auto flex max-w-6xl items-center justify-between">
					<Image
						src="/images/banner-man-1.png"
						width={510}
						height={290}
					/>
					<div className="text-center">
						<h2>Header Lorem Ipsum</h2>
						<p>Support Lorem Ipsum</p>
						<h2 className="font-impact text-7xl text-teal-900">
							$100 MILLION
						</h2>
						<a href="#">Play Now</a>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	)

	const SwiperElm = () => {
		const prevRef = useRef(null)
		const nextRef = useRef(null)

		return (
			<Swiper
				className="relative"
				modules={[Navigation]}
				onInit={swiper => {
					swiper.params.navigation.prevEl = prevRef.current
					swiper.params.navigation.nextEl = nextRef.current
					swiper.navigation.init()
					swiper.navigation.update()
				}}
				spaceBetween={30}
				slidesPerView={5}>
				{singleProducts.map((product, idx) => (
					<SwiperSlide
						key={idx}
						className="flex flex-col items-center justify-between space-y-2.5 rounded-lg border-l-8 border-r-8 border-yellow-300/80 bg-amber-100 py-6">
						<Image
							src={'/images/Australian6-45.png'}
							width={80}
							height={80}
						/>
						<h3>
							<span>{product.lotteryName}</span>{' '}
							<strong>{product.price}M</strong>
						</h3>
						<Link href={`/lotteries/${product.id}`}>
							<button
								className="rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 py-2 px-8 text-sm text-white shadow-md shadow-orange-700 hover:from-orange-500 hover:to-orange-400"
								type="button">
								Play Now
							</button>
						</Link>

						<span>Meta text here</span>
					</SwiperSlide>
				))}
				<button
					type="button"
					className="absolute top-1/3 z-50 flex h-16 w-11 items-center justify-center rounded-tr-lg rounded-br-lg bg-gray-200"
					ref={prevRef}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-10 w-10 text-white">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5"
						/>
					</svg>
				</button>
				<button
					type="button"
					className="absolute top-1/3 right-0 z-50 flex h-16 w-11 items-center justify-center rounded-tl-lg rounded-bl-lg bg-gray-200"
					ref={nextRef}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-10 w-10 text-white">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</button>
			</Swiper>
		)
	}

	const SectionCard = ({ data }) => (
		<div className="max-w-sm space-y-10">
			<h3 className="text-center text-2xl font-medium uppercase text-orange-400">
				{data.title}
			</h3>
			<p className="text-amber-900">{data.content}</p>
			{data.icon}
		</div>
	)

	const QualityCard = ({ data }) => (
		<div className="max-w-sm space-y-4">
			<h3 className="text-2xl font-medium uppercase text-green-600">
				{data.title}
			</h3>
			<ul className="space-y-6">
				{data.content.map((item, idx) => (
					<li
						key={idx}
						className="flex max-w-xs items-start space-x-3 font-medium text-teal-900">
						<IconTick
							className={
								'w-6 shrink-0 fill-current text-green-500'
							}
						/>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</div>
	)

	return (
		<Layout>
			<Head>
				<title>Home</title>
			</Head>

			{/* Hero section */}
			<section>
				<HeroSlider />
			</section>

			{/* Products section */}
			<section className="py-12">
				<div className="container mx-auto">
					<h2 className="text-center text-2xl font-bold uppercase text-teal-600">
						Play the world's biggest lotteries online at
						jollylotto.com
					</h2>

					<div className="mx-auto mt-10 max-w-6xl">
						<SwiperElm />
					</div>
				</div>
			</section>

			<section className="bg-orange-50 py-14">
				<div className="container mx-auto max-w-6xl">
					<div className="flex justify-between gap-10">
						{sectionData.map((data, idx) => (
							<SectionCard key={idx} data={data} />
						))}
					</div>
					<h2 className="mt-16 text-center text-2xl font-semibold text-orange-400">
						WE DO THE WORK SO YOU CAN HAVE THE FUN!
					</h2>
				</div>
			</section>
			<section className="py-14">
				<div className="container mx-auto max-w-6xl">
					<div className="flex justify-between">
						{qualityData.map((data, idx) => (
							<QualityCard key={idx} data={data} />
						))}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const getStaticProps = async () => {
	const singleProducts = await getSingleProducts()

	return {
		props: { singleProducts },
	}
}
