"use client";
import React from "react";
import {
  TextRevealCard,
  
} from "../components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center  h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the Development! "
      >
       
        
      </TextRevealCard>
    </div>
  );
}
