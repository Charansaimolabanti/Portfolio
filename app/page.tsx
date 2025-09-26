import Hero from "./pagecopy";
import { TimelineDemo } from "./timeline2";
import { ScratchToReveal } from "@/components/ui/scratch-to-reveal";
import Image from "next/image";
import ClickSpark from "@/components/ClickSpark";
import { BackgroundBeamsWithCollision } from "@/components/ui/shadcn-io/background-beams-with-collision";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { FloatingDockDemo } from "@/components/ui/ducks";
import Resume from "../components/resume";
import TechnologiesShowcase from "@/components/TechnologiesShowcase";
import ContactPage from "./contact";

export default function Home() {
  return (
    <div>
    <div>
      <div className="relative w-full overflow-clip">
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Hero />
          <BackgroundBeamsWithCollision>
            <div className="flex flex-col md:flex-row items-center justify-center p-6 sm:p-12 md:p-20 gap-8 md:gap-16">
              {/* Scratch Card Section */}
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-amber-100 text-lg sm:text-xl md:text-2xl font-semibold mb-4">
                  Scratch To Reveal
                </h1>
                <ScratchToReveal
                  width={250}
                  height={250}
                  minScratchPercentage={70}
                  className="flex items-center justify-center overflow-hidden rounded-2xl"
                  gradientColors={["#4f34d9", "#6737ad", "#1b1b87"]}
                >
                  <Image
                    src="/dev.png"
                    alt="Developer"
                    width={250}
                    height={250}
                    className="rounded-xl object-cover"
                  />
                </ScratchToReveal>
              </div>

              {/* Text Section */}
              <div className="flex items-center justify-center md:justify-start text-center md:text-left">
                <div>
                  <div>
                    <h1
                      className="text-red-700 text-2xl"
                      style={{ fontFamily: "StormGust, sans-serif" }}
                    >
                      CHARAN SAI MOLABANTI
                    </h1>
                  </div>
                  <br />
                  <div className="text-amber-100">
                    <p>
                      I am a passionate B.Tech student with a strong interest in
                      building innovative and user-friendly web applications.
                    </p>
                    <p>
                      With hands-on experience in{" "}
                      <span className="text-indigo-600">
                        HTML, CSS, JavaScript, React, Next.js, and backend
                        technologies.
                      </span>
                    </p>
                    <p>
                      I enjoy transforming ideas into functional digital
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundBeamsWithCollision>
          <TimelineDemo />
        </ClickSpark>

        <Particles
          className="absolute inset-0 pointer-events-none"
          quantity={100}
          ease={80}
          staticity={50}
          color="#803ae0"
          size={2.0}
        />
      </div>

      <div id="resume">
        <Resume />
      </div>
      <TechnologiesShowcase />
      {/* <ContactPage /> */}
      
    </div>
    <FloatingDockDemo />
    </div>
  );
}
