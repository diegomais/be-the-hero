import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({
  Component,
  err,
  pageProps,
}: AppProps & { err: any }): JSX.Element {
  return <Component {...pageProps} err={err} />
}
