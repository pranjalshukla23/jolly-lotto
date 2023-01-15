import React from 'react'
import RegisterForm from '@/components/Auth/RegisterForm'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default () => {
	// show login or signup form based on user session state.
	// for now just show registration form.
	return (
		<Layout className={'flex bg-teal-50'}>
			<Head>
				<title>Register With Us</title>
			</Head>
			<RegisterForm />
		</Layout>
	)
}
