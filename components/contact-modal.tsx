"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import {
  ArrowRight,
  User,
  Mail,
  Building,
  Phone,
  MessageSquare,
  Rocket,
  Briefcase,
  Lightbulb,
  HelpCircle,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { instrumentSerif } from "@/lib/fonts";
import { useScreenSize } from "@/hooks/use-mobile";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.enum(["startup", "existing", "idea", "other"]),
  message: z.string().optional(),
});

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const { toast } = useToast();
  const [, setCurrentStep] = React.useState(0);
  const { isMobile, isSmallMobile } = useScreenSize();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "startup",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Form submission disabled for now
    console.log("Form values:", values);
    
    toast({
      title: "Coming Soon! 🚀",
      description:
        "Our contact form is being set up. Please email us directly at hello@resilientbrands.com",
    });

    form.reset();
    setCurrentStep(0);
    onOpenChange(false);
  }

  const projectTypes = [
    {
      value: "startup",
      label: "New Startup",
      icon: Rocket,
      description: "Building from zero",
    },
    {
      value: "existing",
      label: "Existing Business",
      icon: Briefcase,
      description: "Ready to scale",
    },
    {
      value: "idea",
      label: "Idea Stage",
      icon: Lightbulb,
      description: "Exploring possibilities",
    },
    {
      value: "other",
      label: "Other",
      icon: HelpCircle,
      description: "Something unique",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${isMobile ? 'max-w-[95vw] w-[95vw] max-h-[90vh]' : 'sm:max-w-[600px] w-[calc(100%-2rem)] max-h-[calc(100vh-2rem)]'} p-0 bg-black border border-slate-800 shadow-2xl mx-auto flex flex-col`}>
        <VisuallyHidden>
          <DialogTitle>Contact Resilient Brands</DialogTitle>
        </VisuallyHidden>

        {/* Decorative gradient line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-10" />

        <div className={`overflow-y-auto overflow-x-hidden flex-1 ${isMobile ? 'max-h-[calc(90vh-2rem)]' : ''}`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <pattern
                    id="contact-grid"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1" fill="white" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#contact-grid)" />
                </svg>
              </div>
            </div>

            <div className={`relative ${isMobile ? 'p-4' : 'p-8 sm:p-10'}`}>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`text-center ${isMobile ? 'mb-4' : 'mb-10'}`}
            >
              <h2
                className={`${instrumentSerif.className} ${isSmallMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-4xl sm:text-5xl'} font-normal text-white ${isMobile ? 'mb-1' : 'mb-3'}`}
              >
                Start Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className={`text-neutral-400 ${isSmallMobile ? 'text-sm' : 'text-base'}`}>
                Transform your vision into reality with AI-powered insights
              </p>
            </motion.div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={`${isMobile ? 'space-y-3' : 'space-y-6'}`}
              >
                {/* Personal Info Section */}
                <div className={`${isMobile ? 'space-y-4' : 'space-y-6'}`}>
                  <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 sm:grid-cols-2 gap-5'}`}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={`${isSmallMobile ? 'text-[10px]' : 'text-xs'} font-medium text-neutral-400 uppercase tracking-wider`}>
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                              <Input
                                placeholder="John Doe"
                                className={`${isSmallMobile ? 'h-9' : isMobile ? 'h-10' : 'h-12'} pl-10 bg-slate-900/50 border-slate-800 text-white placeholder:text-neutral-600 focus:border-cyan-500/50 focus:bg-slate-900/80 transition-all ${isSmallMobile ? 'text-sm' : 'text-base'}`}
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className={`${isSmallMobile ? 'text-[10px]' : 'text-xs'} mt-1 text-red-400`} />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={`${isSmallMobile ? 'text-[10px]' : 'text-xs'} font-medium text-neutral-400 uppercase tracking-wider`}>
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                              <Input
                                placeholder="john@example.com"
                                type="email"
                                className={`${isMobile ? 'h-10' : 'h-12'} pl-10 bg-slate-900/50 border-slate-800 text-white placeholder:text-neutral-600 focus:border-cyan-500/50 focus:bg-slate-900/80 transition-all ${isSmallMobile ? 'text-sm' : 'text-base'}`}
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className={`${isSmallMobile ? 'text-[10px]' : 'text-xs'} mt-1 text-red-400`} />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 sm:grid-cols-2 gap-5'}`}>
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={`${isSmallMobile ? 'text-[10px]' : 'text-xs'} font-medium text-neutral-400 uppercase tracking-wider`}>
                            Company{" "}
                            <span className="text-neutral-600 normal-case">
                              (optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                              <Input
                                placeholder="Acme Inc."
                                className={`${isMobile ? 'h-10' : 'h-12'} pl-10 bg-slate-900/50 border-slate-800 text-white placeholder:text-neutral-600 focus:border-cyan-500/50 focus:bg-slate-900/80 transition-all ${isSmallMobile ? 'text-sm' : 'text-base'}`}
                                {...field}
                              />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={`${isSmallMobile ? 'text-[10px]' : 'text-xs'} font-medium text-neutral-400 uppercase tracking-wider`}>
                            Phone{" "}
                            <span className="text-neutral-600 normal-case">
                              (optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                              <Input
                                placeholder="+1 (555) 000-0000"
                                type="tel"
                                className={`${isMobile ? 'h-10' : 'h-12'} pl-10 bg-slate-900/50 border-slate-800 text-white placeholder:text-neutral-600 focus:border-cyan-500/50 focus:bg-slate-900/80 transition-all ${isSmallMobile ? 'text-sm' : 'text-base'}`}
                                {...field}
                              />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Project Type - Creative Cards */}
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`${isSmallMobile ? 'text-[10px]' : 'text-xs'} font-medium text-neutral-400 uppercase tracking-wider ${isMobile ? 'mb-3' : 'mb-4'} block`}>
                        Project Stage
                      </FormLabel>
                      <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-2 sm:grid-cols-4 gap-3'}`}>
                        {projectTypes.map((type) => {
                          const Icon = type.icon;
                          const isSelected = field.value === type.value;
                          return (
                            <motion.label
                              key={type.value}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={cn(
                                `relative flex flex-col items-center ${isMobile ? 'p-3' : 'p-4'} ${isMobile ? 'rounded-lg' : 'rounded-xl'} border cursor-pointer transition-all`,

                                isSelected
                                  ? "border-cyan-500/50 bg-cyan-500/10"
                                  : "border-slate-800 bg-slate-900/30 hover:border-slate-700"
                              )}
                            >
                              <input
                                type="radio"
                                value={type.value}
                                checked={isSelected}
                                onChange={() => field.onChange(type.value)}
                                className="sr-only"
                              />
                              <Icon
                                className={cn(
                                  `${isMobile ? 'w-5 h-5 mb-1.5' : 'w-6 h-6 mb-2'}`,

                                  isSelected
                                    ? "text-cyan-400"
                                    : "text-neutral-500"
                                )}
                              />
                              <span
                                className={cn(
                                  `${isSmallMobile ? 'text-[10px]' : 'text-xs'} font-medium`,

                                  isSelected ? "text-white" : "text-neutral-400"
                                )}
                              >
                                {type.label}
                              </span>
                              <span className={`${isSmallMobile ? 'text-[9px]' : 'text-[10px]'} text-neutral-600 ${isMobile ? 'mt-0.5' : 'mt-1'}`}>
                                {type.description}
                              </span>
                              {isSelected && (
                                <motion.div
                                  layoutId="selected-project"
                                  className="absolute inset-0 border-2 border-cyan-500/30 rounded-xl"
                                  transition={{ type: "spring", bounce: 0.2 }}
                                />
                              )}
                            </motion.label>
                          );
                        })}
                      </div>
                      <FormMessage className={`${isSmallMobile ? 'text-[10px]' : 'text-xs'} mt-2 text-red-400`} />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`${isSmallMobile ? 'text-[10px]' : 'text-xs'} font-medium text-neutral-400 uppercase tracking-wider`}>
                        Tell us about your vision{" "}
                        <span className="text-neutral-600 normal-case">
                          (optional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-neutral-600" />
                          <Textarea
                            placeholder="Share your goals, challenges, or questions..."
                            className={`${isMobile ? 'min-h-[80px]' : 'min-h-[100px]'} pl-10 pt-3 bg-slate-900/50 border-slate-800 text-white placeholder:text-neutral-600 focus:border-cyan-500/50 focus:bg-slate-900/80 transition-all resize-none ${isSmallMobile ? 'text-sm' : 'text-base'}`}
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Submit Section */}
                <div className={`${isMobile ? 'space-y-3' : 'space-y-4'}`}>
                  <Button
                    type="submit"
                    className={`w-full ${isMobile ? 'h-12' : 'h-14'} bg-white hover:bg-white/90 text-black font-semibold ${isSmallMobile ? 'text-sm' : 'text-base'} group transition-all`}
                  >
                    Launch Your Journey
                    <ArrowRight className={`ml-2 ${isMobile ? 'w-4 h-4' : 'w-5 h-5'} group-hover:translate-x-1 transition-transform`} />
                  </Button>

                  <div className={`flex items-center justify-center ${isMobile ? 'gap-4' : 'gap-6'} ${isSmallMobile ? 'text-[10px]' : 'text-xs'} text-neutral-500`}>
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Free AI Report
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      No Credit Card
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      24hr Delivery
                    </span>
                  </div>
                </div>
              </form>
            </Form>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
