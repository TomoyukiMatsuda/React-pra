const jsonServer = require('json-server')

module.exports = [
  jsonServer.rewriter({ '/api/:ver/*': '/$2' }),
  delay(1_000, 100),
  cleanNull('cardsOrder'),
]

/**
 * ランダムなレイテンシーを再現する
 *
 * min に近い値が出やすい
 *
 * @param {number} max 遅延の最大値（ms）
 * @param {number} min 遅延の最小値（ms）
 */
function delay(max, min = 0) {
  return (req, res, next) => {
    setTimeout(next, Math.random() ** 2 * (max - min) + min)
  }
}

/**
 * null になった値を削除する
 *
 * 不整合を起こさないようGETリクエストのタイミングで実行する
 *
 * @param {string} path 対象のパス
 */
function cleanNull(path) {
  return (req, res, next) => {
    try {
      if (req.method !== 'GET') return

      const db = req.app.db
      const { isNull } = db._

      const newValue = db.get(path).omitBy(isNull).value()
      db.set(path, newValue).write()
    } catch (err) {
      console.error(err)
    } finally {
      next()
    }
  }
}
