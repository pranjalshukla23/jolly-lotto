import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import LoginForm from '@/components/Auth/LoginForm'

export default () => {
	// show login or signup form based on user session state.
	// for now just show registration form.

	return (
		<Layout className={'flex bg-teal-50'}>
			<Head>
				<title>Login</title>
			</Head>
			<LoginForm />
		</Layout>
	)
}
