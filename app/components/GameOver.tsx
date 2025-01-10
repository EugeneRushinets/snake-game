import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { useContext, useState } from "react";
import { SnakeContext } from "../context/SnakeContext";

export default function GameOver() {
  const { setIsOpen } = useContext(SnakeContext);
  const [isOpenGameModal, setIsOpenGameModal] = useState(true);

  const handleClick = () => {
    setIsOpenGameModal(false);
    setIsOpen(true);
  };

  return (
    <Dialog open={isOpenGameModal}>
      <DialogContent className="w-[400px] h-[400px] flex items-start justify-center border border-neutral-500 p-4 rounded-sm">
        <DialogHeader>
          <DialogTitle className="text-xl text-slate-600 font-bold text-center mb-4">
            Game Over
          </DialogTitle>
          <button
            className="mt-4 bg-neutral-500 hover:bg-neutral-600 p-2 px-8 rounded-md text-white"
            onClick={handleClick}
          >
            Back to home page
          </button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
