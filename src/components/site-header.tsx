"use client"

import { Box, Button, Container, Flex, HStack, IconButton, Stack } from "@chakra-ui/react"
import { ScrollLink } from "@/components/scroll-link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu"

interface SiteHeaderProps {
  whatsappNumber?: string
}

const navItems = [
  ["Início", "inicio"],
  ["Serviços", "servicos"],
  ["Método", "metodo"],
  ["Sobre", "sobre"],
  ["Contato", "contato"],
] as const

export function SiteHeader({
  whatsappNumber = "",
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const normalizedNumber = whatsappNumber.replace(/\D/g, "")
  const whatsappHref = normalizedNumber
    ? `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(
      "Olá! Gostaria de conversar com a TSA Gestão Contábil.",
    )}`
    : "#contato"

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)

      if (window.scrollY > 32) {
        setMenuOpen(false)
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  return (
    <Box
      as="header"
      position="sticky"
      inset="0 0 auto"
      zIndex="sticky"
      bg={
        menuOpen
          ? "bg.canvas"
          : scrolled
            ? "rgba(247, 243, 238, 0.92)"
            : "white"
      }
      borderBottomWidth="1px"
      borderColor={scrolled || menuOpen ? "border.subtle" : "transparent"}
      backdropFilter={menuOpen ? "none" : scrolled ? "blur(14px)" : "none"}
      transition="background 480ms ease-in-out, border-color 480ms ease-in-out, backdrop-filter 480ms ease-in-out"
    >
      <Container maxW="1440px" px={{ base: "5", md: "8", xl: "12" }} minW="0">
        <Flex
          minH={{ base: "76px", md: "88px" }}
          align="center"
          justify="space-between"
          gap="3"
          minW="0"
        >
          <ScrollLink target="inicio" aria-label="TSA Gestão Contábil: início" flexShrink="0">
            <Box
              position="relative"
              width="clamp(64px, 15vw, 104px)"
              aspectRatio="870 / 630"
            >
              <Image
                src="/logo-white-reduzida.png"
                alt=""
                fill
                priority
                sizes="104px"
                aria-hidden="true"
                style={{
                  objectFit: "contain",
                  opacity: 0,
                }}
              />
              <Image
                src="/logo-dark-reduzida.png"
                alt=""
                fill
                priority
                sizes="104px"
                aria-hidden="false"
                style={{
                  objectFit: "contain",
                  opacity: 1,
                  transform: "scale(0.79)",
                }}
              />
            </Box>
          </ScrollLink>

          <HStack
            as="nav"
            aria-label="Navegação principal"
            gap="8"
            display={{ base: "none", lg: "flex" }}
          >
            {navItems.map(([label, target]) => (
              <ScrollLink
                key={target}
                target={target}
                textStyle="cta"
                color="brand.primary"
                _hover={{ color: "accent.warm" }}
              >
                {label}
              </ScrollLink>
            ))}
          </HStack>

          <HStack gap="2" flexShrink="0" minW="0">
            <Button
              asChild
              display={{ base: "none", lg: "inline-flex" }}
              bg="brand.primary"
              color="fg.onBrand"
              borderRadius="full"
              px="6"
              flexShrink="0"
              _hover={{ bg: "accent.balance" }}
              transition="background-color 240ms ease-in-out"
            >
              <a
                href={whatsappHref}
                target={normalizedNumber ? "_blank" : undefined}
                rel={normalizedNumber ? "noreferrer" : undefined}
              >
                Falar no WhatsApp
                <LuArrowUpRight />
              </a>
            </Button>
            <IconButton
              display={{ base: "inline-flex", lg: "none" }}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              variant="ghost"
              color="brand.primary"
              _hover={{ bg: "rgba(0,56,88,0.08)" }}
            >
              {menuOpen ? <LuX size="22" /> : <LuMenu size="22" />}
            </IconButton>
          </HStack>
        </Flex>
        <Box
          display={{ base: menuOpen ? "block" : "none", lg: "none" }}
          color="brand.primary"
          borderTopWidth="1px"
          borderColor="border.subtle"
          py="5"
        >
          <Stack gap="4">
            {navItems.map(([label, target]) => (
              <ScrollLink
                key={target}
                target={target}
                textStyle="cta"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </ScrollLink>
            ))}
            <Button
              asChild
              alignSelf="flex-start"
              bg="brand.primary"
              color="fg.onBrand"
              borderRadius="full"
              px="5"
              _hover={{ bg: "accent.balance" }}
            >
              <a
                href={whatsappHref}
                target={normalizedNumber ? "_blank" : undefined}
                rel={normalizedNumber ? "noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Falar no WhatsApp
                <LuArrowUpRight />
              </a>
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
