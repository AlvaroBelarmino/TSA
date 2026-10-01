"use client"

import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"
import Image from "next/image"
import { type CSSProperties, useEffect, useRef } from "react"

type MethodStep = {
  number: string
  title: string
  description: string
  icon: string
}

const parallaxDepths = [48, 36, 44, 32]

const mobileStepParallax = keyframes`
  from {
    transform: translate3d(0, var(--method-parallax-start), 0);
  }

  to {
    transform: translate3d(0, var(--method-parallax-end), 0);
  }
`

export function MobileMethodSteps({ steps }: { steps: MethodStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 47.997rem) and (prefers-reduced-motion: no-preference)",
    )
    const container = containerRef.current
    const supportsScrollTimeline = CSS.supports("animation-timeline: view()")

    if (!container) return

    const updateOffsets = () => {
      if (!mediaQuery.matches || supportsScrollTimeline) {
        container.querySelectorAll<HTMLElement>("[data-method-step]").forEach((step) => {
          step.style.removeProperty("--method-parallax-offset")
        })
        return
      }

      const viewportCenter = window.innerHeight / 2

      container.querySelectorAll<HTMLElement>("[data-method-step]").forEach((step, index) => {
        const bounds = step.getBoundingClientRect()
        const distanceFromCenter = bounds.top + bounds.height / 2 - viewportCenter
        const progress = Math.max(-1, Math.min(1, distanceFromCenter / window.innerHeight))
        const depth = parallaxDepths[index] ?? 0

        step.style.setProperty("--method-parallax-offset", `${progress * depth}px`)
      })
    }

    updateOffsets()
    window.addEventListener("scroll", updateOffsets, { passive: true })
    window.addEventListener("resize", updateOffsets)
    mediaQuery.addEventListener("change", updateOffsets)

    return () => {
      window.removeEventListener("scroll", updateOffsets)
      window.removeEventListener("resize", updateOffsets)
      mediaQuery.removeEventListener("change", updateOffsets)
    }
  }, [])

  return (
    <SimpleGrid
      ref={containerRef}
      columns={{ base: 1, md: 2, lg: 4 }}
      gap="0"
      borderTopWidth="1px"
      borderColor="border.subtle"
      minW="0"
      w="full"
    >
      {steps.map((step, index) => (
        <Stack
          key={step.number}
          data-method-step
          style={
            {
              "--method-parallax-start": `${parallaxDepths[index] ?? 0}px`,
              "--method-parallax-end": `-${parallaxDepths[index] ?? 0}px`,
            } as CSSProperties
          }
          position="relative"
          pt="9"
          pb="8"
          px={{ base: "0", lg: index === 0 ? "0" : "7" }}
          pr={{ base: "0", lg: "7" }}
          borderBottomWidth={{ base: "1px", lg: "0" }}
          borderLeftWidth={{ base: "0", lg: index === 0 ? "0" : "1px" }}
          borderColor="border.subtle"
          gap="4"
          minW="0"
          css={{
            "@media (max-width: 47.997rem) and (prefers-reduced-motion: no-preference)": {
              transform: "translate3d(0, var(--method-parallax-offset, 0px), 0)",
              willChange: "transform",
              "@supports (animation-timeline: view())": {
                animation: `${mobileStepParallax} 1ms linear both`,
                animationRange: "entry 0% exit 100%",
                animationTimeline: "view(block)",
              },
            },
          }}
        >
          <Box
            position="absolute"
            top="-7px"
            left={{ base: "0", lg: index === 0 ? "0" : "7" }}
            boxSize={index === 3 ? "4" : "3.5"}
            borderRadius="full"
            bg={index === 3 ? "brand.primary" : "accent.warm"}
          />
          <Flex
            boxSize="12"
            borderWidth="1px"
            borderColor="rgba(244, 132, 32, 0.45)"
            borderRadius="full"
            align="center"
            justify="center"
            bg="bg.canvas"
          >
            <Image
              src={step.icon}
              alt=""
              width={829}
              height={829}
              style={{ width: "22px", height: "22px", objectFit: "contain" }}
            />
          </Flex>
          <Text textStyle="micro" color="brand.primary">
            {step.number}
          </Text>
          <Heading as="h3" textStyle="h3" color="brand.primary">
            {step.title}
          </Heading>
          <Text textStyle="body" color="fg.default">
            {step.description}
          </Text>
        </Stack>
      ))}
    </SimpleGrid>
  )
}
