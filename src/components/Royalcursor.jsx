import { useEffect, useRef } from "react";
import "../styles/RoyalCursor.css";
export default function RoyalCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -200, my = -200; // start off-screen
    let rx = -200, ry = -200;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      // dot follows instantly
      dot.style.transform  = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    };

    // Ring gently lags behind
    const tick = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onDown = () => { dot.classList.add("rc-press"); ring.classList.add("rc-press"); };
    const onUp   = () => { dot.classList.remove("rc-press"); ring.classList.remove("rc-press"); };

    // Hover expansion on interactive elements
    const addHover = (e) => {
      if (e.target.closest("a, button, [role=button], input, label, select, textarea")) {
        ring.classList.add("rc-hover");
        dot.classList.add("rc-hover");
      }
    };
    const removeHover = (e) => {
      if (e.target.closest("a, button, [role=button], input, label, select, textarea")) {
        ring.classList.remove("rc-hover");
        dot.classList.remove("rc-hover");
      }
    };

    window.addEventListener("mousemove",  onMove,      { passive: true });
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    window.addEventListener("mouseover",  addHover,    { passive: true });
    window.addEventListener("mouseout",   removeHover, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("mouseover",  addHover);
      window.removeEventListener("mouseout",   removeHover);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Outer trailing ring */}
      <div ref={ringRef} className="rc-ring" aria-hidden="true" />
      {/* Inner gold diamond dot */}
      <div ref={dotRef}  className="rc-dot"  aria-hidden="true">
        <svg className="rc-diamond" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="8,1 15,8 8,15 1,8"
            fill="none"
            stroke="#C9973A"
            strokeWidth="1.4"
          />
          <polygon
            points="8,4 12,8 8,12 4,8"
            fill="#E8C070"
            opacity="0.9"
          />
        </svg>
      </div>
    </>
  );
}