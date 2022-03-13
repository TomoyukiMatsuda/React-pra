import { RefObject, useCallback } from "react";

// conditional types：型の条件分岐を行って型の推論を行うためのもの
// [K in keyof T] には T のkeyが入る、今回は height, width,
// : T[K] extends number ? K : never;
type FilterType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type DOMRectNumberKeys = FilterType<DOMRect, number>;
// 上記と同じ型になる
type DOMRectProperty =
  | "height"
  | "width"
  | "x"
  | "y"
  | "top"
  | "right"
  | "bottom"
  | "left";

// RefObjectの型は div, span, p, input などのさまざまなHTML要素に対応できるようにextendsで制限をかけつつ抽象化
export const useGetElementProperty = <T extends HTMLElement>(
  elementRef: RefObject<T>
) => {
  const getElementProperty = useCallback(
    // 引数のtargetProperty をDOMRectのもつPropertyに限定する
    (targetProperty: DOMRectProperty): number => {
      const clientRect = elementRef.current?.getBoundingClientRect();
      if (clientRect) {
        return clientRect[targetProperty];
      }

      // clientRect が undefined のときはデフォルトで0を返すようにする
      return 0;
    },
    [elementRef]
  );

  return {
    getElementProperty,
  };
};
