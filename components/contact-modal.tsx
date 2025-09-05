"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

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
})

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

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
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      
      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      toast({
        title: "Thank you for your interest!",
        description: "Our team will get in touch with you very soon.",
      })
      
      form.reset()
      onOpenChange(false)
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at hello@resilientbrands.ai",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectTypes = [
    { value: "startup", label: "New Startup" },
    { value: "existing", label: "Existing Business" },
    { value: "idea", label: "Idea Stage" },
    { value: "other", label: "Other" },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] w-[calc(100%-2rem)] max-h-[calc(100vh-2rem)] p-0 overflow-hidden bg-white border border-neutral-200 shadow-xl mx-auto">
        <VisuallyHidden>
          <DialogTitle>Contact Resilient Brands</DialogTitle>
        </VisuallyHidden>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 overflow-y-auto max-h-[calc(100vh-4rem)]"
        >
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
              Start Your Journey
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Get your personalized AI report in minutes
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
              {/* Name and Email - Stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral-700">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          className="h-10 sm:h-10 text-base sm:text-sm border-neutral-300 focus:border-primary bg-white text-neutral-900 placeholder:text-neutral-400"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral-700">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          type="email"
                          className="h-10 sm:h-10 text-base sm:text-sm border-neutral-300 focus:border-primary bg-white text-neutral-900 placeholder:text-neutral-400"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Company and Phone - Stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral-700">
                        Company <span className="text-neutral-400 font-normal text-xs">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Acme Inc." 
                          className="h-10 sm:h-10 text-base sm:text-sm border-neutral-300 focus:border-primary bg-white text-neutral-900 placeholder:text-neutral-400"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral-700">
                        Phone <span className="text-neutral-400 font-normal text-xs">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+1 (555) 000-0000" 
                          type="tel"
                          className="h-10 sm:h-10 text-base sm:text-sm border-neutral-300 focus:border-primary bg-white text-neutral-900 placeholder:text-neutral-400"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Project Type - Full width on mobile */}
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-neutral-700 mb-2 sm:mb-3 block">
                      Project Stage
                    </FormLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {projectTypes.map((type) => (
                        <label
                          key={type.value}
                          className={cn(
                            "relative flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 cursor-pointer transition-all text-sm font-medium",
                            field.value === type.value
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
                          )}
                        >
                          <input
                            type="radio"
                            value={type.value}
                            checked={field.value === type.value}
                            onChange={() => field.onChange(type.value)}
                            className="sr-only"
                          />
                          {type.label}
                        </label>
                      ))}
                    </div>
                    <FormMessage className="text-xs mt-1" />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-neutral-700">
                      Message <span className="text-neutral-400 font-normal text-xs">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="min-h-[80px] text-base sm:text-sm border-neutral-300 focus:border-primary bg-white text-neutral-900 placeholder:text-neutral-400 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs mt-1" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 sm:h-11 text-base sm:text-sm bg-primary hover:bg-primary/90 text-white font-medium group"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-neutral-500 mt-3">
                  Free report • No credit card required
                </p>
              </div>
            </form>
          </Form>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}