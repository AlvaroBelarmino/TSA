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
      const scrollThreshold = window.innerWidth < 1024 ? 32 : 520
      setScrolled(window.scrollY > scrollThreshold)

      if (window.scrollY > scrollThreshold) {
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

  const darkSurface = scrolled && !menuOpen

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      w="100%"
      minH={{ base: "0", lg: "88px" }}
      pointerEvents={{ base: "auto", lg: "none" }}
    >
      <Box
        position={{ base: "relative", lg: "absolute" }}
        top={{ base: "auto", lg: darkSurface ? "12px" : "0" }}
        left={{ base: "auto", lg: "50%" }}
        transform={{ base: "none", lg: "translateX(-50%)" }}
        w={{
          base: "100%",
          lg: darkSurface ? "min(1280px, calc(100% - 96px))" : "100%",
        }}
        pointerEvents="auto"
        bg={{
          base: menuOpen ? "bg.canvas" : scrolled ? "bg.canvas" : "transparent",
          lg: darkSurface ? "rgba(0, 56, 88, 0.84)" : "transparent",
        }}
        borderWidth={{ base: "0 0 1px", lg: "1px" }}
        borderColor={scrolled || menuOpen ? "border.subtle" : "transparent"}
        backdropFilter={{ base: "none", lg: darkSurface ? "blur(14px)" : "none" }}
        borderRadius={{ base: "0", lg: darkSurface ? "full" : "0" }}
        boxShadow={{ base: "none", lg: darkSurface ? "0 12px 32px rgba(0, 56, 88, 0.16)" : "none" }}
        transition={{
          base: "background 480ms ease-in-out, border-color 480ms ease-in-out, backdrop-filter 480ms ease-in-out",
          lg: "background 480ms ease-in-out, border-color 480ms ease-in-out, backdrop-filter 480ms ease-in-out, width 420ms cubic-bezier(0.22, 1, 0.36, 1), top 420ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 420ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 420ms ease-in-out",
        }}
      >
        <Container maxW="1440px" px={{ base: "5", md: "8", xl: "12" }} minW="0">
        <Flex
          minH={{ base: "76px", lg: darkSurface ? "72px" : "88px" }}
          align="center"
          justify="space-between"
          gap="3"
          minW="0"
          transition="min-height 240ms ease-out"
        >
          <ScrollLink target="inicio" aria-label="TSA Gestão Contábil: início" flexShrink="0">
            <Box
              position="relative"
              width="clamp(64px, 15vw, 104px)"
              aspectRatio="870 / 630"
            >
              <Box
                position="absolute"
                inset="0"
                opacity={{ base: scrolled || menuOpen ? 0 : 1, lg: darkSurface ? 1 : 0 }}
                transition={{
                  base: "opacity 480ms ease-in-out",
                  lg: "opacity 280ms ease-in-out",
                }}
                aria-hidden="true"
              >
                <Image
                  src="/logo-white-reduzida.png"
                  alt=""
                  fill
                  priority
                  sizes="104px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box
                position="absolute"
                inset="0"
                opacity={{ base: scrolled || menuOpen ? 1 : 0, lg: darkSurface ? 0 : 1 }}
                transition={{
                  base: "opacity 480ms ease-in-out, transform 480ms ease-in-out",
                  lg: "opacity 280ms ease-in-out",
                }}
                transform="scale(0.79)"
                aria-hidden="true"
              >
                <Image
                  src="/logo-dark-reduzida.png"
                  alt=""
                  fill
                  priority
                  sizes="104px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
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
                color={{ base: scrolled ? "brand.primary" : "fg.onBrand", lg: darkSurface ? "fg.onBrand" : "brand.primary" }}
                transition={{
                  base: "color 480ms ease-in-out",
                  lg: "color 240ms ease-in-out",
                }}
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
              bg={{ base: scrolled || menuOpen ? "brand.primary" : "accent.warm", lg: darkSurface ? "accent.warm" : "brand.primary" }}
              color={{ base: scrolled || menuOpen ? "fg.onBrand" : "brand.primary", lg: darkSurface ? "brand.primary" : "fg.onBrand" }}
              borderRadius="full"
              px="6"
              flexShrink="0"
              _hover={{ bg: darkSurface ? "fg.onBrand" : "accent.balance" }}
              transition={{
                base: "background-color 480ms ease-in-out, color 480ms ease-in-out",
                lg: "background-color 240ms ease-in-out",
              }}
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
    </Box>
  )
}
