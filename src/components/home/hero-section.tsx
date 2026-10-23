import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { LuArrowUpRight } from "react-icons/lu"
import { Kicker } from "./kicker"
import { externalLinkProps, whatsappHref } from "./data"
import { MobileHeroCard } from "./mobile-hero-card"

export function HeroSection() {
  return (
    <Box
      id="inicio"
      as="section"
      aria-labelledby="hero-title"
      position="relative"
      overflow="hidden"
      bg="bg.canvas"
      minH={{ base: "auto", lg: "800px" }}
    >
      <Box
        display={{ base: "block", lg: "none" }}
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="clamp(440px, 120vw, 560px)"
        aria-hidden="true"
      >
        <Image
          src="/hero-mesa.png"
          alt=""
          fill
          priority
          sizes="(min-width: 64rem) 1px, 100vw"
          style={{
            objectFit: "cover",
            objectPosition: "62% center",
          }}
        />
        <Box position="absolute" inset="0" bg="rgba(0, 56, 88, 0.22)" />
      </Box>

      <Box
        display={{ base: "none", lg: "block" }}
        position="absolute"
        top="0"
        right="-8px"
        bottom="0"
        w="calc(48% + 8px)"
        aria-hidden="true"
        css={{ maskImage: "linear-gradient(to right, transparent, black 24%)" }}
      >
        <Image
          src="/hero-mesa.png"
          alt=""
          fill
          priority
          quality={100}
          sizes="48vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      <Container
        position="relative"
        zIndex="1"
        display="flex"
        alignItems="center"
        minH={{ base: "auto", lg: "inherit" }}
        maxW={{ base: "none", lg: "1200px" }}
        px={{ base: "0", lg: "8" }}
        pt={{ base: "clamp(408px, 112vw, 520px)", lg: "32" }}
        pb={{ base: "0", lg: "20" }}
      >
        <MobileHeroCard>
          <Stack gap={{ base: "5", md: "6" }} minW="0" align="stretch">
            <Kicker color="brand.primary">
              CONTABILIDADE PARA EMPRESAS EM CRESCIMENTO
            </Kicker>
            <Heading
              id="hero-title"
              as="h1"
              fontFamily="heading"
              fontWeight="semibold"
              color="brand.primary"
              fontSize={{ base: "clamp(2.35rem, 10vw, 3.15rem)", lg: "clamp(3.1rem, 4.8vw, 4.35rem)" }}
              lineHeight="1.02"
              letterSpacing="-0.02em"
              textAlign="left"
              css={{ textWrap: "balance" }}
            >
              Sua contabilidade deve trazer{" "}
              <Box as="span" color="accent.balance">
                clareza,
              </Box>{" "}
              não mais dúvidas.
            </Heading>
            <Text
              textStyle="body"
              color="fg.default"
              fontWeight="regular"
              maxW="46ch"
              textAlign="left"
            >
              Organizamos, acompanhamos e traduzimos os números da sua empresa para que você tome decisões com mais segurança.
            </Text>
            <Button
              asChild
              size="lg"
              fontSize={{ base: "0.875rem", lg: "cta" }}
              alignSelf={{ base: "stretch", sm: "center", lg: "flex-start" }}
              bg="brand.primary"
              color="fg.onBrand"
              borderRadius="full"
              px={{ base: "8", lg: "6" }}
              minH={{ base: "14", lg: "12" }}
              boxShadow={{ base: "0 12px 28px rgba(244, 132, 32, 0.38)", lg: "none" }}
              _hover={{ bg: { base: "brand.primary", lg: "accent.balance" } }}
            >
              <a href={whatsappHref} {...externalLinkProps}>
                <FaWhatsapp />
                Quero conversar sobre minha empresa
                <LuArrowUpRight />
              </a>
            </Button>
          </Stack>
        </MobileHeroCard>
      </Container>
    </Box>
  )
}
