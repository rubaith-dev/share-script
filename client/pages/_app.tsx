import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode, ComponentType } from 'react'

export default function App({ Component, pageProps }: AppProps): ReactNode {

  return <Component {...pageProps} />
}
