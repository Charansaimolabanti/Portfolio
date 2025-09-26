'use client'

import { BubbleBackground } from "@/components/ui/shadcn-io/bubble-background";
import { BackgroundBeamsWithCollision } from "@/components/ui/shadcn-io/background-beams-with-collision";
import { SparklesCore } from "@/components/ui/shadcn-io/sparkles";
import { BackgroundCircles } from "@/components/ui/shadcn-io/background-circles";
import ClickSpark from "@/components/ClickSpark";
import TrueFocus from "@/components/TrueFocus";
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
 
 
 
  

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Sparkles Layer */}
      
      

      {/* Bubble Background */}    {/* Navbar */}
 
 
      <BubbleBackground interactive={true}>
        
<SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full z-0"
        particleColor="#9403fc"
        speed={1}
      />
          <nav className=" top-0 left-0 w-full flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4 bg-black z-50  ">
          <a href="#" className="text-white text-lg font-bold">
            <div className="text-sm font-semibold text-white">
              <TrueFocus 
                sentence=" CHARAN SAI / MOLABANTI "
                manualMode={false}
                blurAmount={1}
                borderColor="transparent"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>
          </a>
          <div>
             
            <a href="https://www.github.com/Charansaimolabanti"target="_blank">
          <Button  
            variant="outline" 
            size="sm" 
            className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            <GithubIcon className="mr-2 h-4 w-4"/> Github
          </Button> </a> </div>
        </nav>
 
        {/* Background Circles */}
        <BackgroundCircles />
      </BubbleBackground>
 
     </div>
  
  );
}
