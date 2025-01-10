import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Points } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getCellClassNames = (x: number, y:number, snake: Points[], food: Points) => {
  const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
  const isFood = food?.x === x && food?.y === y;

  let classNames = "w-8 h-8 border border-neutral-400";
  if (isSnake) classNames += " bg-green-500";
  if (isFood) classNames += " w-8 h-8 bg-food bg-cover bg-center";

  return classNames;
};
