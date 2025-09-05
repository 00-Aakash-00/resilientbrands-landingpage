"use client";
import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";

interface Item {
  title: string;
  subtitle: string;
  action: string;
}

let notifications = [
  {
    title: "Tech Debt",
    subtitle: "Eliminated",
    action: "Modernize & simplify",
  },
  {
    title: "Privacy",
    subtitle: "In your control",
    action: "Data rights & DSARs",
  },
  {
    title: "Cyber Maturity",
    subtitle: "Solved",
    action: "Roadmap & metrics",
  },
  {
    title: "Information Technology",
    subtitle: "Optimized",
    action: "Cloud & operations",
  },
  {
    title: "Compliance Checkboxes",
    subtitle: "Managed",
    action: "PCI • ISO 27001 • SOC 2",
  },
  {
    title: "Tool Sprawl",
    subtitle: "Consolidated",
    action: "Right-size your stack",
  },
];

// Duplicate items to create infinite loop effect
notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ item }: { item: Item }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[320px] cursor-pointer overflow-hidden rounded-2xl p-5",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-gradient-to-br from-navy-light/50 to-navy-light/30 backdrop-blur-md border border-cyan/20"
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          <p className="text-cyan/80 text-sm">{item.subtitle}</p>
        </div>
        <button className="px-4 py-1.5 bg-teal-500/10 hover:bg-teal-500/20 rounded-full text-xs text-teal-400 transition-colors border border-teal-500/30 w-fit">
          {item.action}
        </button>
      </div>
    </figure>
  );
};

export default function StackCards() {
  return (
    <div className="relative flex h-[600px] w-full max-w-[350px] flex-col overflow-hidden rounded-2xl">
      <AnimatedList className="max-h-[600px]" delay={2500}>
        {notifications.map((item, idx) => (
          <Notification item={item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
