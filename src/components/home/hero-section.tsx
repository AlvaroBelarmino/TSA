import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa"
import { LuArrowDownRight, LuArrowUpRight } from "react-icons/lu"
import { ScrollLink } from "@/components/scroll-link"
import { Kicker } from "./kicker"
import { externalLinkProps, whatsappHref } from "./data"

const professionalCredentials = [
  "Formação em Ciências Contábeis",
  "MBA em Gestão Financeira e Auditoria Contábil",
  "Formação em Perícia Judicial Contábil",
]

export function HeroSection() {
  return (
    <Box
      id="inicio"
      as="section"
      aria-labelledby="hero-title"
      bg="bg.canvas"
    >
      <Grid
        templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
        alignItems="stretch"
      >
        <Container
          maxW="720px"
          px={{ base: "5", md: "8", xl: "12" }}
          pt={{ base: "28", xl: "20" }}
          pb={{ base: "16", xl: "20" }}
        >
          <Stack gap={{ base: "5", md: "6" }} align="flex-start">
            <Kicker>CONTABILIDADE PARA EMPRESAS E PRESTADORES DE SERVIÇO</Kicker>
            <Heading
              id="hero-title"
              as="h1"
              fontFamily="heading"
              fontWeight="semibold"
              color="brand.primary"
              fontSize={{
                base: "clamp(2.65rem, 10vw, 3.5rem)",
                xl: "clamp(3.25rem, 4.7vw, 4.25rem)",
              }}
              lineHeight="1.04"
              letterSpacing="-0.035em"
              maxW="16ch"
              css={{ textWrap: "balance" }}
            >
              Sua empresa em ordem. Mais clareza para decidir.
            </Heading>
            <Text textStyle="body" color="fg.default" maxW="48ch">
              A TSA cuida da contabilidade e das rotinas fiscais e trabalhistas,
              enquanto orienta você nas decisões do negócio.
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              gap={{ base: "3", sm: "5" }}
              align={{ base: "stretch", sm: "center" }}
              w={{ base: "full", sm: "auto" }}
              pt="1"
            >
              <Button
                asChild
                size="lg"
                alignSelf={{ base: "stretch", sm: "flex-start" }}
                bg="brand.primary"
                color="fg.onBrand"
                borderRadius="full"
                px="6"
                minH="12"
                _hover={{ bg: "accent.balance" }}
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
                _hover={{ color: "accent.balance" }}
              >
                Conhecer os serviços
                <LuArrowDownRight aria-hidden="true" />
              </ScrollLink>
            </Stack>
          </Stack>
        </Container>

        <Box
          as="aside"
          aria-labelledby="hero-profile-title"
          bg="brand.primary"
          color="fg.onBrand"
        >
          <Container
            maxW="720px"
            px={{ base: "5", md: "8", xl: "12" }}
            py={{ base: "12", md: "16", xl: "20" }}
          >
            <Stack gap={{ base: "7", md: "9" }}>
              <Stack gap="3">
                <Kicker color="fg.onBrand">À FRENTE DA TSA</Kicker>
                <Heading
                  id="hero-profile-title"
                  as="h2"
                  fontFamily="heading"
                  fontWeight="semibold"
                  fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
                  lineHeight="1"
                  letterSpacing="-0.03em"
                  color="fg.onBrand"
                >
                  Thaise
                </Heading>
                <Text textStyle="cta" color="fg.onBrand">
                  Contadora e responsável pela TSA Gestão Contábil
                </Text>
              </Stack>

              <Stack gap="0" borderTopWidth="1px" borderColor="rgba(247,243,238,0.24)">
                <Text textStyle="micro" color="accent.warm" pt="5" pb="2">
                  FORMAÇÃO
                </Text>
                {professionalCredentials.map((credential) => (
                  <Text
                    key={credential}
                    fontSize="sm"
                    lineHeight="1.55"
                    color="fg.onBrand"
                    py="3"
                    borderBottomWidth="1px"
                    borderColor="rgba(247,243,238,0.16)"
                  >
                    {credential}
                  </Text>
                ))}
              </Stack>

              <HStack gap="3" align="center">
                <Box w="8" h="2px" flexShrink="0" bg="accent.warm" aria-hidden="true" />
                <Text fontSize="sm" lineHeight="1.5" color="fg.onBrand">
                  Uma contabilidade próxima, estratégica e fácil de compreender.
                </Text>
              </HStack>
            </Stack>
          </Container>
        </Box>
      </Grid>
    </Box>
  )
}
