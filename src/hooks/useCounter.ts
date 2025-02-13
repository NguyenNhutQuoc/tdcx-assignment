// hooks/useCounter.ts

import { useCallback, useEffect, useState } from "react";
import { UseCounterProps, UseCounterReturn } from "@/types/counter";

const STORAGE_KEY = "counter";

export const useCounter = ({
  initialValue = 0,
}: UseCounterProps = {}): UseCounterReturn => {
  // Initialize state with value from localStorage if available
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    const savedCount = localStorage.getItem(STORAGE_KEY);
    return savedCount ? parseInt(savedCount, 10) : initialValue;
  });

  // Save to localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, count.toString());
  }, [count]);

  const increment = useCallback(() => {
    setCount((prev: number) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev: number) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
