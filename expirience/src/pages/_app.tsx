import '@/styles/globals.css'
import type { AppProps } from 'next/app'




// import css atropos
import 'atropos/css'
// import css swiper
import 'swiper/css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
