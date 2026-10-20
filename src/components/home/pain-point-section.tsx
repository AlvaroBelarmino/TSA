import { Box, Container, Grid, Heading, Stack, Text } from "@chakra-ui/react"
import { Reveal } from "@/components/reveal"
import { Kicker } from "./kicker"
import { CheckItem } from "./check-item"

export function PainPointSection() {
  return (
    <Box
      as="section"
      position="relative"
      zIndex="1"
      mt={{ base: "-6", md: "0" }}
      py={{ base: "14", md: "28" }}
      bg="bg.surface"
      borderTopLeftRadius={{ base: "3xl", md: "0" }}
      borderTopRightRadius={{ base: "3xl", md: "0" }}
    >
      <Container maxW="1200px" px={{ base: "5", md: "8" }}>
        <Reveal>
          <Grid
            templateColumns={{ base: "1fr", lg: "0.92fr 1.08fr" }}
            gap={{ base: "12", lg: "24" }}
            alignItems="center"
          >
            <Stack gap="6">
              <Kicker>Sua empresa cresceu.</Kicker>
              <Heading as="h2" textStyle="h2" color="brand.primary">
                Mas você entende melhor os números hoje?
              </Heading>
            </Stack>
            <Stack gap="6">
              <Text textStyle="body" color="fg.default">
                <Box as="span" display={{ base: "inline", md: "none" }}>
                  À medida que o negócio fica mais complexo, receber informações não é suficiente. Você precisa de clareza, análise e segurança.
                </Box>
                <Box as="span" display={{ base: "none", md: "inline" }}>
                  À medida que o negócio fica mais complexo, receber informações não é suficiente. Você precisa conseguir entendê-las para decidir com mais segurança.
                </Box>
              </Text>
              <Stack gap="3">
                <CheckItem>Você recebe as guias, mas não entende por que os valores mudaram.</CheckItem>
                <CheckItem>Fatura mais, mas ainda tem dificuldade de saber o que realmente sobra.</CheckItem>
                <CheckItem>Só fala com a contabilidade quando existe uma obrigação ou problema</CheckItem>
                <CheckItem>Precisa tomar decisões importantes sem ter os números organizados e claros.</CheckItem>
              </Stack>
            </Stack>
          </Grid>
        </Reveal>
      </Container>
    </Box>
  )
}
