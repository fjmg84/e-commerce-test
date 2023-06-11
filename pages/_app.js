import React from 'react'
import PageLayout from '../component/PageLayout'
import 'animate.css'
import '../styles/global.scss'

export default function MyApp ({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
}
