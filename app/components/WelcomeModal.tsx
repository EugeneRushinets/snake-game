"use client";

import { DialogHeader } from "@/app/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { useContext } from "react";
import { SnakeContext } from "../context/SnakeContext";

export default function WelcomeModal() {
  const { isOpen, setIsOpen } = useContext(SnakeContext);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElements = e.currentTarget
      .elements as typeof e.currentTarget.elements & {
      name: { value: string };
    };
    const name = formElements.name.value;
    if (name && setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="w-[400px] h-[400px] flex items-start justify-center border border-neutral-500 p-4 rounded-sm">
        <DialogHeader>
          <DialogTitle className="text-xl text-slate-600 font-bold text-center mb-4">
            Welcone to snake game!
          </DialogTitle>
          <div>
            <p className="text-lg font-semibold mb-4 text-slate-500">
              Use the arrow keys to move the snake
            </p>
            <h3 className="text-lg font-medium mb-4">
              To start the game you need to fill the fields
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-end justify-end"
            >
              <div className="w-full flex flex-col items-start justify-start">
                <label htmlFor="name" className="mb-2">
                  Name:
                </label>
                <input
                  className="w-full py-1 pl-2 pr-8 border border-neutral-500 text-lg text-foreground"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-neutral-500 hover:bg-neutral-600 p-2 px-8 rounded-md text-white"
              >
                Start
              </button>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
