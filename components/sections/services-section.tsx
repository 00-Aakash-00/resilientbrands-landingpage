export default function ServicesSection() {
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
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Popular eye-opening services
          </h2>
          <p className="text-lg text-white/60 max-w-4xl mx-auto">
            Many organizations have regulatory and readiness gaps that force their brand to under perform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black border border-cyan/30 rounded-2xl p-6 hover:border-cyan/60 hover:bg-cyan/5 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-cyan mb-4 group-hover:text-cyan-bright transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-white/70 group-hover:text-white/90 transition-colors"
                  >
                    <span className="text-cyan mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-white/60 max-w-4xl mx-auto">
          Sometimes your business maturity and performance depends on fresh eyes, our testers and providers are among the best, fastest, and goal oriented teams around.
        </p>
      </div>
    </section>
  );
}