'use client'

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Particles } from "@/components/ui/shadcn-io/particles";
import ClickSpark from "@/components/ClickSpark";
import TargetCursor from "@/components/TargetCursor";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { LinkPreview } from "@/components/ui/link-preview";

export function TimelineDemo() {
  const data = [
    {
      title: "Portfolio (Old)",
      url: "",
      content: (
        <div className="space-y-2">
          <LinkPreview url="http://www.charansaimolabanti.rf.gd/?i=1">
            <div className="flex flex-col mb-2 text-xs font-normal text-neutral-200 hover:scale-105 transition-all overlay-hidden no-scrollbar z-0 cursor-crosshair">
              <Terminal>
                <TypingAnimation className="text-emerald-500">
                  $ This is my first portfolio project built using HTML and CSS.
                </TypingAnimation>
                <AnimatedSpan>
                  ✅ It showcases a clean and responsive layout with a focus on design basics.
                </AnimatedSpan>
                <AnimatedSpan>
                  ✅ I created multiple sections like Home, About, Projects, and Contact.
                </AnimatedSpan>
                <AnimatedSpan>
                  ✅ CSS was used to style elements, manage layout, and ensure mobile responsiveness.
                </AnimatedSpan>
                  <div className="text-xs text-neutral-200">
            🔗 Live Preview:&nbsp;
            <p
              className="underline decoration-accent-foreground text-blue-600"
            >
              http://www.charansaimolabanti.rf.gd
            </p>
          </div>
              </Terminal>
            </div>
          </LinkPreview>

           
        
        </div>
      ),
    },
    {
      title: "URL Checker",
      url: "https://url-checker-47ma.vercel.app/",
      content: (
        <div className="space-y-2">
          <LinkPreview url="https://url-checker-47ma.vercel.app/">
            <div className="flex flex-col mb-2 text-xs font-normal text-neutral-200 hover:scale-105 transition-all overlay-hidden no-scrollbar z-0 cursor-crosshair">
              <Terminal>
                <TypingAnimation className="text-emerald-500">
                  $ This is my second project, built using HTML and CSS.
                </TypingAnimation>
                <AnimatedSpan>
                  ✅ Designed a clean, minimal UI to focus users on function over form.
                </AnimatedSpan>
                <AnimatedSpan>
                  ✅ Implemented input validation, asynchronous checks, and real-time feedback.
                </AnimatedSpan>
                <AnimatedSpan>
                  ✅ Demonstrated full deployment workflow using Vercel hosting and CI.
                </AnimatedSpan>
                 <div className="text-xs text-neutral-200">
            🔗 Live Preview:&nbsp;
            <p
             
            
              rel="noopener noreferrer"
              className="underline decoration-accent-foreground text-blue-600"
            >
              https://url-checker-47ma.vercel.app/
            </p>
          </div>
              </Terminal>
            </div>
            
          </LinkPreview>

           
         
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <Timeline data={data} />
        <Particles
          className="absolute inset-0 pointer-events-none"
          quantity={100}
          ease={80}
          staticity={50}
          color="#803ae0"
          size={2.0}
        />
      </ClickSpark>
    </div>
  );
}
