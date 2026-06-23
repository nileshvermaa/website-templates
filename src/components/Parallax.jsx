import { useEffect, useRef } from 'react';

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Drifts a decorative element as the page scrolls — like a leaf settling,
 * never snapping. `speed` is the fraction of scroll distance to move by
 * (negative drifts upward). Updates are rAF-throttled and write directly to
 * the node's transform so React never re-renders.
 */
export default function Parallax({ speed = -0.08, className = '', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if (reduce || !ref.current) return;
    const el = ref.current;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const fromCenter = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(fromCenter * speed).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`parallax ${className}`} {...rest}>
      {children}
    </div>
  );
}
