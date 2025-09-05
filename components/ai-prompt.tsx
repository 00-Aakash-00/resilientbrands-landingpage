"use client"
import { ArrowRight } from "lucide-react"
import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useContactModal } from "@/hooks/use-contact-modal"

export default function AIPrompt() {
  const [value, setValue] = useState("")
  const { open: openContactModal } = useContactModal()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    if (value.trim()) {
      openContactModal()
      setValue("")
    }
  }

  return (
    <div className="w-full max-w-3xl">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-white/20">
        <input
          type="text"
          value={value}
          placeholder="Describe your needs and business - Be as detailed as you'd like."
          className="w-full px-6 py-5 pr-14 bg-transparent text-gray-800 placeholder:text-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan/50"
          onKeyDown={handleKeyDown}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="button"
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl",
            "bg-black hover:bg-gray-800 transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-cyan/50",
            !value.trim() && "opacity-30 cursor-not-allowed"
          )}
          aria-label="Send message"
          disabled={!value.trim()}
          onClick={handleSubmit}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  )
}
