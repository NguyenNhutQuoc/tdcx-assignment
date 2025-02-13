// components/Counter/Counter.tsx

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { useCounter } from "../../hooks/useCounter";
import { motion, AnimatePresence } from "framer-motion";

const RollingNumber = ({ number }: { number: number }) => {
  const prevNumber = number - 1;
  const nextNumber = number + 1;

  return (
    <div className="relative h-16 w-16 overflow-hidden">
      <motion.div
        key={number}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
        className="absolute w-full h-full flex items-center justify-center"
      >
        <div className="flex flex-col items-center text-4xl font-bold">
          <span className="block">{nextNumber}</span>
          <span className="block text-primary">{number}</span>
          <span className="block">{prevNumber}</span>
        </div>
      </motion.div>
    </div>
  );
};

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter({
    initialValue: 0,
  });

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Counter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-6">
          <div className="relative flex justify-center">
            <div className="h-16 overflow-hidden flex items-center rounded-lg bg-muted/20">
              <AnimatePresence mode="wait">
                <RollingNumber number={count} />
              </AnimatePresence>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={decrement}
              aria-label="Decrement"
              className="transition-all hover:shadow-lg"
            >
              <Minus className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={increment}
              aria-label="Increment"
              className="transition-all hover:shadow-lg"
            >
              <Plus className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={reset}
              aria-label="Reset"
              className="transition-all hover:shadow-lg"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
