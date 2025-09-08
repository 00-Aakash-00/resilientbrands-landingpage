"use client";

import AIPrompt from "@/components/ai-prompt";
import DecryptedText from "@/components/ui/decrypted-text";
import Aurora from "@/components/Aurora";
import { WordRotate } from "@/components/magicui/word-rotate";
import { instrumentSerif } from "@/lib/fonts";
import { useScreenSize } from "@/hooks/use-mobile";

export default function HeroSection() {
  const { isMobile, isSmallMobile } = useScreenSize();

  return (
    <header className="relative bg-black">
      <section
        className={`relative ${isMobile ? "min-h-[65vh] mt-2" : "h-screen min-h-[700px]"} w-full text-white overflow-hidden bg-black`}
        aria-label="Hero"
      >
        {/* Container for the centered background effect - like Cursor */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`relative ${isMobile ? "w-[95%] h-[90%] mt-12" : "w-[95%] h-[87%] mt-20"} max-w-full ${isMobile ? "rounded-xl" : "rounded-3xl"} overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900`}
          >
            {/* Aurora background */}
            <div className="absolute inset-0 z-0">
              <Aurora
                colorStops={[
                  "#3B82F6", // Bright blue (start)
                  "#06B6D4", // Cyan (middle)
                  "#34D399", // Light emerald (end)
                ]}
                amplitude={1.8}
                blend={0.7}
                speed={1.2}
              />
            </div>

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none z-10" />
          </div>
        </div>

        <div
          className={`relative z-20 max-w-7xl mx-auto ${isMobile ? "px-4" : "px-4 sm:px-6"} h-full pointer-events-none`}
        >
          <div className="flex flex-col items-center justify-center h-full sm:pt-32">
            {/* Centered Content - positioned higher */}
            <div className={`text-center ${isMobile ? "mt-40 px-2" : "mt-20"}`}>
              <h1
                className={`${instrumentSerif.className} ${
                  isSmallMobile
                    ? "text-3xl leading-tight"
                    : isMobile
                      ? "text-3xl leading-tight"
                      : "text-5xl md:text-7xl lg:text-8xl"
                } font-normal tracking-tight leading-none ${isMobile ? "mb-3" : "mb-6"}`}
              >
                <span
                  className="block mb-2"
                  style={{
                    textShadow:
                      "0 0 20px rgba(0, 230, 251, 0.4), 0 0 40px rgba(0, 230, 251, 0.2)",
                  }}
                >
                  <DecryptedText
                    text="Manage Your Brand"
                    animateOn="view"
                    speed={60}
                    sequential={true}
                    className="text-white"
                    encryptedClassName="text-cyan/50"
                  />
                </span>
                <span
                  className="block"
                  style={{
                    textShadow:
                      "0 0 20px rgba(0, 230, 251, 0.4), 0 0 40px rgba(0, 230, 251, 0.2)",
                  }}
                >
                  <DecryptedText
                    text="Before Others Define It"
                    animateOn="view"
                    speed={60}
                    useOriginalCharsOnly={true}
                    sequential={true}
                    className="bg-gradient-to-r from-cyan to-cyan-bright bg-clip-text text-transparent"
                    encryptedClassName="text-cyan/30"
                  />
                </span>
              </h1>
              <div
                className={`${isMobile ? "mt-3 max-w-[90%] px-2" : "mt-4 max-w-2xl"} mx-auto ${isMobile ? "min-h-[3.5rem]" : "min-h-[4rem]"}`}
              >
                <WordRotate
                  words={[
                    isMobile
                      ? "Take control of your digital presence with trusted providers and expert guidance."
                      : "Your reputation, security, and future should not be left to chance. Compare trusted providers and take control of your digital presence today.",
                    isMobile
                      ? "Connect with experts in your tech stack to achieve your goals without compromise."
                      : "Resilient Brands connects you to experts in your tech stack so you get the right tools and providers to achieve your next goal without compromise.",
                    isMobile
                      ? "Identify brand maturity outcomes in minutes with tailored insights and solutions."
                      : "Start your search and identify your first brand maturity outcomes in minutes. Empower your brand with insights and solutions tailored for resilient growth.",
                  ]}
                  duration={5000}
                  className={`${
                    isSmallMobile
                      ? "text-sm"
                      : isMobile
                        ? "text-base"
                        : "text-base md:text-lg"
                  } font-normal text-white/80 text-center`}
                  motionProps={{
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                />
              </div>

              <div
                className={`w-full ${isMobile ? "max-w-[90%] px-2" : "max-w-3xl"} mx-auto ${isMobile ? "mt-4" : "mt-6"} pointer-events-auto`}
              >
                <AIPrompt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
