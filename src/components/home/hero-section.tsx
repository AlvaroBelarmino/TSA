import { Box, Button, Container, Grid, HStack, Heading, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { LuArrowUpRight, LuShieldCheck } from "react-icons/lu"
import { Kicker } from "./kicker"
import { externalLinkProps, whatsappHref } from "./data"

export function HeroSection() {
  return (
    <Box
      id="inicio"
      as="section"
      aria-labelledby="hero-title"
      position="relative"
      overflow="hidden"
      bg="bg.canvas"
    >
      <Box
        display={{ base: "block", lg: "none" }}
        position="absolute"
        inset="0"
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
            objectPosition: "center",
            filter: "blur(12px)",
            transform: "scale(1.15)",
          }}
        />
        <Box position="absolute" inset="0" bg="rgba(247, 243, 238, 0.58)" />
      </Box>

      <Box
        display={{ base: "none", lg: "block" }}
        position="absolute"
        top="0"
        right="-8px"
        bottom="0"
        w="calc(48% + 8px)"
        aria-hidden="true"
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
        maxW="1200px"
        px={{ base: "5", md: "8" }}
        pt={{ base: "32", lg: "20" }}
        pb={{ base: "16", lg: "20" }}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "minmax(0, 640px) auto" }}
          gap={{ base: "8", lg: "10" }}
          alignItems="center"
        >
          <Stack gap={{ base: "5", md: "6" }} minW="0" align={{ base: "center", lg: "stretch" }}>
            <Kicker color="brand.primary" center={{ base: true, lg: false }}>
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
              textAlign={{ base: "center", lg: "left" }}
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
              color={{ base: "brand.primary", lg: "fg.default" }}
              fontWeight={{ base: "semibold", lg: "regular" }}
              maxW="46ch"
              textAlign={{ base: "center", lg: "left" }}
            >
              Organizamos, acompanhamos e traduzimos os números da sua empresa para que você tome decisões com mais segurança.
            </Text>
            <Button
              asChild
              size="lg"
              alignSelf={{ base: "stretch", sm: "center", lg: "flex-start" }}
              bg={{ base: "accent.warm", lg: "brand.primary" }}
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
            <HStack
              gap="2"
              color={{ base: "brand.primary", lg: "fg.muted" }}
              pt="1"
              justify={{ base: "center", lg: "flex-start" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <LuShieldCheck size={16} aria-hidden="true" />
              <Text fontSize="sm" fontWeight={{ base: "semibold", lg: "regular" }}>
                Mais de 10 anos de experiência · Atendimento próximo e online
              </Text>
            </HStack>
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}
