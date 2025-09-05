import AIPrompt from "@/components/ai-prompt";
import StackCards from "@/components/stack-cards";
import DecryptedText from "@/components/ui/decrypted-text";

export default function HeroSection() {
  return (
    <header className="relative">
      <section
        className="relative h-screen min-h-[700px] w-full text-white overflow-hidden"
        aria-label="Hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />

        <div className="relative z-5 max-w-7xl mx-auto px-4 sm:px-6 h-full">
          <div className="flex h-full">
            {/* Left Content */}
            <div className="flex items-center justify-center w-full lg:w-[60%] xl:w-[65%]">
              <div className="">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                  <span className="block">
                    <DecryptedText
                      text="Manage Your Brand"
                      animateOn="view"
                      speed={60}
                      sequential={true}
                      className="text-white"
                      encryptedClassName="text-cyan/50"
                    />
                  </span>
                  <span className="block">
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
                <p className="mt-4 text-sm md:text-lg text-white/90 max-w-2xl">
                  Your reputation, security, and future should not be left to
                  chance. Compare trusted providers and take control of your
                  digital presence today.
                </p>
                <p className="mt-4 text-sm md:text-lg text-white/90 max-w-2xl">
                  Resilient Brands connects you to experts in your tech stack so
                  you get the right tools and providers to achieve your next
                  goal without compromise.
                </p>
                <p className="mt-4 text-sm md:text-lg text-white/90 max-w-2xl">
                  Start your search and identify your first brand maturity
                  outcomes in minutes.
                </p>

                <div className="w-full max-w-xl mt-8">
                  <AIPrompt />
                </div>
              </div>
            </div>

            {/* Right Scrolling Stack */}
            <div className="hidden lg:flex lg:w-[40%] xl:w-[35%] items-center justify-center relative py-20">
              <StackCards />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
