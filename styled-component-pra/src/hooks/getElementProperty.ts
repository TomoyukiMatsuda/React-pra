import { RefObject, useCallback } from "react";

// conditional types：型の条件分岐を行って型の推論を行うためのもの
// [K in keyof T] には T のkeyが入る、今回は height, width,
// : T[K] extends number ? K : never;
type FilterType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type DomRectNumberKeys = FilterType<DOMRect, number>;

export const useGetElementProperty = <T extends HTMLElement>(
  elementRef: RefObject<T>
) => {
  const getElementProperty = useCallback(
    (targetProperty: DomRectNumberKeys): number => {
      const clientRect = elementRef.current?.getBoundingClientRect();
      if (clientRect) {
        return clientRect[targetProperty];
      }

      return 0;
    },
    [elementRef]
  );

  return {
    getElementProperty,
  };
};
