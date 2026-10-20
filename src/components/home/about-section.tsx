import { Box, Container, Grid, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { Kicker } from "./kicker"
import { sectionAnchorOffset, values } from "./data"

export function AboutSection() {
  return (
    <Box
      id="sobre"
      as="section"
      scrollMarginTop={sectionAnchorOffset}
      py={{ base: "20", md: "28" }}
      bg="bg.canvas"
    >
      <Container maxW="1200px" px={{ base: "5", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "0.9fr 1.1fr" }}
          gap={{ base: "12", lg: "20" }}
          alignItems="center"
        >
          <Box
            position="relative"
            aspectRatio="4 / 5"
            overflow="hidden"
            borderRadius="2xl"
          >
            <Image
              src="/sobre.jpeg"
              alt="Profissional responsável pela TSA Gestão Contábil"
              fill
              sizes="(min-width: 64rem) 42vw, 100vw"
              quality={100}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <Box
              position="absolute"
              inset="auto 0 0"
              p="6"
              background="linear-gradient(0deg, rgba(0,56,88,0.88) 0%, rgba(0,56,88,0) 100%)"
            >
              <Text textStyle="micro" color="accent.warm">
                À frente da TSA
              </Text>
              <Text textStyle="cta" color="fg.onBrand" mt="1">
                +10 anos unindo técnica e proximidade
              </Text>
            </Box>
          </Box>

          <Stack gap="4">
            <Kicker>Quem conduz</Kicker>
            <Heading as="h2" textStyle="h2" color="brand.primary" mb="4">
              Conhecimento técnico com atenção genuína a quem está do outro lado.
            </Heading>
            <Text textStyle="body" color="fg.default">
              Sou Thaise, contadora, com mais de 10 anos de experiência na área contábil.
            </Text>
            <Text textStyle="body" color="fg.default">
              Ao longo dessa trajetória, aprendi que a contabilidade vai muito além de
              impostos, guias e obrigações. Ela precisa ser uma ferramenta para ajudar o
              empresário a compreender o próprio negócio, enxergar oportunidades e tomar
              decisões com mais segurança e clareza.
            </Text>
            <Text textStyle="body" color="fg.default">
              Foi a partir dessa visão, construída e amadurecida ao longo da minha trajetória,
              que nasceu a TSA. Especialmente durante a pandemia, acompanhei de perto
              empresários enfrentando desafios reais, tomando decisões difíceis e buscando
              caminhos para manter seus negócios sustentáveis e preparados para o futuro.
            </Text>
            <Text textStyle="body" color="fg.default">
              Sou formada em Ciências Contábeis, com MBA em Gestão Financeira e Auditoria
              Contábil e formação em Perícia Judicial Contábil.
            </Text>
            <Text textStyle="body" color="fg.default">
              Boa parte da minha visão profissional nasceu da prática: acompanhando empresas
              em diferentes fases de crescimento.
            </Text>
            <Text textStyle="body" color="fg.default">
              Hoje, à frente da TSA, ofereço uma contabilidade mais próxima, estratégica e
              fácil de compreender. Quero que cada empresário saiba onde sua empresa está, o
              que os números dizem e quais decisões podem fortalecer o próximo passo.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "6", md: "4" }} pt="3">
              {values.map((value) => (
                <Stack
                  key={value.title}
                  gap="3"
                  borderTopWidth="2px"
                  borderColor="accent.warm"
                  pt="4"
                >
                  <Heading as="h3" textStyle="h3" color="brand.primary">
                    {value.title}
                  </Heading>
                  <Text fontSize="0.875rem" lineHeight="1.6" color="fg.default">
                    {value.description}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}
