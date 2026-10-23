import { Box, Button, Container, Flex, Grid, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { LuArrowDownRight } from "react-icons/lu"
import { Reveal } from "@/components/reveal"
import { ScrollLink } from "@/components/scroll-link"
import { Kicker } from "./kicker"
import { CheckItem } from "./check-item"
import { ServiceCard } from "./service-card"
import { externalLinkProps, featuredService, sectionAnchorOffset, services, whatsappLink } from "./data"

export function ServicesSection() {
  return (
    <Box
      id="servicos"
      as="section"
      scrollMarginTop={sectionAnchorOffset}
      py={{ base: "20", md: "28" }}
      bg="bg.canvas"
    >
      <Container maxW="1200px" px={{ base: "5", md: "8" }} minW="0">
        <Stack gap={{ base: "10", md: "14" }} minW="0" w="full">
          <Grid
            templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }}
            gap={{ base: "6", lg: "16" }}
            alignItems="end"
            minW="0"
          >
            <Stack gap="5" minW="0">
              <Kicker>Assessoria contábil completa</Kicker>
              <Heading
                as="h2"
                textStyle="h2"
                color="brand.primary"
                css={{ textWrap: "balance", overflowWrap: "anywhere" }}
              >
                Rigor técnico para manter sua empresa organizada. Presença para
                orientar o caminho.
              </Heading>
            </Stack>
            <Text textStyle="body" color="fg.default" minW="0">
              Escolha o serviço que faz sentido para o seu momento e fale
              diretamente sobre ele. A conversa já começa no assunto certo.
            </Text>
          </Grid>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={{ base: "5", md: "6" }}
            minW="0"
            w="full"
          >
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 60}
                rotate={index % 2 === 0 ? -1.5 : 1.5}
              >
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </SimpleGrid>

          <Reveal>
            <Box
              position="relative"
              w="full"
              minW="0"
              maxW="100%"
              bg="bg.brand"
              color="fg.onBrand"
              borderRadius="2xl"
              overflow="hidden"
              p={{ base: "5", sm: "7", md: "10" }}
            >
              <Box position="absolute" inset="0" overflow="hidden" aria-hidden="true">
                <Image
                  src="/experiencia-mobile-v1.png"
                  alt=""
                  fill
                  sizes="(min-width: 48rem) 1120px, 100vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transform: "scale(1.04)",
                    filter: "blur(4px)",
                  }}
                />
              </Box>
              <Box
                position="absolute"
                inset="0"
                bg="linear-gradient(100deg, rgba(0, 56, 88, 0.96) 0%, rgba(0, 56, 88, 0.89) 48%, rgba(0, 56, 88, 0.78) 100%)"
                aria-hidden="true"
              />
              <Grid
                position="relative"
                zIndex="1"
                templateColumns={{ base: "1fr", lg: "1.15fr 0.85fr" }}
                gap={{ base: "6", md: "7" }}
                alignItems="center"
                w="full"
                minW="0"
              >
                <Stack gap="5" minW="0" w="full">
                  <Heading
                    as="h3"
                    fontFamily="heading"
                    fontSize={{ base: "1.5rem", sm: "h2" }}
                    lineHeight="1.2"
                    fontWeight="semibold"
                    color="fg.onBrand"
                    css={{ textWrap: "balance", overflowWrap: "anywhere" }}
                  >
                    {featuredService.title}
                  </Heading>
                  <Text
                    textStyle="body"
                    color="fg.onBrand"
                    opacity="0.9"
                    maxW="60ch"
                    css={{ overflowWrap: "anywhere" }}
                  >
                    {featuredService.description}
                  </Text>
                </Stack>

                <Stack gap="6" minW="0" w="full">
                  <SimpleGrid columns={{ base: 1, sm: 2, lg: 1 }} gap="3" minW="0">
                    {featuredService.items.map((item) => (
                      <CheckItem key={item} onBrand>
                        {item}
                      </CheckItem>
                    ))}
                  </SimpleGrid>
                  <Button
                    asChild
                    size="lg"
                    alignSelf="stretch"
                    w="full"
                    maxW="100%"
                    bg="accent.warm"
                    color="brand.primary"
                    borderRadius="full"
                    px={{ base: "4", md: "7" }}
                    h="auto"
                    minH="12"
                    whiteSpace="normal"
                    _hover={{ bg: "fg.onBrand" }}
                    css={{
                      "& a": {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        width: "100%",
                        whiteSpace: "normal",
                        textAlign: "center",
                        lineHeight: "1.3",
                        paddingBlock: "0.85rem",
                        overflowWrap: "anywhere",
                      },
                    }}
                  >
                    <a
                      href={whatsappLink(featuredService.message)}
                      {...externalLinkProps}
                    >
                      <Box as="span" display={{ base: "none", sm: "inline" }}>
                        Explicar minha situação
                      </Box>
                      <Box as="span" display={{ base: "inline", sm: "none" }}>
                        Falar no WhatsApp
                      </Box>
                      <FaWhatsapp />
                    </a>
                  </Button>
                </Stack>
              </Grid>
            </Box>
          </Reveal>

          <Flex
            align={{ base: "stretch", sm: "center" }}
            justify="space-between"
            direction={{ base: "column", sm: "row" }}
            gap="5"
            wrap="wrap"
            borderTopWidth="1px"
            borderColor="border.subtle"
            pt="7"
            minW="0"
          >
            <Text textStyle="body" color="fg.default" maxW="60ch" minW="0">
              Não encontrou exatamente o que precisa? Conte sua situação e a TSA
              indica o caminho contábil mais adequado.
            </Text>
            <ScrollLink
              target="contato"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              gap="2"
              minH="10"
              borderColor="brand.primary"
              borderWidth="1px"
              color="brand.primary"
              borderRadius="full"
              px="6"
              w={{ base: "full", sm: "auto" }}
              flexShrink="0"
              _hover={{ bg: "brand.primary", color: "fg.onBrand" }}
            >
              Explicar minha situação
              <LuArrowDownRight />
            </ScrollLink>
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}
