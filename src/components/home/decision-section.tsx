import { Box, Container, Grid, Heading, Stack, Text } from "@chakra-ui/react"
import { Reveal } from "@/components/reveal"
import { Kicker } from "./kicker"

export function DecisionSection() {
  return (
    <Box bg="bg.brand" color="fg.onBrand" py={{ base: "14", md: "18" }}>
      <Container maxW="1200px" px={{ base: "5", md: "8" }}>
        <Reveal>
          <Stack gap={{ base: "10", md: "12" }}>
            <Stack gap="4" maxW="900px">
              <Kicker color="accent.warm">Ainda não sabe por onde começar?</Kicker>
              <Heading as="h2" textStyle="h2" color="fg.onBrand" fontStyle="italic">
                Você não precisa decidir o próximo passo sozinho.
              </Heading>
              <Text textStyle="body" color="fg.onBrand" maxW="64ch" opacity="0.9">
                Cada empresa tem um momento diferente. Conte a sua situação e a TSA te ajuda a entender o que fazer a seguir, sem compromisso.

              </Text>
            </Stack>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={{ base: "8", md: "10" }}
            >
              {["Entender", "Organizar", "Decidir"].map((title, index) => (
                <Stack
                  key={title}
                  gap="2"
                  borderLeftWidth="2px"
                  borderColor="accent.warm"
                  pl="5"
                >
                  <Text textStyle="micro" color="accent.warm">
                    0{index + 1}
                  </Text>
                  <Heading as="h3" textStyle="h3" color="fg.onBrand">
                    {title}
                  </Heading>
                  <Text textStyle="body" color="fg.onBrand" opacity="0.88">
                    {index === 0 &&
                      "Informação técnica traduzida para a realidade do seu negócio."}
                    {index === 1 &&
                      "Rotinas e documentos em ordem, sem burocracia extra."}
                    {index === 2 &&
                      "Orientação clara para agir no momento certo."}
                  </Text>
                </Stack>
              ))}
            </Grid>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}
