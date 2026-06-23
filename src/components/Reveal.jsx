import { useEffect, useRef, useState } from 'react';

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fades its children in like incense smoke rising — slow opacity + a gentle
 * upward drift, triggered once when the element enters the viewport.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  y = 26,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(reduce);

  useEffect(() => {
    if (reduce || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = reduce
    ? undefined
    : {
        transitionDelay: `${delay}ms`,
        transform: shown ? 'none' : `translateY(${y}px)`,
        opacity: shown ? 1 : 0,
      };

  return (
    <Tag ref={ref} className={`reveal ${shown ? 'is-in' : ''} ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  );
}
