import { useEffect } from "react";
import { DIRECTION, GRID_SIZE } from "../enum";
import useSnakeHook from "../hooks/useSnakeHook";
import { getCellClassNames } from "@/app/lib/utils";
import GameOver from "./GameOver";
import { Points } from "../types";

type BoardTypes = {
  snake: Points[];
  food: Points | null;
};

const Board = ({ snake, food }: BoardTypes) => (
  <div
    className={`grid grid-cols-${GRID_SIZE.WIDTH} grid-rows-${GRID_SIZE.HEIGHT}`}
  >
    {Array.from({ length: GRID_SIZE.HEIGHT }).map((_, y) => (
      <div className="flex" key={y}>
        {Array.from({ length: GRID_SIZE.WIDTH }).map((_, x) => (
          <div key={x} className={getCellClassNames(x, y, snake, food!)}></div>
        ))}
      </div>
    ))}
  </div>
);

export default function SnakeBoard() {
  const {
    setDirection,
    generateFood,
    direction,
    isGameOver,
    moveSnake,
    snake,
    food,
  } = useSnakeHook();

  useEffect(() => {
    generateFood();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isGameOver) {
      const interval = setInterval(() => {
        moveSnake();
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isGameOver, moveSnake]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && direction !== DIRECTION.DOWN) {
        setDirection(DIRECTION.UP);
      }
      if (e.key === "ArrowDown" && direction !== DIRECTION.UP) {
        setDirection(DIRECTION.DOWN);
      }
      if (e.key === "ArrowLeft" && direction !== DIRECTION.RIGHT) {
        setDirection(DIRECTION.LEFT);
      }
      if (e.key === "ArrowRight" && direction !== DIRECTION.LEFT) {
        setDirection(DIRECTION.RIGHT);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, setDirection]);

  return <>{isGameOver ? <GameOver /> : <Board snake={snake} food={food} />}</>;
}
