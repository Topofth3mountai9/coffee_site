import React, { useState, useEffect, useRef } from 'react';

const useAnimatedNumber = (end, duration = 2500, shouldAnimate) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const startTimeRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!shouldAnimate || hasAnimatedRef.current) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      const newCount = Math.round(percentage * end);

      if (newCount !== countRef.current) {
        setCount(newCount);
        countRef.current = newCount;
      }

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        hasAnimatedRef.current = true;
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration, shouldAnimate]);

  return count;
};

const AnimatedNumberCustomOnce = ({ end, duration = 2500, className }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef(null);
  const count = useAnimatedNumber(end, duration, shouldAnimate);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
};

export default AnimatedNumberCustomOnce;
