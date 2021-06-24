import Link from 'next/link'
// default export しないとだめ
// ディレクトリ/ファイル名 がパスになる 今回だと→ 「posts/first-post」
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}