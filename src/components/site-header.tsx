"use client"

import { ScrollLink } from "@/components/scroll-link"
import { Box, Flex, IconButton, Link } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { LuMenu, LuX } from "react-icons/lu"

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

export function SiteHeader({ whatsappNumber = "" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const normalizedNumber = whatsappNumber.replace(/\D/g, "")
  const whatsappHref = normalizedNumber
    ? `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(
        "Olá! Gostaria de conversar com a TSA Gestão Contábil.",
      )}`
    : "#contato"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: "-25% 0px -58% 0px" },
    )
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  return (
    <Box
      as="header"
      position="fixed"
      zIndex="50"
      inset="0 0 auto"
      h={{ base: "76px", lg: "88px" }}
      bg={scrolled || menuOpen ? "rgba(247, 243, 238, 0.96)" : "transparent"}
      color={{ base: scrolled || menuOpen ? "brand.primary" : "white", lg: "brand.primary" }}
      boxShadow={scrolled || menuOpen ? "0 4px 24px rgba(0, 56, 88, 0.1)" : "none"}
      backdropFilter={scrolled || menuOpen ? "blur(14px)" : "none"}
      transition="background 300ms ease, box-shadow 300ms ease"
      css={{
        "@media (prefers-reduced-motion: reduce)": {
          transitionDuration: "0.01ms",
          "& *": { transitionDuration: "0.01ms !important" },
        },
      }}
    >
      <Flex
        align="center"
        justify="space-between"
        gap="6"
        w={{ base: "calc(100% - 2.5rem)", lg: "min(93%, 1320px)" }}
        h="full"
        mx="auto"
      >
        <ScrollLink target="inicio" aria-label="TSA Gestão Contábil: início" flex="none">
          <Box as="span" display={{ base: "block", lg: "none" }} w="95px">
            <Image
              src={scrolled || menuOpen ? "/logo-dark-reduzida.png" : "/logo-white-reduzida.png"}
              alt=""
              width={870}
              height={630}
              priority
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </Box>
          <Box as="span" display={{ base: "none", lg: "block" }} w="105px">
            <Image
              src="/logo-dark-reduzida.png"
              alt=""
              width={870}
              height={630}
              priority
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </Box>
        </ScrollLink>

        <Flex as="nav" aria-label="Navegação principal" align="center" gap="clamp(1rem, 2.4vw, 2.7rem)" display={{ base: "none", lg: "flex" }}>
          {navItems.map(([label, target]) => (
            <ScrollLink
              key={target}
              target={target}
              aria-current={activeSection === target ? "location" : undefined}
              position="relative"
              minH="44px"
              color="brand.primary"
              fontSize="0.8rem"
              fontWeight="700"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "0.2rem",
                left: "0",
                right: activeSection === target ? "0" : "100%",
                h: "2px",
                bg: "accent.warm",
                transition: "right 300ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              _hover={{ _after: { right: "0" } }}
            >
              {label}
            </ScrollLink>
          ))}
        </Flex>

        <Link
          href={whatsappHref}
          target={normalizedNumber ? "_blank" : undefined}
          rel={normalizedNumber ? "noreferrer" : undefined}
          display={{ base: "none", lg: "inline-flex" }}
          alignItems="center"
          justifyContent="center"
          gap="2"
          minH="44px"
          px="4"
          flex="none"
          bg="accent.warm"
          color="brand.primary"
          fontSize="0.78rem"
          fontWeight="700"
          textDecoration="none"
          transition="background 200ms ease, transform 200ms ease"
          _hover={{ bg: "#f99132", color: "brand.primary", transform: "translateY(-2px)" }}
        >
          <FaWhatsapp aria-hidden="true" /> Fale no WhatsApp
        </Link>

        <IconButton
          display={{ base: "grid", lg: "none" }}
          placeItems="center"
          w="48px"
          h="48px"
          color={scrolled || menuOpen ? "brand.primary" : "white"}
          border="1px solid"
          borderColor={scrolled || menuOpen ? "rgba(0, 56, 88, 0.19)" : "transparent"}
          borderRadius="0"
          bg="transparent"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="tsa-mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
        </IconButton>
      </Flex>

      <Flex
        as="nav"
        id="tsa-mobile-nav"
        aria-label="Navegação mobile"
        inert={!menuOpen}
        position="absolute"
        direction="column"
        gap="0.5"
        top="76px"
        insetInline="0"
        p="4 1.25rem 1.5rem"
        borderTop="1px solid rgba(0, 56, 88, 0.13)"
        bg="bg.canvas"
        boxShadow="0 20px 30px rgba(0, 56, 88, 0.15)"
        opacity={menuOpen ? 1 : 0}
        visibility={menuOpen ? "visible" : "hidden"}
        transform={menuOpen ? "translateY(0)" : "translateY(-10px)"}
        transition="opacity 250ms ease, transform 250ms ease, visibility 250ms ease"
        display={{ base: "flex", lg: "none" }}
      >
        {navItems.map(([label, target], index) => (
          <ScrollLink
            key={target}
            target={target}
            onClick={() => setMenuOpen(false)}
            display="flex"
            alignItems="center"
            gap="4"
            w="full"
            minH="54px"
            borderBottom="1px solid rgba(0, 56, 88, 0.13)"
            color="brand.primary"
            fontFamily="heading"
            fontSize="1.35rem"
          >
            <Box as="span" color="#d2670a" fontFamily="body" fontSize="0.68rem">
              0{index + 1}
            </Box>
            {label}
          </ScrollLink>
        ))}
        <Link
          href={whatsappHref}
          target={normalizedNumber ? "_blank" : undefined}
          rel={normalizedNumber ? "noreferrer" : undefined}
          onClick={() => setMenuOpen(false)}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="3"
          minH="48px"
          mt="5"
          bg="accent.warm"
          color="brand.primary"
          textDecoration="none"
        >
          <FaWhatsapp aria-hidden="true" /> Fale no WhatsApp
        </Link>
      </Flex>
    </Box>
  )
}
