function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

/** Eased count-up from 0 to `target`, calling `onTick` on every animation frame. */
export function animateCount(target: number, duration: number, onTick: (value: number) => void): void {
  const start = performance.now();
  function tick(now: number): void {
    const progress = clamp((now - start) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    onTick(Math.floor(target * eased));
    if (progress < 1) requestAnimationFrame(tick);
    else onTick(target);
  }
  requestAnimationFrame(tick);
}
