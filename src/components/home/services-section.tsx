import { Box, Container, Flex, Grid, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { LuArrowDownRight } from "react-icons/lu"
import { Reveal } from "@/components/reveal"
import { ScrollLink } from "@/components/scroll-link"
import { Kicker } from "./kicker"
import { ServiceCard } from "./service-card"
import { sectionAnchorOffset, services } from "./data"

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
