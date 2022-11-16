import 'antd/dist/antd.less';
import '../styles/globals.css'
import '@ircsignpost/signpost-base/styles/locale-select-page.less';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
