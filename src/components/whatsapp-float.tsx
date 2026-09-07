"use client"

import { Box, Link } from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa"

interface WhatsappFloatProps {
  href: string
}

export function WhatsappFloat({ href }: WhatsappFloatProps) {
  return (
    <Box
      position="fixed"
      right={{ base: "4", md: "6" }}
      bottom={{ base: "4", md: "6" }}
      zIndex="sticky"
      css={{
        animation: "tsa-wa-soft 2.8s ease-in-out infinite",
        "@keyframes tsa-wa-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
        "@media (prefers-reduced-motion: reduce)": {
          animation: "none",
        },
      }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp da TSA — você tem 1 mensagem"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSize="14"
        borderRadius="full"
        bg="#25D366"
        color="white"
        boxShadow="0 10px 28px rgba(37, 211, 102, 0.45)"
        transition="transform 220ms ease, box-shadow 220ms ease, filter 220ms ease"
        _hover={{
          transform: "scale(1.06)",
          boxShadow: "0 14px 34px rgba(37, 211, 102, 0.55)",
          textDecoration: "none",
          filter: "brightness(1.05)",
        }}
      >
        <FaWhatsapp size={30} aria-hidden="true" />

        <Box
          as="span"
          position="absolute"
          top="-1"
          right="-1"
          minW="22px"
          h="22px"
          px="1"
          borderRadius="full"
          bg="#FF3B30"
          color="white"
          borderWidth="2px"
          borderColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="11px"
          fontWeight="700"
          lineHeight="1"
          fontFamily="body"
          boxShadow="0 4px 10px rgba(0,0,0,0.18)"
          css={{
            animation: "tsa-wa-badge 1.6s ease-in-out infinite",
            "@keyframes tsa-wa-badge": {
              "0%, 100%": { transform: "scale(1)" },
              "50%": { transform: "scale(1.12)" },
            },
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
        >
          1
        </Box>
      </Link>
    </Box>
  )
}
