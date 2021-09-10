import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"

import { AsyncCounter } from "./"

describe("AsyncCounter", () => {
  afterEach(() => {
    cleanup()
  })

  // 初期画面表示時のテスト
  test("render", () => {
    const { asFragment } = render(<AsyncCounter />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe("click:count:カウントアップ", () => {
    test("ボタン押下 1 秒後は 1 カウントアップ", () => {
      jest.useFakeTimers() /** 時間詐称 1. タイマーをJestが提供するフェイクのものに差し替える */
      render(<AsyncCounter />)
      const button = screen.getByText("AsyncIncrement")
      fireEvent.click(button)
      // コンポーネントの内部でのアップデートには act 関数でラップする必要がある
      act(() => {
        jest.runAllTimers() // 2. フェイクタイマーの macrotask 全てを掃けさせる
      })
      screen.getByText("AsyncCount: 1")
      jest.useRealTimers() /** 時を戻そう 3. タイマーを通常に戻す */
    })
  })

  describe("click:count:ボタン活性・非活性", () => {
    test("ボタン押下直後はボタンが非活性", () => {
      render(<AsyncCounter />)
      const button = screen.getByText("AsyncIncrement")
      fireEvent.click(button)
      expect(button).toBeDisabled()
    })
    test("ボタン押下 1 秒後はボタンが活性", () => {
      jest.useFakeTimers() /** 時間詐称 */
      render(<AsyncCounter />)
      const button = screen.getByText("AsyncIncrement")
      fireEvent.click(button)
      act(() => {
        jest.runAllTimers()
      })
      expect(button).not.toBeDisabled()
      jest.useRealTimers() /** 時を戻そう */
    })
  })

  describe("click:count:ローディング UI", () => {
    test("ボタン押下直後はローディングが表示", () => {
      render(<AsyncCounter />)
      const button = screen.getByText("AsyncIncrement")
      fireEvent.click(button)
      expect(screen.queryByText("...Loading")).toBeInTheDocument()
    })
    test("ボタン押下直後はローディングが非表示", () => {
      jest.useFakeTimers() /** 時間詐称 */
      render(<AsyncCounter />)
      const button = screen.getByText("AsyncIncrement")
      fireEvent.click(button)
      act(() => {
        jest.runAllTimers()
      })
      expect(screen.queryByText("...Loading")).not.toBeInTheDocument()
      jest.useRealTimers() /** 時を戻そう */
    })
  })
})
