import { timeDelay } from '@/utils/constants';
import { useEffect, useState } from 'react';

export default function useDebounce(value: string, delay: number = timeDelay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
