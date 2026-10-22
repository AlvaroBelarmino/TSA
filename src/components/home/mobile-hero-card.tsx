"use client"

import { Grid } from "@chakra-ui/react"
import { useEffect, useRef, type ReactNode } from "react"

interface MobileHeroCardProps {
  children: ReactNode
}

export function MobileHeroCard({ children }: MobileHeroCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const mobileMedia = window.matchMedia("(max-width: 63.997rem)")
    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frameId: number | undefined
    let listening = false

    const updatePosition = () => {
      frameId = undefined

      if (!mobileMedia.matches || reducedMotionMedia.matches) {
        card.style.transform = ""
        card.style.willChange = ""
        return
      }

      const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 0.55, 1), 1)
      card.style.transform = `translate3d(0, ${-72 * progress}px, 0)`
      card.style.willChange = "transform"
    }

    const schedulePositionUpdate = () => {
      if (frameId !== undefined) return
      frameId = window.requestAnimationFrame(updatePosition)
    }

    const syncListeners = () => {
      const shouldListen = mobileMedia.matches && !reducedMotionMedia.matches

      if (shouldListen && !listening) {
        window.addEventListener("scroll", schedulePositionUpdate, { passive: true })
        listening = true
      }

      if (!shouldListen && listening) {
        window.removeEventListener("scroll", schedulePositionUpdate)
        listening = false
      }

      schedulePositionUpdate()
    }

    syncListeners()
    window.addEventListener("resize", schedulePositionUpdate)
    mobileMedia.addEventListener("change", syncListeners)
    reducedMotionMedia.addEventListener("change", syncListeners)

    return () => {
      if (frameId !== undefined) window.cancelAnimationFrame(frameId)
      if (listening) window.removeEventListener("scroll", schedulePositionUpdate)
      window.removeEventListener("resize", schedulePositionUpdate)
      mobileMedia.removeEventListener("change", syncListeners)
      reducedMotionMedia.removeEventListener("change", syncListeners)
    }
  }, [])

  return (
    <Grid
      ref={cardRef}
      w="full"
      templateColumns={{ base: "minmax(0, 1fr)", lg: "minmax(0, 640px) auto" }}
      gap={{ base: "8", lg: "10" }}
      alignItems="center"
      bg={{ base: "bg.canvas", lg: "transparent" }}
      borderTopRadius={{ base: "32px", lg: "0" }}
      px={{ base: "6", md: "8", lg: "0" }}
      pt={{ base: "10", lg: "0" }}
      pb={{ base: "16", lg: "0" }}
      boxShadow={{ base: "0 -10px 30px rgba(0, 56, 88, 0.08)", lg: "none" }}
      css={{
        "@media (prefers-reduced-motion: reduce)": {
          transform: "none !important",
        },
      }}
    >
      {children}
    </Grid>
  )
}
