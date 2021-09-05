import { cleanup, fireEvent, render, screen } from "@testing-library/react"

import { Counter } from "./"

// "Counter"はテストグループ名、"render"と"click:count"はテストケース
describe("Counter", () => {
  // テストケース終了ごとにReactコンポーネントを画面からunmountするためのクリーンナップ用ヘルパー関数
  afterEach(() => {
    cleanup()
  })
  test("render", () => {
    const { asFragment, getByText } = render(<Counter />)
    expect(asFragment()).toMatchSnapshot()
    // 最初のレンダリングでテキストの表示が "Count: 0" であることをテスト
    expect(getByText("Count: 0"))
  })
  test("click:count", () => {
    render(<Counter />)
    // "Increment"のテキストが入ったbuttonを取得
    const button = screen.getByText("Increment")
    // 上記で取得したボタンを5回クリックすると
    for (let i = 0; i < 5; i++) {
      fireEvent.click(button)
    }
    // 画面のテキストには Count: 5 というテキストが表示される
    screen.getByText("Count: 5")
  })
})
