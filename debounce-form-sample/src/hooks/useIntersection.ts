import { MutableRefObject, useEffect, useState } from "react";

export const useIntersection = (
  ref: MutableRefObject<HTMLDivElement> | null
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, [ref?.current]);

  return isIntersecting;
};
