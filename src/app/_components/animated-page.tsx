"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

export const AnimatedPage: FC<PropsWithChildren> = ({ children }) => {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={path}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen w-screen"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};
