import { useState, useEffect } from 'react';

const useCountUp = (start, end, duration) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(
        start + (progress / duration) * (end - start),
        end
      );
      setCount(currentCount);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);

  return count;
};

export default useCountUp;