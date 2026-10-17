import { useEffect, useRef } from 'react';

export default function RedSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    if (reducedMotion.matches || !finePointer.matches) return undefined;

    const updatePosition = (event) => {
      spotlight.style.setProperty('--x', `${event.clientX}px`);
      spotlight.style.setProperty('--y', `${event.clientY}px`);
      spotlight.classList.add('red-spotlight--visible');
    };

    const hideSpotlight = () => {
      spotlight.classList.remove('red-spotlight--visible');
    };

    window.addEventListener('pointermove', updatePosition, { passive: true });
    window.addEventListener('pointerleave', hideSpotlight);

    return () => {
      window.removeEventListener('pointermove', updatePosition);
      window.removeEventListener('pointerleave', hideSpotlight);
    };
  }, []);

  return <div ref={spotlightRef} className="red-spotlight" aria-hidden="true" />;
}
