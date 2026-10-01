"use client"

import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useRef } from "react"

type MethodStep = {
  number: string
  title: string
  description: string
  icon: string
}

export function MobileMethodSteps({ steps }: { steps: MethodStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 47.997rem) and (prefers-reduced-motion: no-preference)",
    )
    const container = containerRef.current

    if (!container) return

    let frameId = 0

    const updateOffsets = () => {
      frameId = 0

      if (!mediaQuery.matches) {
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
        const depth = [18, -14, 16, -12][index] ?? 0

        step.style.setProperty("--method-parallax-offset", `${progress * depth}px`)
      })
    }

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateOffsets)
    }

    requestUpdate()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)
    mediaQuery.addEventListener("change", requestUpdate)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      mediaQuery.removeEventListener("change", requestUpdate)
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
