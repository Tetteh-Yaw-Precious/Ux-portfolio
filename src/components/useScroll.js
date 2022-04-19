//framer motion
import { useAnimation } from "framer-motion";

//React intersection observer
import { useInView } from "react-intersection-observer";

export const UseScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls, view];
};
