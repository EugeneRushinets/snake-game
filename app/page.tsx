"use client";

import { useState } from "react";
import WelcomeModal from "./components/WelcomeModal";
import { SnakeContext } from "./context/SnakeContext";
import SnakeBoard from "./components/SnakeBoard";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <SnakeContext.Provider value={{ isOpen, setIsOpen }}>
        <WelcomeModal />
        {!isOpen && <SnakeBoard />}
      </SnakeContext.Provider>
    </main>
  );
}
