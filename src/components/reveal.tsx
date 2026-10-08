"use client"

import { Box } from "@chakra-ui/react"
import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  rotate?: number
  variant?: "rise" | "slide" | "image"
}

export function Reveal({ children, delay = 0, y = 24, rotate = 0, variant = "rise" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (!("IntersectionObserver" in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px" },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      width="full"
      height="full"
      maxW="100%"
      minW="0"
      opacity={visible ? 1 : 0}
      transform={
        visible
          ? "translate3d(0, 0, 0) rotate(0deg)"
          : variant === "rise"
            ? `translate3d(0, ${y}px, 0) rotate(${rotate}deg)`
            : variant === "slide"
              ? "translate3d(24px, 0, 0)"
              : "translate3d(0, 18px, 0) scale(1.025)"
      }
      transition={`opacity ${variant === "image" ? 900 : 650}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${variant === "image" ? 900 : 650}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`}
      css={{
        "@media (prefers-reduced-motion: reduce)": {
          opacity: 1,
          transform: "none",
          transition: "none",
        },
      }}
    >
      {children}
    </Box>
  )
}
