import { renderHook } from "@testing-library/react-hooks"

import { useInitialAnalytics } from "~/hooks/useInitialAnalytics"
import * as analyticsModule from "~/libs/analytics"

// jest.spyOn():実際の関数を監視してどういった引数で呼ばれたか何回呼ばれたかなどを格納するインスタンスを返す
// このインスタンスに対して呼び出し有無や引数が適切かをテストするといったアプローチをとっていく
const spiedSetStatus = jest.spyOn(analyticsModule, "setStatus")
const spiedSendPageview = jest.spyOn(analyticsModule, "sendPageview")

test("useInitialAnalytics 初回実行", () => {
  // renderHook: Hooksをテストするために必要なもの
  renderHook(() => useInitialAnalytics({ id: "foo", role: "bar" }))
  // setStatus関数が{ id: "foo", role: "bar" }を引数として呼び出されたことをテストしてる
  expect(spiedSetStatus).toBeCalledWith({ id: "foo", role: "bar" })
  // sendPageview関数が呼び出されたかをテストしている
  expect(spiedSendPageview).toBeCalled()
})
