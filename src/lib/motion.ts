/** Easing aligned with bellagent.ai-style motion (smooth deceleration). */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const transitionBase = {
  duration: 0.55,
  ease: easeOutExpo,
} as const;

export const viewportOnce = {
  once: true,
  margin: '-80px',
  amount: 0.2,
} as const;
