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

const serviceScope = [
  {
    label: "Rotina",
    description: "Contabilidade, fiscal e trabalhista",
  },
  {
    label: "Decisões",
    description: "Consultoria e planejamento tributário",
  },
  {
    label: "Estrutura",
    description: "Regularização fiscal e legalização",
  },
]

export function HeroSection() {
  return (
    <Box
      id="inicio"
      as="section"
      aria-labelledby="hero-title"
      position="relative"
      bg="bg.canvas"
    >
      <Container
        maxW="1200px"
        px={{ base: "5", md: "8" }}
        pt={{ base: "28", lg: "24" }}
        pb={{ base: "14", md: "18", lg: "20" }}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "minmax(0, 1.15fr) minmax(0, 0.85fr)",
          }}
          gap={{ base: "12", lg: "16" }}
          alignItems="center"
        >
          <Stack gap={{ base: "5", md: "6" }} minW="0" align="flex-start">
            <Kicker>CONTABILIDADE PARA EMPRESAS E PRESTADORES DE SERVIÇO</Kicker>
            <Heading
              id="hero-title"
              as="h1"
              fontFamily="heading"
              fontWeight="semibold"
              color="brand.primary"
              fontSize={{
                base: "clamp(2.65rem, 10vw, 3.5rem)",
                lg: "clamp(3.25rem, 5vw, 4.25rem)",
              }}
              lineHeight="1.04"
              letterSpacing="-0.035em"
              maxW={{ base: "none", lg: "16ch" }}
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
                px={{ base: "6", lg: "6" }}
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

          <Stack
            gap="0"
            minW="0"
            borderTopWidth="1px"
            borderColor="brand.primary"
            pt="5"
          >
            <HStack gap="3" align="center" mb="2">
              <Box w="8" h="2px" bg="accent.warm" aria-hidden="true" />
              <Text textStyle="micro" color="brand.primary">
                DO DIA A DIA ÀS DECISÕES
              </Text>
            </HStack>
            {serviceScope.map(({ label, description }) => (
              <Grid
                key={label}
                templateColumns={{
                  base: "6.5rem minmax(0, 1fr)",
                  sm: "7.5rem minmax(0, 1fr)",
                }}
                gap="4"
                alignItems="baseline"
                py={{ base: "4", md: "5" }}
                borderBottomWidth="1px"
                borderColor="border.subtle"
              >
                <Text fontFamily="heading" fontSize="h3" color="brand.primary">
                  {label}
                </Text>
                <Text fontSize="sm" lineHeight="1.55" color="fg.default">
                  {description}
                </Text>
              </Grid>
            ))}
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}
