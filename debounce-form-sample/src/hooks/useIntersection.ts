import { MutableRefObject, useEffect, useState } from "react";

// TODO: null
export const useIntersection = (
  ref: MutableRefObject<HTMLDivElement> | undefined
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, [ref?.current]);

  return isIntersecting;
};
