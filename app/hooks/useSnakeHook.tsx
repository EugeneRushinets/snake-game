import { useState } from "react";
import { DIRECTION, GRID_SIZE } from "../enum";
import { Points } from "../types";

type DirectionType =
  | DIRECTION.DOWN
  | DIRECTION.UP
  | DIRECTION.LEFT
  | DIRECTION.RIGHT;

export default function useSnakeHook() {
  const [snake, setSnake] = useState<Points[]>([
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 },
  ]);
  const [food, setFood] = useState<Points | null>(null);
  const [direction, setDirection] = useState<DirectionType>(DIRECTION.RIGHT);
  const [isGameOver, setIsGameOver] = useState(false);

  const checkCollision = (head: Points, snake: Points[]): boolean => {
    return (
      head.x < 0 ||
      head.x >= GRID_SIZE.WIDTH ||
      head.y < 0 ||
      head.y >= GRID_SIZE.HEIGHT ||
      snake.some((segment) => segment.x === head.x && segment.y === head.y)
    );
  };

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case DIRECTION.UP:
        head.y -= 1;
        break;
      case DIRECTION.DOWN:
        head.y += 1;
        break;
      case DIRECTION.LEFT:
        head.x -= 1;
        break;
      case DIRECTION.RIGHT:
        head.x += 1;
        break;
      default:
        break;
    }

    if (checkCollision(head, newSnake)) {
      setIsGameOver(true);
      return;
    }

    newSnake.unshift(head);

    if (head.x === food?.x && head.y === food?.y) {
      generateFood();
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const generateFood = () => {
    const x = Math.floor(Math.random() * GRID_SIZE.WIDTH);
    const y = Math.floor(Math.random() * GRID_SIZE.HEIGHT);
    setFood({ x, y });
  };

  return {
    snake,
    setSnake,
    food,
    setFood,
    direction,
    setDirection,
    moveSnake,
    generateFood,
    isGameOver,
    setIsGameOver,
  };
}
