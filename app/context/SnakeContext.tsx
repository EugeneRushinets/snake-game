import { createContext, Dispatch, SetStateAction } from "react";

type SnakeContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultValue : SnakeContextType = {
  isOpen: true,
  setIsOpen: () => {}
}

export const SnakeContext = createContext<SnakeContextType>(defaultValue);
