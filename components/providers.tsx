"use client"

import { ContactModalProvider } from "@/hooks/use-contact-modal"
import { ContactModal } from "@/components/contact-modal"
import { useContactModal } from "@/hooks/use-contact-modal"
import { Toaster } from "@/components/ui/toaster"

function ModalWrapper() {
  const { isOpen, close } = useContactModal()
  return <ContactModal open={isOpen} onOpenChange={close} />
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ContactModalProvider>
      {children}
      <ModalWrapper />
      <Toaster />
    </ContactModalProvider>
  )
}