"use client"

import { Box, Button, Container, Flex, HStack, IconButton, Link, Stack } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu"

interface SiteHeaderProps {
  whatsappNumber?: string
}

export function SiteHeader({ whatsappNumber = "" }: SiteHeaderProps) {
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

  return (
    <Box
      as="header"
      position="fixed"
      inset="0 0 auto"
      zIndex="sticky"
      bg={scrolled ? "rgba(247, 245, 241, 0.94)" : "transparent"}
      borderBottomWidth="1px"
      borderColor={scrolled ? "border.subtle" : "transparent"}
      backdropFilter={scrolled ? "blur(14px)" : "none"}
      transition="background 480ms ease-in-out, border-color 480ms ease-in-out, backdrop-filter 480ms ease-in-out"
    >
      <Container maxW="1440px" px={{ base: "5", md: "8", xl: "12" }}>
        <Flex minH={{ base: "76px", md: "88px" }} align="center" justify="space-between">
          <Link href="#inicio" aria-label="TSA Gestão Contábil — início">
            <Box
              position="relative"
              width="clamp(98px, 10vw, 136px)"
              aspectRatio="1582 / 882"
            >
              <Image
                src="/logo-Branca.png"
                alt=""
                fill
                priority
                sizes="136px"
                aria-hidden={scrolled}
                style={{
                  objectFit: "contain",
                  opacity: scrolled ? 0 : 1,
                  transition: "opacity 480ms ease-in-out",
                }}
              />
              <Image
                src="/logo-Azul.png"
                alt=""
                fill
                priority
                sizes="136px"
                aria-hidden={!scrolled}
                style={{
                  objectFit: "contain",
                  opacity: scrolled ? 1 : 0,
                  transition: "opacity 480ms ease-in-out",
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
            <Link
              href="#inicio"
              textStyle="cta"
              color={scrolled ? "brand.primary" : "fg.onBrand"}
              transition="color 480ms ease-in-out"
            >
              Início
            </Link>
            <Link
              href="#servicos"
              textStyle="cta"
              color={scrolled ? "brand.primary" : "fg.onBrand"}
              transition="color 480ms ease-in-out"
            >
              Serviços
            </Link>
            <Link
              href="#metodo"
              textStyle="cta"
              color={scrolled ? "brand.primary" : "fg.onBrand"}
              transition="color 480ms ease-in-out"
            >
              Método Clareza
            </Link>
            <Link
              href="#sobre"
              textStyle="cta"
              color={scrolled ? "brand.primary" : "fg.onBrand"}
              transition="color 480ms ease-in-out"
            >
              Sobre
            </Link>
            <Link
              href="#contato"
              textStyle="cta"
              color={scrolled ? "brand.primary" : "fg.onBrand"}
              transition="color 480ms ease-in-out"
            >
              Contato
            </Link>
          </HStack>

          <HStack gap="2">
            <Button
              asChild
              bg={scrolled ? "brand.primary" : "accent.warm"}
              color={scrolled ? "fg.onBrand" : "brand.primary"}
              borderRadius="full"
              px={{ base: "4", md: "6" }}
              _hover={{ bg: scrolled ? "accent.balance" : "fg.onBrand" }}
              transition="background-color 480ms ease-in-out, color 480ms ease-in-out"
            >
              <a href={whatsappHref} target={normalizedNumber ? "_blank" : undefined} rel={normalizedNumber ? "noreferrer" : undefined}>
                <Box as="span" display={{ base: "none", sm: "inline" }}>Conversar com a TSA</Box>
                <Box as="span" display={{ base: "inline", sm: "none" }}>Conversar</Box>
                <LuArrowUpRight />
              </a>
            </Button>
            <IconButton
              display={{ base: "inline-flex", lg: "none" }}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              variant="ghost"
              color={scrolled ? "brand.primary" : "fg.onBrand"}
              _hover={{ bg: scrolled ? "rgba(11,13,56,0.08)" : "rgba(247,245,241,0.12)" }}
            >
              {menuOpen ? <LuX size="22" /> : <LuMenu size="22" />}
            </IconButton>
          </HStack>
        </Flex>
        <Box
          display={{ base: menuOpen ? "block" : "none", lg: "none" }}
          bg="bg.canvas"
          color="brand.primary"
          borderTopWidth="1px"
          borderColor="border.subtle"
          py="5"
        >
          <Stack gap="4">
            {[['Início', '#inicio'], ['Serviços', '#servicos'], ['Método Clareza', '#metodo'], ['Sobre', '#sobre'], ['Contato', '#contato']].map(([label, href]) => (
              <Link key={href} href={href} textStyle="cta" onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
