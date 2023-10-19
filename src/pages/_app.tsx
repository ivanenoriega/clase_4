import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => (
    <>
      Layout top
      <Component {...pageProps} />
      Layout bottom
    </>
  ))

  return getLayout(<Component {...pageProps} />)
}
