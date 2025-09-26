"use client";
import { ArrowRight, Bot, Check, ChevronDown, Paperclip } from "lucide-react";
import type React from "react";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { OpenAIIcon, GeminiIcon, AnthropicIcon } from "@/components/ui/icons";
import { useContactModal } from "@/hooks/use-contact-modal";
import { useScreenSize } from "@/hooks/use-mobile";

export const AI_MODELS = [
  "GPT-4.1 Mini",
  "GPT-4.1",
  "o3-mini",
  "Gemini 2.5 Flash",
  "Claude 3.5 Sonnet",
];

export const MODEL_ICONS: Record<string, React.ReactNode> = {
  "o3-mini": <OpenAIIcon />,
  "Gemini 2.5 Flash": <GeminiIcon />,
  "Claude 3.5 Sonnet": <AnthropicIcon />,
  "GPT-4.1 Mini": <OpenAIIcon />,
  "GPT-4.1": <OpenAIIcon />,
};

export default function AIPrompt() {
  const [value, setValue] = useState("");
  const { isMobile, isSmallMobile } = useScreenSize();
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: isMobile ? 60 : 72,
    maxHeight: isMobile ? 200 : 300,
  });
  const [selectedModel, setSelectedModel] = useState("GPT-4.1 Mini");
  const { open: openContactModal } = useContactModal();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (value.trim()) {
      openContactModal();
      setValue("");
      adjustHeight(true);
    }
  };

  return (
    <div className={`w-full ${isMobile ? 'max-w-full' : 'max-w-3xl'}`}>
      <div className={`bg-white ${isMobile ? 'rounded-lg p-0.5' : 'rounded-2xl p-1.5'} shadow-2xl border border-black/5`}>
        <div className="relative">
          <div className="relative flex flex-col">
            <Textarea
              id="ai-input-15"
              value={value}
              aria-label="AI prompt input - describe your business needs"
              placeholder={isMobile ? "Describe your business needs..." : "Describe your needs and business - Be as detailed as you'd like."}
              className={cn(
                `w-full ${isMobile ? 'rounded-md' : 'rounded-xl'} rounded-b-none ${isMobile ? 'px-3 py-2' : 'px-4 py-3'} bg-white border-none text-black placeholder:text-neutral-500 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 ${isSmallMobile ? 'text-sm' : 'text-base'}`,
                isMobile ? "min-h-[50px]" : "min-h-[72px]"
              )}
              ref={textareaRef}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setValue(e.target.value);
                adjustHeight();
              }}
            />
            <div className={`${isMobile ? 'h-10' : 'h-14'} bg-white ${isMobile ? 'rounded-b-md' : 'rounded-b-xl'} flex items-center`}>
              <div className={`absolute ${isMobile ? 'left-2 right-2 bottom-2' : 'left-3 right-3 bottom-3'} flex items-center justify-between ${isMobile ? 'w-[calc(100%-16px)]' : 'w-[calc(100%-24px)]'}`}>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`flex items-center gap-1 ${isMobile ? 'h-7 pl-0.5 pr-1.5 text-[10px]' : 'h-8 pl-1 pr-2 text-xs'} rounded-md text-black hover:bg-neutral-100 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-blue-500`}
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={selectedModel}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.15 }}
                            className="flex items-center gap-1"
                          >
                            <div className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} flex items-center justify-center`}>
                              {MODEL_ICONS[selectedModel]}
                            </div>
                            {isMobile ? selectedModel.split(' ')[0] : selectedModel}
                            <ChevronDown className={`${isMobile ? 'w-2.5 h-2.5' : 'w-3 h-3'} text-black opacity-70`} />
                          </motion.div>
                        </AnimatePresence>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className={cn(
                        "min-w-[10rem]",
                        "border-black/10",
                        "text-black bg-white"
                      )}
                    >
                      {AI_MODELS.map((model) => (
                        <DropdownMenuItem
                          key={model}
                          onSelect={() => setSelectedModel(model)}
                          className="flex items-center justify-between gap-2"
                        >
                          <div className={`flex items-center ${isMobile ? 'gap-1.5' : 'gap-2'}`}>
                            <div className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} flex items-center justify-center`}>
                              {MODEL_ICONS[model] || (
                                <Bot className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} opacity-50`} />
                              )}
                            </div>
                            <span>{model}</span>
                          </div>
                          {selectedModel === model && (
                            <Check className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} text-blue-500`} />
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div className={`${isMobile ? 'h-3' : 'h-4'} w-px bg-neutral-200 ${isMobile ? 'mx-0' : 'mx-0.5'}`} />
                  <label
                    className={cn(
                      `rounded-lg ${isMobile ? 'p-1.5' : 'p-2'} cursor-pointer`,
                      "hover:bg-neutral-100 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-blue-500",
                      "text-neutral-500 hover:text-black"
                    )}
                    aria-label="Attach file"
                  >
                    <input type="file" className="hidden" />
                    <Paperclip className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} transition-colors`} />
                  </label>
                </div>
                <button
                  type="button"
                  className={cn(
                    `rounded-lg ${isMobile ? 'p-1.5' : 'p-2'}`,
                    "hover:bg-neutral-100 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-blue-500"
                  )}
                  aria-label="Send message"
                  disabled={!value.trim()}
                  onClick={handleSubmit}
                >
                  <ArrowRight
                    className={cn(
                      `${isMobile ? 'w-3 h-3' : 'w-4 h-4'} text-black transition-opacity duration-200`,
                      value.trim() ? "opacity-100" : "opacity-30"
                    )}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
