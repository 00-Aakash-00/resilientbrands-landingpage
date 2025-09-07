import { useScreenSize } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export default function ServicesSection() {
  const { isMobile, isSmallMobile } = useScreenSize()
  const services = [
    {
      title: "Compliance",
      items: ["PCI DSS", "ISO 27001", "SOC 2"],
    },
    {
      title: "Adversarial & Penetration Testing",
      items: [
        "Exploitation testing",
        "Post exploitation testing",
        "Milestone proof collection",
      ],
    },
    {
      title: "Privacy Requirements",
      items: ["GDPR", "CPPA", "DSARs and DPIAs"],
    },
  ];

  return (
    <section className={cn("relative bg-black", isMobile ? "py-12" : "py-20")}>
      <div className={cn("max-w-7xl mx-auto", isMobile ? "px-4" : "px-4 sm:px-6")}>
        <div className={cn("text-center", isMobile ? "mb-8" : "mb-12")}>
          <h2 className={cn("font-bold text-white", isSmallMobile ? "text-2xl mb-4" : isMobile ? "text-3xl mb-4" : "text-4xl md:text-5xl mb-6")}>
            Popular eye-opening services
          </h2>
          <p className={cn("text-white/60 max-w-4xl mx-auto", isMobile ? "text-base px-4" : "text-lg")}>
            Many organizations have regulatory and readiness gaps that force their brand to under perform
          </p>
        </div>

        <div className={cn("grid grid-cols-1 md:grid-cols-3", isMobile ? "gap-4 mb-8" : "gap-8 mb-12")}>
          {services.map((service, index) => (
            <div
              key={index}
              className={cn("bg-black border border-cyan/30 rounded-2xl hover:border-cyan/60 hover:bg-cyan/5 transition-all duration-300 group", isMobile ? "p-4" : "p-6")}
            >
              <h3 className={cn("font-semibold text-cyan group-hover:text-cyan-bright transition-colors", isMobile ? "text-lg mb-3" : "text-xl mb-4")}>
                {service.title}
              </h3>
              <ul className={cn(isMobile ? "space-y-1" : "space-y-2")}>
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={cn("flex items-start text-white/70 group-hover:text-white/90 transition-colors", isMobile && "text-sm")}
                  >
                    <span className="text-cyan mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={cn("text-center text-white/60 max-w-4xl mx-auto", isMobile ? "text-sm px-4" : "")}>
          Sometimes your business maturity and performance depends on fresh eyes, our testers and providers are among the best, fastest, and goal oriented teams around.
        </p>
      </div>
    </section>
  );
}