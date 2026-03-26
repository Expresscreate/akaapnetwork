import { useEffect, useRef } from 'react';

/**
 * Adds the class 'revealed' to all elements matching [data-reveal]
 * inside the given container once they enter the viewport.
 */
export function useScrollReveal(threshold = 0.15) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return containerRef;
}
