import { Box, Button, Container, Grid, Heading, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { LuArrowDownRight, LuArrowUpRight } from "react-icons/lu"
import { ScrollLink } from "@/components/scroll-link"
import { Kicker } from "./kicker"
import { externalLinkProps, whatsappHref } from "./data"

export function HeroSection() {
  return (
    <Box id="inicio" as="section" aria-labelledby="hero-title" bg="bg.canvas">
      <Container maxW="1440px" px={{ base: "5", md: "8", xl: "12" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "minmax(0, 1.1fr) minmax(0, 0.9fr)" }}
          gap={{ base: "10", lg: "12", xl: "20" }}
          alignItems="center"
          pt={{ base: "28", lg: "16", xl: "20" }}
          pb={{ base: "14", lg: "20", xl: "24" }}
        >
          <Stack gap={{ base: "6", lg: "7" }} minW="0" align="flex-start">
            <Kicker>CONTABILIDADE PARA SUA EMPRESA</Kicker>
            <Heading
              id="hero-title"
              as="h1"
              fontFamily="heading"
              fontWeight="semibold"
              color="brand.primary"
              fontSize={{ base: "clamp(2.5rem, 10vw, 3.75rem)", lg: "clamp(3.5rem, 4.6vw, 5rem)" }}
              lineHeight="1.05"
              letterSpacing="-0.035em"
              maxW="15ch"
              css={{ textWrap: "balance" }}
            >
              Os números em ordem. Você mais seguro para decidir.
            </Heading>
            <Text textStyle="body" color="fg.default" maxW="52ch">
              A TSA cuida das rotinas contábeis, fiscais e trabalhistas e explica
              o que importa para o seu negócio seguir em frente.
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              gap={{ base: "4", sm: "6" }}
              align={{ base: "stretch", sm: "center" }}
              w={{ base: "full", sm: "auto" }}
              pt="2"
            >
              <Button
                asChild
                size="lg"
                bg="brand.primary"
                color="fg.onBrand"
                borderRadius="full"
                px="7"
                minH="13"
                transition="background-color 200ms ease, transform 200ms ease"
                _hover={{ bg: "accent.balance", transform: "translateY(-2px)" }}
                _active={{ transform: "translateY(0)" }}
              >
                <a href={whatsappHref} {...externalLinkProps}>
                  <FaWhatsapp aria-hidden="true" />
                  Conversar com a TSA
                  <LuArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <ScrollLink
                target="servicos"
                display="inline-flex"
                alignItems="center"
                justifyContent={{ base: "center", sm: "flex-start" }}
                gap="2"
                minH="12"
                color="brand.primary"
                transition="color 200ms ease"
                _hover={{ color: "accent.balance" }}
                _focusVisible={{ outline: "2px solid", outlineColor: "accent.balance", outlineOffset: "4px" }}
              >
                Conhecer os serviços
                <LuArrowDownRight aria-hidden="true" />
              </ScrollLink>
            </Stack>
          </Stack>

          <Box position="relative" minW="0" h={{ base: "300px", sm: "380px", lg: "560px" }}>
            <Image
              src="/hero-mesa.png"
              alt="Mesa de trabalho com notebook, caderno e café"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 42vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <Box
              position="absolute"
              left={{ base: "0", lg: "-6" }}
              bottom={{ base: "0", lg: "-6" }}
              bg="brand.primary"
              color="fg.onBrand"
              px={{ base: "5", lg: "7" }}
              py={{ base: "4", lg: "5" }}
              maxW={{ base: "85%", lg: "74%" }}
            >
              <Text textStyle="micro" color="accent.warm" mb="2">
                TSA GESTÃO CONTÁBIL
              </Text>
              <Text fontFamily="heading" fontSize={{ base: "lg", lg: "xl" }} lineHeight="1.3">
                Clareza na rotina. Confiança nas decisões.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}
