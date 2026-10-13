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
      const scrollThreshold = 0
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

  const desktopScrolled = scrolled && !menuOpen

  return (
    <Box
      as="header"
      position={{ base: "fixed", lg: desktopScrolled ? "fixed" : "relative" }}
      inset={{ base: "0 0 auto", lg: desktopScrolled ? "0 0 auto" : "auto" }}
      zIndex="sticky"
      minH={{ base: "0", lg: desktopScrolled ? "0" : "88px" }}
      pointerEvents={{ base: "auto", lg: "none" }}
    >
      <Box
        position={{ base: "relative", lg: desktopScrolled ? "absolute" : "relative" }}
        top={{ base: "auto", lg: desktopScrolled ? "12px" : "0" }}
        left={{ base: "auto", lg: desktopScrolled ? "50%" : "auto" }}
        transform={{ base: "none", lg: desktopScrolled ? "translateX(-50%)" : "none" }}
        w={{
          base: "100%",
          lg: desktopScrolled ? "min(1280px, calc(100% - 96px))" : "100%",
        }}
        pointerEvents="auto"
        bg={{
          base: menuOpen ? "bg.canvas" : scrolled ? "bg.canvas" : "transparent",
          lg: desktopScrolled ? "rgba(0, 56, 88, 0.84)" : menuOpen ? "bg.canvas" : "white",
        }}
        borderWidth={{ base: "0 0 1px", lg: "1px" }}
        borderColor={scrolled || menuOpen ? "border.subtle" : "transparent"}
        backdropFilter={{ base: "none", lg: desktopScrolled ? "blur(14px)" : "none" }}
        borderRadius={{ base: "0", lg: desktopScrolled ? "full" : "0" }}
        boxShadow={{ base: "none", lg: desktopScrolled ? "0 12px 32px rgba(0, 56, 88, 0.16)" : "none" }}
        transition="background-color 700ms cubic-bezier(0.16, 1, 0.3, 1), border-color 700ms cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 700ms cubic-bezier(0.16, 1, 0.3, 1), width 700ms cubic-bezier(0.16, 1, 0.3, 1), min-height 700ms cubic-bezier(0.16, 1, 0.3, 1), top 700ms cubic-bezier(0.16, 1, 0.3, 1), border-radius 700ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 700ms cubic-bezier(0.16, 1, 0.3, 1)"
      >
        <Container maxW="1440px" px={{ base: "5", md: "8", xl: "12" }} minW="0">
        <Flex
          minH={{ base: "76px", lg: desktopScrolled ? "72px" : "88px" }}
          align="center"
          justify="space-between"
          gap="3"
          minW="0"
        >
          <ScrollLink target="inicio" aria-label="TSA Gestão Contábil: início" flexShrink="0">
            <Box
              position="relative"
              width={{ base: "84px", md: "clamp(64px, 15vw, 104px)" }}
              aspectRatio="870 / 630"
            >
              <Box
                position="absolute"
                inset="0"
                opacity={{ base: scrolled || menuOpen ? 0 : 1, lg: desktopScrolled ? 1 : 0 }}
                transition="opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)"
                aria-hidden={scrolled || menuOpen}
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
                opacity={{ base: scrolled || menuOpen ? 1 : 0, lg: desktopScrolled ? 0 : 1 }}
                transition="opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)"
                transform="scale(0.79)"
                aria-hidden={!(scrolled || menuOpen)}
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
                color={{ base: scrolled ? "brand.primary" : "fg.onBrand", lg: desktopScrolled ? "fg.onBrand" : "brand.primary" }}
                transition="color 700ms cubic-bezier(0.16, 1, 0.3, 1)"
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
              bg={{ base: scrolled || menuOpen ? "brand.primary" : "accent.warm", lg: desktopScrolled ? "accent.warm" : "brand.primary" }}
              color={{ base: scrolled || menuOpen ? "fg.onBrand" : "brand.primary", lg: desktopScrolled ? "brand.primary" : "fg.onBrand" }}
              borderRadius="full"
              px="6"
              flexShrink="0"
              _hover={{ bg: desktopScrolled ? "fg.onBrand" : "accent.balance" }}
              transition="background-color 700ms cubic-bezier(0.16, 1, 0.3, 1), color 700ms cubic-bezier(0.16, 1, 0.3, 1)"
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
              color={{ base: scrolled || menuOpen ? "brand.primary" : "fg.onBrand", lg: "brand.primary" }}
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
