import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view, controls]);

  return [element, controls];
};
