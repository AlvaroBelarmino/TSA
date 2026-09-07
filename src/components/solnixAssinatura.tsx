"use client"

import { Box, chakra, HStack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { LuArrowUpRight } from "react-icons/lu"

export default function SolnixAssinatura() {
  return (
    <chakra.a
      href="https://solnix.com.br/"
      target="_blank"
      rel="noopener noreferrer"
      role="group"
      display="inline-flex"
      alignItems="center"
      gap="2.5"
      overflow="hidden"
      py="1.5"
      pr="3"
      pl="1.5"
      border="1px solid rgba(244, 132, 32, 0.35)"
      borderRadius="14px"
      background="linear-gradient(120deg, rgba(244, 132, 32, 0.12), rgba(255, 255, 255, 0.035))"
      transition="border-color 220ms ease, background 220ms ease, transform 220ms ease, box-shadow 220ms ease"
      _hover={{
        borderColor: "accent.warm",
        background: "linear-gradient(120deg, rgba(244, 132, 32, 0.2), rgba(255, 255, 255, 0.07))",
        boxShadow: "0 10px 28px rgba(244, 132, 32, 0.13)",
        textDecoration: "none",
        transform: "translateY(-2px)",
      }}
      _focusVisible={{ outline: "2px solid var(--chakra-colors-accent-warm)", outlineOffset: "3px" }}
    >
      <Box
        position="relative"
        width="34px"
        height="34px"
        display="grid"
        flexShrink="0"
        placeItems="center"
        borderRadius="10px"
        background="rgba(255, 255, 255, 0.08)"
        overflow="hidden"
      >
        <Box
          position="absolute"
          inset="7px"
          borderRadius="full"
          background="accent.warm"
          opacity="0.2"
          filter="blur(8px)"
          transition="opacity 220ms ease, transform 220ms ease"
          _groupHover={{ opacity: 0.5, transform: "scale(1.25)" }}
          aria-hidden="true"
        />
        <Box
          position="relative"
          width="19px"
          height="22px"
          transition="transform 240ms cubic-bezier(0.22, 1, 0.36, 1)"
          _groupHover={{ transform: "rotate(-5deg) scale(1.08)" }}
        >
          <Image src="/LogoSolnix.svg" alt="" fill sizes="19px" style={{ objectFit: "contain" }} />
        </Box>
      </Box>

      <Box>
        <Text color="rgba(247, 245, 241, 0.6)" fontSize="9px" fontWeight="700" letterSpacing="0.08em" lineHeight="1" textTransform="uppercase">
          Desenvolvido por
        </Text>
        <HStack mt="1" gap="1.5" color="fg.onBrand">
          <Image src="/LogoEscritaSolnix.png" alt="Solnix" width={1937} height={591} sizes="62px" style={{ width: "62px", height: "19px", objectFit: "contain", objectPosition: "left center" }} />
          <Box display="flex" color="accent.warm" transition="transform 220ms ease" _groupHover={{ transform: "translate(2px, -2px)" }}>
            <LuArrowUpRight size="13" aria-hidden="true" />
          </Box>
        </HStack>
      </Box>
    </chakra.a>
  )
}
