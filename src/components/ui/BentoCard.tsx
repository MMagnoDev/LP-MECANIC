"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        delay: delay 
      }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
      className={cn(
        "bg-zinc-900/50 backdrop-blur-md rounded-md p-6 md:p-10 border border-zinc-800 shadow-sm overflow-hidden relative group",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
