import { useEffect, useRef, useState } from "react";

// Returns a ref to attach to an element and whether it has scrolled into view.
// Used to drive the .reveal / .in-view CSS animation defined in index.css.
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setInView(true);
      }),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default useReveal;
