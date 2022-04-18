export const pageAnimation = {
  //   hidden: {
  //     opacity: 0,
  //     y: 100,
  //   },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
  },
};

export const titleAnim = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeIn" },
};
export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};
export const photoAnim = {
  hidden: {
    scale: 2,
    Opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};
export const nameAnimation = {
  hidden: { opacity: 0, y: 100, position: "absolute" },
  show: {
    opacity: 1,
    y: 0,
    position: "initial",
    transition: { duration: 0.5 },
  },
};
export const container = {
  hidden: { x: 10 },
  show: {
    x: 0,
    transition: { duration: 0.75, ease: "ease-out" },
    staggerChildren: 1,
    when: "afterChildren",
  },
};

export const slideIn = {
  hidden: { x: -10, opacity: 0 },
  show: { x: 0, opacity: 1 },
  transition: { duration: 5, ease: "easeOut" },
};
