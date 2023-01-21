gsap.to('#big-wheel-one', {
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: 'none',
});

gsap.to('#big-wheel-two', {
  rotation: -360,
  duration: 10,
  repeat: -1,
  ease: 'none',
});

gsap.to('#big-wheel-three', {
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: 'none',
});

gsap.to('#small-wheel-one', {
  rotation: 360,
  duration: 5,
  repeat: -1,
  ease: 'none',
});

gsap.to('#small-wheel-two', {
  rotation: -360,
  duration: 5,
  repeat: -1,
  ease: 'none',
});

gsap.to('#letter-s', {
  y: -10,
  duration: 1.5,
  repeat: -1,
  yoyo: 'true',
  fill: 'purple',
});

gsap.to('#letter-v', {
  scale: 0.8,
  duration: 1,
  repeat: -1,
  yoyo: 'true',
  fill: 'red',
});

gsap.to('#letter-g', {
  scale: 1.2,
  duration: 0.5,
  repeat: -1,
  yoyo: 'true',
  fill: 'green',
});
