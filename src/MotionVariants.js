export const staggerContainerVariants = {
  enter: {
    transition: {
      staggerChildren: 0.2,
      duration: 2,
    },
  },
  init: {},
  exit: {
    transition: {
      staggerChildren: 0.1,
      duration: 2,
    },
  },
};

export const staggerContainerVariantsShort = {
  enter: {
    transition: {
      staggerChildren: 0.2,
      duration: 1,
    },
  },
  init: {},
  exit: {
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};

export const slideInVariants = {
  enter: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 0.5 },
    y: 0,
  },
  init: {
    y: 20,
    x: 0,
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};
