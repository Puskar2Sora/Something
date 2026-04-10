import React, { Suspense, useEffect, useRef, useState } from 'react';

const DEFAULT_MIN_HEIGHT = 320;

export default function LazySection({
  children,
  fallback = null,
  rootMargin = '600px 0px',
  minHeight = DEFAULT_MIN_HEIGHT,
}) {
  const hostRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = hostRef.current;
    if (!node || shouldRender) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={hostRef} style={{ minHeight: shouldRender ? undefined : minHeight }}>
      {shouldRender ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
}
