import { Box, Container, Grid, HStack, Heading, Link, Stack, Text } from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa"
import { LuClock3, LuInstagram, LuLinkedin, LuMapPin, LuMonitor } from "react-icons/lu"
import { ContactForm } from "@/components/contact-form"
import { Kicker } from "./kicker"
import { ContactDetail } from "./contact-detail"
import { contactFormEndpoint, externalLinkProps, instagramUrl, linkedinUrl, sectionAnchorOffset, whatsappHref } from "./data"

export function ContactSection() {
  return (
    <Box
      id="contato"
      as="section"
      scrollMarginTop={sectionAnchorOffset}
      py={{ base: "20", md: "28" }}
      bg="bg.surface"
    >
      <Container maxW="1200px" px={{ base: "5", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "0.85fr 1.15fr" }}
          gap={{ base: "12", lg: "20" }}
          alignItems="start"
          minW="0"
        >
          <Stack gap="8">
            <Stack gap="5">
              <Kicker>O PRÓXIMO PASSO</Kicker>
              <Heading as="h2" textStyle="h2" color="brand.primary">
                Vale a pena conversar com uma contabilidade que explica.   </Heading>
              <Text textStyle="body" color="fg.default">
                Fale sobre o momento do seu CNPJ: o que está em dia, o que falta e que tipo de suporte você precisa hoje. É por aí que a gente começa.
              </Text>
            </Stack>

            <Stack gap="3" align="flex-start" order="2">
              <Text textStyle="micro" color="brand.primary">
                Encontre a TSA nas redes
              </Text>
              <HStack
                gap="3"
                p="2"
                bg="bg.canvas"
                borderWidth="1px"
                borderColor="border.subtle"
                borderRadius="full"
                boxShadow="0 10px 24px rgba(0, 56, 88, 0.08)"
              >
                <Link
                  href={whatsappHref}
                  {...externalLinkProps}
                  aria-label="WhatsApp da TSA"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxSize="11"
                  borderRadius="full"
                  bg="#25D366"
                  color="white"
                  boxShadow="0 4px 10px rgba(37, 211, 102, 0.28)"
                  transition="transform 220ms ease, box-shadow 220ms ease, background 220ms ease"
                  _hover={{
                    bg: "#1EBE5D",
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 14px rgba(37, 211, 102, 0.34)",
                  }}
                >
                  <FaWhatsapp size="20" />
                </Link>
                <Link
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram da TSA"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxSize="11"
                  borderRadius="full"
                  bg="linear-gradient(135deg, #833AB4 0%, #E1306C 52%, #FCAF45 100%)"
                  color="white"
                  boxShadow="0 4px 10px rgba(225, 48, 108, 0.26)"
                  transition="transform 220ms ease, box-shadow 220ms ease"
                  _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 14px rgba(225, 48, 108, 0.34)",
                  }}
                >
                  <LuInstagram size="20" />
                </Link>
                <Link
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn da TSA"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxSize="11"
                  borderRadius="full"
                  bg="#0A66C2"
                  color="white"
                  boxShadow="0 4px 10px rgba(10, 102, 194, 0.26)"
                  transition="transform 220ms ease, box-shadow 220ms ease, background 220ms ease"
                  _hover={{
                    bg: "#004182",
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 14px rgba(10, 102, 194, 0.34)",
                  }}
                >
                  <LuLinkedin size="20" />
                </Link>
              </HStack>
            </Stack>

            <Stack gap="5" order="1">
              <ContactDetail icon={<LuMapPin />} title="Rio de Janeiro, RJ">
                Atuação próxima e regional, com atendimento online
              </ContactDetail>
              <ContactDetail icon={<LuMonitor />} title="Atendimento online">
                Com acesso e acompanhamento de verdade
              </ContactDetail>
              <ContactDetail icon={<LuClock3 />} title="Segunda a Sexta">
                9h as 18h
              </ContactDetail>
            </Stack>

          </Stack>

          <Box
            bg="bg.canvas"
            minW="0"
            width="full"
            borderWidth="1px"
            borderColor="border.subtle"
            borderRadius="2xl"
            p={{ base: "6", md: "9" }}
          >
            <Stack gap="4" mb="6">
              <Text textStyle="micro" color="accent.warm">
                Formulário de contato
              </Text>
              <Heading as="h3" textStyle="h3" color="brand.primary">
                Prefere receber um retorno?
              </Heading>
              <Text textStyle="body" color="fg.default">
                Conte o momento da sua empresa. Usamos só o necessário para
                entender o perfil antes do primeiro contato.
              </Text>
            </Stack>
            <ContactForm formEndpoint={contactFormEndpoint} />
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}
