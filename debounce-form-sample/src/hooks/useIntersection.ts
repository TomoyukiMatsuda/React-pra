import { MutableRefObject, useEffect, useState } from "react";

export const useIntersection = (ref: MutableRefObject<HTMLDivElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const obseraver = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    obseraver.observe(ref.current);

    return () => obseraver.unobserve(ref.current);
  }, [ref.current]);

  return isIntersecting;
};
