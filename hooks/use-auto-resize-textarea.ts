"use client"

import { useEffect, useRef } from "react"

interface UseAutoResizeTextareaProps {
  minHeight?: number
  maxHeight?: number
}

export function useAutoResizeTextarea({ minHeight = 72, maxHeight = 300 }: UseAutoResizeTextareaProps = {}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const adjustHeight = (reset = false) => {
    const textarea = textareaRef.current
    if (textarea) {
      if (reset) {
        textarea.style.height = `${minHeight}px`
        return
      }
      textarea.style.height = "auto"
      const scrollHeight = textarea.scrollHeight
      const newHeight = Math.max(minHeight, Math.min(scrollHeight, maxHeight))
      textarea.style.height = `${newHeight}px`
    }
  }

  useEffect(() => {
    adjustHeight()
  }, [])

  return { textareaRef, adjustHeight }
}
