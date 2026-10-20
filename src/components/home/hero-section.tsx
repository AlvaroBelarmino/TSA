import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react"
import { ScrollLink } from "@/components/scroll-link"
import { FaWhatsapp } from "react-icons/fa"
import { LuArrowDownRight, LuArrowUpRight } from "react-icons/lu"
import { Kicker } from "./kicker"
import { externalLinkProps, heroPillars, whatsappHref } from "./data"

function ClarityVisual() {
  return (
    <Box
      position="relative"
      overflow="hidden"
      minH={{ base: "390px", md: "470px", lg: "530px" }}
      p={{ base: "6", md: "9" }}
      bg="brand.primary"
      color="fg.onBrand"
      borderRadius={{ base: "2xl", lg: "3xl" }}
      boxShadow="0 28px 70px rgba(0, 56, 88, 0.2)"
      backgroundImage="radial-gradient(circle at 84% 24%, rgba(244, 132, 32, 0.16), transparent 35%), linear-gradient(150deg, #003858, #002A43)"
    >
      <Box
        position="absolute"
        inset="0"
        opacity="0.16"
        pointerEvents="none"
        aria-hidden="true"
        backgroundImage="linear-gradient(rgba(247, 243, 238, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 243, 238, 0.18) 1px, transparent 1px)"
        backgroundSize="48px 48px"
      />
      <Stack position="relative" zIndex="1" minH="inherit" justify="space-between">
        <Flex align="center" justify="space-between" gap="4">
          <Text textStyle="micro" color="accent.warm">
            Da rotina à decisão
          </Text>
          <Text textStyle="micro" color="fg.onBrand" opacity="0.64">
            TSA / 01—03
          </Text>
        </Flex>

        <Box position="relative" py={{ base: "8", md: "12" }}>
          <Box
            position="absolute"
            top="50%"
            left="50%"
            w={{ base: "230px", md: "300px" }}
            aspectRatio="1"
            border="1px solid rgba(247, 243, 238, 0.17)"
            borderRadius="full"
            transform="translate(-50%, -50%)"
            aria-hidden="true"
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            w={{ base: "155px", md: "210px" }}
            aspectRatio="1"
            border="1px solid rgba(247, 243, 238, 0.17)"
            borderRadius="full"
            transform="translate(-50%, -50%)"
            aria-hidden="true"
          />
          <Flex
            position="relative"
            zIndex="1"
            align="center"
            justify="center"
            h={{ base: "160px", md: "210px" }}
          >
            <Box
              position="absolute"
              top="12%"
              left="22%"
              boxSize={{ base: "2", md: "3" }}
              borderRadius="full"
              bg="accent.warm"
              aria-hidden="true"
            />
            <Box
              position="absolute"
              bottom="9%"
              right="20%"
              boxSize={{ base: "3", md: "4" }}
              borderRadius="full"
              bg="accent.warm"
              aria-hidden="true"
            />
            <Text
              as="span"
              fontFamily="heading"
              fontWeight="regular"
              fontStyle="italic"
              fontSize={{ base: "clamp(2.8rem, 10vw, 4rem)", md: "4.5rem" }}
              lineHeight="1"
              letterSpacing="-0.05em"
              textAlign="center"
              color="fg.onBrand"
            >
              clareza<Box as="span" color="accent.warm">.</Box>
            </Text>
          </Flex>
        </Box>

        <Stack gap="6">
          <Grid templateColumns="repeat(3, minmax(0, 1fr))" gap={{ base: "3", md: "5" }}>
            {heroPillars.map(({ label, icon: Icon }, index) => (
              <Stack
                key={label}
                gap="3"
                pt="4"
                borderTopWidth="1px"
                borderColor={index === 2 ? "accent.warm" : "rgba(247, 243, 238, 0.32)"}
              >
                <Flex align="center" justify="space-between" color="accent.warm">
                  <Text textStyle="micro">0{index + 1}</Text>
                  <Icon size="18" strokeWidth="1.7" aria-hidden="true" />
                </Flex>
                <Text
                  fontSize={{ base: "0.75rem", md: "0.9375rem" }}
                  fontWeight="semibold"
                  color="fg.onBrand"
                >
                  {label}
                </Text>
              </Stack>
            ))}
          </Grid>
          <Text fontSize="sm" lineHeight="1.6" color="fg.onBrand" opacity="0.74">
            Informação compreensível para escolhas mais seguras.
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}

export function HeroSection() {
  return (
    <Box
      id="inicio"
      as="section"
      aria-labelledby="hero-title"
      position="relative"
      overflow="hidden"
      bg="bg.canvas"
      backgroundImage="radial-gradient(circle at 0% 30%, rgba(244, 132, 32, 0.07), transparent 34%)"
    >
      <Container
        maxW="1440px"
        px={{ base: "5", md: "8", xl: "12" }}
        pt={{ base: "32", lg: "16" }}
        pb={{ base: "16", lg: "24" }}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "minmax(0, 1.08fr) minmax(0, 0.92fr)" }}
          gap={{ base: "12", lg: "12", xl: "20" }}
          alignItems="center"
        >
          <Stack gap={{ base: "6", lg: "8" }} minW="0" align="flex-start">
            <Kicker>TSA Gestão Contábil</Kicker>
            <Heading
              id="hero-title"
              as="h1"
              fontFamily="heading"
              fontWeight="semibold"
              fontSize={{ base: "clamp(2.7rem, 11vw, 4.1rem)", lg: "clamp(3.5rem, 5vw, 5.25rem)" }}
              lineHeight="1.08"
              letterSpacing="-0.045em"
              color="brand.primary"
              maxW="12ch"
              css={{ textWrap: "balance" }}
            >
              Os números da sua empresa podem mostrar o{" "}
              <Box as="span" color="accent.warm" fontStyle="italic">
                próximo passo.
              </Box>
            </Heading>
            <Text textStyle="body" color="fg.default" maxW="49ch">
              Sua empresa cresce melhor quando cada número faz sentido. A TSA organiza a rotina, explica o cenário e acompanha suas escolhas de perto.
            </Text>

            <Flex
              gap={{ base: "5", md: "7" }}
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
                transition="background-color 220ms ease, transform 220ms ease, box-shadow 220ms ease"
                _hover={{
                  bg: "accent.balance",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 24px rgba(0, 56, 88, 0.16)",
                }}
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
                fontWeight="semibold"
                textDecoration="underline"
                textUnderlineOffset="5px"
                _hover={{ color: "accent.balance" }}
                _focusVisible={{ outline: "3px solid #F48420", outlineOffset: "3px" }}
              >
                Conhecer os serviços
                <LuArrowDownRight aria-hidden="true" />
              </ScrollLink>
            </Flex>

            <HStack gap="3" pt={{ base: "2", lg: "5" }} color="fg.muted" align="flex-start">
              <Box w="7" h="1px" mt="3" bg="accent.warm" flexShrink="0" />
              <Text fontSize="sm" lineHeight="1.6" maxW="42ch">
                Mais de 10 anos de experiência contábil. Atendimento próximo e online.
              </Text>
            </HStack>
          </Stack>

          <ClarityVisual />
        </Grid>
      </Container>
    </Box>
  )
}
