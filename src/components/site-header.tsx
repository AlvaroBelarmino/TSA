"use client"

import { Box, Button, Container, Flex, HStack, IconButton, Link, Stack } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu"

interface SiteHeaderProps {
  whatsappNumber?: string
}

const navItems = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Método", "#metodo"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
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
    const onScroll = () => setScrolled(window.scrollY > 32)
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
      position="fixed"
      inset="0 0 auto"
      zIndex="sticky"
      bg={scrolled || menuOpen ? "rgba(247, 243, 238, 0.94)" : "transparent"}
      borderBottomWidth="1px"
      borderColor={scrolled || menuOpen ? "border.subtle" : "transparent"}
      backdropFilter={scrolled || menuOpen ? "blur(14px)" : "none"}
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
          <Link href="#inicio" aria-label="TSA Gestão Contábil — início" flexShrink="0">
            <Box
              position="relative"
              width="clamp(88px, 22vw, 148px)"
              aspectRatio="870 / 630"
            >
              <Image
                src="/logo-white-reduzida.png"
                alt=""
                fill
                priority
                sizes="148px"
                aria-hidden={scrolled || menuOpen}
                style={{
                  objectFit: "contain",
                  opacity: scrolled || menuOpen ? 0 : 1,
                  transition: "opacity 480ms ease-in-out",
                }}
              />
              <Image
                src="/logo-dark-reduzida.png"
                alt=""
                fill
                priority
                sizes="148px"
                aria-hidden={!(scrolled || menuOpen)}
                style={{
                  objectFit: "contain",
                  opacity: scrolled || menuOpen ? 1 : 0,
                  transform: "scale(0.79)",
                  transition: "opacity 480ms ease-in-out, transform 480ms ease-in-out",
                }}
              />
            </Box>
          </Link>

          <HStack
            as="nav"
            aria-label="Navegação principal"
            gap="8"
            display={{ base: "none", lg: "flex" }}
          >
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                textStyle="cta"
                color={scrolled ? "brand.primary" : "fg.onBrand"}
                transition="color 480ms ease-in-out"
                _hover={{ color: "accent.warm" }}
              >
                {label}
              </Link>
            ))}
          </HStack>

          <HStack gap="2" flexShrink="0" minW="0">
            <Button
              asChild
              bg={scrolled || menuOpen ? "brand.primary" : "accent.warm"}
              color={scrolled || menuOpen ? "fg.onBrand" : "brand.primary"}
              borderRadius="full"
              px={{ base: "3", md: "6" }}
              flexShrink="1"
              maxW={{ base: "46vw", sm: "none" }}
              _hover={{ bg: scrolled || menuOpen ? "accent.balance" : "fg.onBrand" }}
              transition="background-color 480ms ease-in-out, color 480ms ease-in-out"
            >
              <a
                href={whatsappHref}
                target={normalizedNumber ? "_blank" : undefined}
                rel={normalizedNumber ? "noreferrer" : undefined}
              >
                <Box as="span" display={{ base: "none", sm: "inline" }}>
                  Falar no WhatsApp
                </Box>
                <Box as="span" display={{ base: "inline", sm: "none" }}>
                  WhatsApp
                </Box>
                <LuArrowUpRight />
              </a>
            </Button>
            <IconButton
              display={{ base: "inline-flex", lg: "none" }}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              variant="ghost"
              color={scrolled || menuOpen ? "brand.primary" : "fg.onBrand"}
              _hover={{
                bg: scrolled || menuOpen ? "rgba(0,56,88,0.08)" : "rgba(247,243,238,0.12)",
              }}
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
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                textStyle="cta"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
