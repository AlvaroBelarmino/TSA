"use client"

import { Reveal } from "@/components/reveal"
import { Box, Grid, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useRef } from "react"

type MethodStep = {
  number: string
  title: string
  description: string
  icon: string
}

export function MobileMethodSteps({ steps }: { steps: MethodStep[] }) {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0

    const updateNumberProgress = (progress: number) => {
      const timelineRect = timeline.getBoundingClientRect()
      const horizontal = window.matchMedia("(min-width: 62rem)").matches
      const endpoint = horizontal
        ? timelineRect.left + timelineRect.width * progress
        : timelineRect.top + timelineRect.height * progress

      timeline.querySelectorAll<HTMLElement>("[data-method-number]").forEach((number) => {
        const numberRect = number.getBoundingClientRect()
        const start = horizontal ? numberRect.left : numberRect.top
        const size = horizontal ? numberRect.width : numberRect.height
        const numberProgress = Math.min(Math.max((endpoint - start) / Math.max(size, 1), 0), 1)

        number.style.setProperty("--number-progress", numberProgress.toFixed(4))
      })
    }

    const updateProgress = () => {
      frame = 0

      if (reducedMotion.matches) {
        timeline.style.setProperty("--method-progress", "1")
        updateNumberProgress(1)
        return
      }

      const horizontal = window.matchMedia("(min-width: 62rem)").matches
      const section = horizontal ? timeline.closest("section") : null
      const rect = (section ?? timeline).getBoundingClientRect()
      const start = horizontal ? window.innerHeight * 0.6 : window.innerHeight * 0.7
      const distance = horizontal
        ? Math.max(rect.height * 0.55, 1)
        : Math.max(rect.height + start - window.innerHeight * 0.22, 1)
      const progress = Math.min(Math.max((start - rect.top) / distance, 0), 1)

      timeline.style.setProperty("--method-progress", progress.toFixed(4))
      updateNumberProgress(progress)
    }

    const requestUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)
    reducedMotion.addEventListener("change", requestUpdate)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      reducedMotion.removeEventListener("change", requestUpdate)
    }
  }, [])

  return (
    <Grid
      ref={timelineRef}
      as="ol"
      position="relative"
      templateColumns={{ base: "1fr", lg: "repeat(4, minmax(0, 1fr))" }}
      gap="0"
      m="0"
      p="0"
      listStyleType="none"
      _before={{
        content: '""',
        position: "absolute",
        top: { base: "0", lg: "1.28rem" },
        bottom: { base: "0", lg: "auto" },
        left: { base: "1.3rem", lg: "0" },
        right: { base: "auto", lg: "0" },
        w: { base: "1px", lg: "auto" },
        h: { base: "auto", lg: "1px" },
        bg: "rgba(0, 56, 88, 0.18)",
        zIndex: "0",
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: { base: "0", lg: "1.28rem" },
        bottom: { base: "0", lg: "auto" },
        left: { base: "1.3rem", lg: "0" },
        w: { base: "1px", lg: "100%" },
        h: { base: "100%", lg: "1px" },
        bg: "accent.warm",
        zIndex: "0",
        transformOrigin: { base: "top", lg: "left" },
        transform: {
          base: "scaleY(var(--method-progress, 0))",
          lg: "scaleX(var(--method-progress, 0))",
        },
      }}
      css={{
        "@media (prefers-reduced-motion: reduce)": {
          "&::after": { transform: "none" },
        },
      }}
    >
      {steps.map((step, index) => (
        <Box
          as="li"
          key={step.number}
          position="relative"
          zIndex="1"
          minW="0"
          pr={{ base: "0", lg: "7" }}
          pb={{ base: index === steps.length - 1 ? "0" : "10", lg: "0" }}
          role="group"
        >
          <Reveal delay={index * 90} y={16}>
            <Box position="relative" minH={{ base: "8rem", lg: "auto" }} pt={{ base: "0", lg: "3.6rem" }} pl={{ base: "4.2rem", lg: "0" }}>
              <Box
                as="span"
                data-method-number
                position="absolute"
                zIndex="2"
                top="0"
                left="0"
                display="grid"
                placeItems="center"
                boxSize="2.6rem"
                borderRadius="full"
                bg="conic-gradient(#f48420 calc(var(--number-progress, 0) * 1turn), rgba(0, 56, 88, 0.18) 0)"
                boxShadow="0 0 0 8px #F7F3EE"
                color="#c85d06"
                fontFamily="heading"
                fontSize="0.9rem"
                transition="background 250ms ease, color 250ms ease, transform 250ms ease"
                _before={{
                  content: '""',
                  position: "absolute",
                  inset: "1.5px",
                  zIndex: "0",
                  borderRadius: "full",
                  bg: "bg.canvas",
                  transition: "background 250ms ease",
                }}
                _groupHover={{
                  color: "white",
                  transform: "scale(1.08)",
                  _before: { bg: "accent.warm" },
                }}
              >
                <Box as="span" position="relative" zIndex="1">
                  {step.number}
                </Box>
              </Box>
              <Box
                display="grid"
                placeItems="center"
                boxSize={{ base: "2.7rem", lg: "3.5rem" }}
                mb={{ base: "3", lg: "5" }}
                border="1px solid rgba(0, 56, 88, 0.13)"
                borderRadius="full"
              >
                <Image
                  src={step.icon}
                  alt=""
                  width={829}
                  height={829}
                  style={{ width: "1.7rem", height: "1.7rem", objectFit: "contain" }}
                />
              </Box>
              <Heading as="h3" maxW={{ base: "38ch", lg: "14ch" }} color="brand.primary" fontSize="clamp(1.35rem, 1.8vw, 1.9rem)" lineHeight="1.2">
                {step.title}
              </Heading>
              <Text mt="2.5" maxW={{ base: "38ch", lg: "27ch" }} color="#29475b" fontSize="0.87rem" lineHeight="1.55">
                {step.description}
              </Text>
            </Box>
          </Reveal>
        </Box>
      ))}
    </Grid>
  )
}
