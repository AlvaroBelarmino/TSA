import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react"
import { ScrollLink } from "@/components/scroll-link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { LuArrowDownRight, LuArrowUpRight } from "react-icons/lu"
import { externalLinkProps, whatsappHref } from "./data"

export function HeroSection() {
  return (
    <Box id="inicio" as="section" aria-labelledby="hero-title" bg="bg.canvas">
      <Container
        maxW="1440px"
        px={{ base: "5", md: "8", xl: "12" }}
        pt={{ base: "28", lg: "12" }}
        pb={{ base: "14", lg: "16" }}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "minmax(0, 1.04fr) minmax(0, 0.96fr)" }}
          gap={{ base: "10", lg: "12", xl: "20" }}
          alignItems="center"
        >
          <Stack gap={{ base: "6", lg: "8" }} align="flex-start" minW="0">
            <Heading
              id="hero-title"
              as="h1"
              fontFamily="heading"
              fontWeight="semibold"
              fontSize={{ base: "clamp(2.75rem, 10vw, 4rem)", lg: "clamp(3.25rem, 4.45vw, 4.5rem)" }}
              lineHeight="1.12"
              letterSpacing="-0.04em"
              color="brand.primary"
              maxW="14ch"
            >
              Números claros.
              <Box as="span" display="block" color="accent.balance">
                Decisões seguras.
              </Box>
            </Heading>
            <Text textStyle="body" color="fg.default" maxW="43ch">
              Organizamos sua contabilidade e explicamos os números para você decidir com segurança.
            </Text>
            <Flex
              gap={{ base: "5", sm: "7" }}
              align={{ base: "stretch", sm: "center" }}
              direction={{ base: "column", sm: "row" }}
              w={{ base: "full", sm: "auto" }}
            >
              <Button
                asChild
                size="lg"
                minH="14"
                px="7"
                bg="brand.primary"
                color="fg.onBrand"
                borderRadius="full"
                transition="background-color 220ms ease, transform 220ms ease"
                _hover={{ bg: "accent.balance", transform: "translateY(-2px)" }}
                _active={{ transform: "translateY(0)" }}
                _focusVisible={{ outline: "3px solid #F48420", outlineOffset: "3px" }}
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
                color="brand.primary"
                textDecoration="underline"
                textUnderlineOffset="5px"
                _hover={{ color: "accent.balance" }}
                _focusVisible={{ outline: "3px solid #F48420", outlineOffset: "3px" }}
              >
                Conhecer os serviços
                <LuArrowDownRight aria-hidden="true" />
              </ScrollLink>
            </Flex>
          </Stack>

          <Box
            position="relative"
            aspectRatio={{ base: "4 / 3", md: "4 / 3", lg: "1 / 1.05" }}
            minW="0"
            overflow="hidden"
            borderRadius={{ base: "sm", lg: "md" }}
          >
            <Image
              src="/hero-editorial.jpg"
              alt="Caderno de registros contábeis e lápis sobre uma pasta azul-marinho"
              fill
              priority
              sizes="(min-width: 64rem) 46vw, 100vw"
              style={{ objectFit: "cover", objectPosition: "center 58%" }}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}
