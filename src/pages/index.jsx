import React, { useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import Link from 'next/link'
import { getAllProducts } from '@/lib/api'
import Image from 'next/image'
import Head from 'next/head'

const sectionData = [
	{
		title: 'Choice',
		content:
			'Choose which lotteries you want to play. You can play your favorite numbers, or “Quick Pick” for a random selection.',
		icon: '',
	},
	{
		title: 'Confirmation',
		content:
			"As soon as your order id processed we'll send you a confirmation of your lottery numbers and dates of play.",
		icon: '',
	},
	{
		title: 'Winnings',
		content:
			"When you win a lotto prize, we'll immediately notify you and deposit your winning in to your Lotto Express account.",
		icon: '',
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
					<img src="/images/banner-man-1.png" />
					<div>
						<h2>Header Lorem Ipsum</h2>
						<p>Support Lorem Ipsum</p>
						<h2 className="text-7xl">$100 MILLION</h2>
						<a href="#">Play Now</a>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className="bg-sky-200">
				<div className="mx-auto flex max-w-6xl items-center justify-between">
					<img src="/images/banner-man-1.png" />
					<div>
						<h2>Header Lorem Ipsum</h2>
						<p>Support Lorem Ipsum</p>
						<h2 className="text-7xl">$100 MILLION</h2>
						<a href="#">Play Now</a>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	)

	const SwiperElm = () => {
		return (
			<Swiper
				spaceBetween={30}
				slidesPerView={5}
				onSlideChange={() => {}}
				onSwiper={swiper => console.log(swiper)}>
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
			</Swiper>
		)
	}

	const SectionCard = ({ data }) => (
		<div className="max-w-sm space-y-10">
			<h3 className="text-center text-2xl  font-medium uppercase text-orange-400">
				{data.title}
			</h3>
			<p className="text-amber-900">{data.content}</p>
			<Image
				width={80}
				height={80}
				className="mx-auto max-w-[80px]"
				src={'/images/choice-icon.svg'}
			/>
		</div>
	)

	const QualityCard = ({ data }) => (
		<div className="max-w-sm space-y-4">
			<h3 className="text-2xl font-medium uppercase text-green-600">
				{data.title}
			</h3>
			<ul className="space-y-3">
				{data.content.map((item, idx) => (
					<li key={idx} className="font-medium text-neutral-800">
						{item}
					</li>
				))}
			</ul>
		</div>
	)

	return (
		<>
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
		</>
	)
}

export const getStaticProps = async () => {
	const products = await getAllProducts()
	const singleProducts = products.filter(prod => prod.type === 1)

	return {
		props: { singleProducts },
	}
}
