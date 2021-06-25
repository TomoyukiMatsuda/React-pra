import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

// TODO: レッスン4. プリレンダリングとデータフェッチング
// https://qiita.com/thesugar/items/01896c1faa8241e6b1bc#%E3%83%AC%E3%83%83%E3%82%B9%E3%83%B33-%E3%82%A2%E3%82%BB%E3%83%83%E3%83%88%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BFcss
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}