// types/counter.ts

export interface UseCounterProps {
  initialValue?: number;
}

export interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
