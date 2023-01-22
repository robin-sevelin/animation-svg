gsap.to('#big-wheel-one', {
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: 'none',
  transformOrigin: 'center center',
});

gsap.to('#big-wheel-two', {
  rotation: -360,
  duration: 10,
  repeat: -1,
  ease: 'none',
  transformOrigin: 'center center',
});

gsap.to('#big-wheel-three', {
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: 'none',
  transformOrigin: 'center center',
});

gsap.to('#small-wheel-one', {
  rotation: 360,
  duration: 5,
  repeat: -1,
  ease: 'power1',
  transformOrigin: 'center center',
});

gsap.to('#small-wheel-two', {
  rotation: -360,
  duration: 3,
  repeat: -1,
  ease: 'power3',
  transformOrigin: 'center center',
});

gsap.fromTo(
  '#letter-s',
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    duration: 1,
    opacity: 1,
  }
);

gsap.fromTo(
  '#letter-v',
  {
    y: -100,
    scale: 0,
  },
  {
    y: 0,
    duration: 1,
    scale: 1,
  }
);

gsap.fromTo(
  '#letter-g',
  {
    x: 100,
  },
  {
    x: 0,
    fill: 'red',
    duration: 1,
  }
);
