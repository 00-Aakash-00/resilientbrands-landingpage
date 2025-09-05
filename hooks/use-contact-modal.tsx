"use client"

import * as React from "react"

interface ContactModalContextType {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const ContactModalContext = React.createContext<ContactModalContextType | undefined>(undefined)

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const open = React.useCallback(() => setIsOpen(true), [])
  const close = React.useCallback(() => setIsOpen(false), [])
  const toggle = React.useCallback(() => setIsOpen(prev => !prev), [])

  return (
    <ContactModalContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const context = React.useContext(ContactModalContext)
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider")
  }
  return context
}