import '@/asset/scss/base.global.scss'
import GlobalMeta from '@/component/Meta/Global'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalMeta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
