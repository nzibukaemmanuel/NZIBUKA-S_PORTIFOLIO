/** Observes `el` and invokes `onIntersect` once it enters the viewport, then disconnects. */
export function observeOnce(
  el: Element,
  onIntersect: () => void,
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
): () => void {
  if (!('IntersectionObserver' in window)) {
    onIntersect();
    return () => {};
  }
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        onIntersect();
        observer.unobserve(entry.target);
      }
    }
  }, options);
  observer.observe(el);
  return () => observer.disconnect();
}
