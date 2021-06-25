import Link from 'next/link'
import Head from "next/head";
import Layout from "../../components/layout";
// default export しないとだめ
// ディレクトリ/ファイル名 がパスになる 今回だと→ 「posts/first-post」
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}