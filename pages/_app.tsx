import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

import {Inter } from '@next/font/google'

const inter = Inter ({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
