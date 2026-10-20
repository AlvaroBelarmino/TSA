import { Box, Container, Flex, Grid, Link, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { LuArrowUpRight, LuInstagram, LuLinkedin } from "react-icons/lu"
import { ScrollLink } from "@/components/scroll-link"
import SolnixAssinatura from "@/components/solnixAssinatura"
import { externalLinkProps, instagramUrl, linkedinUrl, whatsappHref } from "./data"

export function SiteFooter() {
  return (
    <Box as="footer" bg="bg.brand" color="fg.onBrand" py={{ base: "12", md: "14" }}>
      <Container maxW="1200px" px={{ base: "5", md: "8" }} minW="0">
        <Grid
          templateColumns={{ base: "1fr", md: "1.35fr 0.7fr 0.7fr 0.9fr" }}
          gap={{ base: "10", md: "8" }}
          minW="0"
        >
          <Stack gap="5" maxW="420px" minW="0">
            <Image
              src="/logo-white.png"
              alt="TSA Gestão Contábil"
              width={801}
              height={486}
              style={{ width: "min(148px, 100%)", height: "auto" }}
            />
            <Text textStyle="h3" color="fg.onBrand" css={{ overflowWrap: "anywhere" }}>
              Segurança para cuidar. Clareza para decidir.
            </Text>
          </Stack>

          <Stack gap="4">
            <Text textStyle="micro" color="accent.warm">
              Seções
            </Text>
            <Stack gap="2">
              {[
                ["Início", "inicio"],
                ["Serviços", "servicos"],
                ["Sobre", "sobre"],
                ["Contato", "contato"],
              ].map(([label, target]) => (
                <ScrollLink
                  key={target}
                  target={target}
                  textStyle="cta"
                  color="fg.onBrand"
                  _hover={{ color: "accent.warm" }}
                >
                  {label}
                </ScrollLink>
              ))}
            </Stack>
          </Stack>

          <Stack gap="4">
            <Text textStyle="micro" color="accent.warm">
              Atendimento
            </Text>
            <Stack gap="2">
              <Text textStyle="body" color="fg.onBrand">
                Rio de Janeiro, RJ
              </Text>
              <Text textStyle="body" color="fg.onBrand">
                Online e próximo
              </Text>
              <Text textStyle="body" color="fg.onBrand">
                Segunda a sexta · 9h–18h
              </Text>
            </Stack>
          </Stack>

          <Stack gap="4">
            <Text textStyle="micro" color="accent.warm">
              Fale com a TSA
            </Text>
            <Link
              href={whatsappHref}
              {...externalLinkProps}
              textStyle="cta"
              color="fg.onBrand"
              display="flex"
              alignItems="center"
              gap="2"
              _hover={{ color: "accent.warm" }}
            >
              <FaWhatsapp size={16} /> WhatsApp <LuArrowUpRight size="16" />
            </Link>
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              textStyle="cta"
              color="fg.onBrand"
              display="flex"
              alignItems="center"
              gap="2"
              _hover={{ color: "accent.warm" }}
            >
              <LuInstagram size={16} /> Instagram <LuArrowUpRight size="16" />
            </Link>
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              textStyle="cta"
              color="fg.onBrand"
              display="flex"
              alignItems="center"
              gap="2"
              _hover={{ color: "accent.warm" }}
            >
              <LuLinkedin size={16} /> LinkedIn <LuArrowUpRight size="16" />
            </Link>
            <Text textStyle="body" color="fg.onBrand" opacity="0.88">
              Conte o momento da sua empresa e vamos entender o próximo passo.
            </Text>
          </Stack>
        </Grid>
        <Flex
          mt={{ base: "10", md: "14" }}
          pt="5"
          borderTopWidth="1px"
          borderColor="rgba(247,243,238,0.18)"
          align="center"
          justify="space-between"
          gap="5"
          wrap="wrap"
        >
          <Text textStyle="micro" color="fg.onBrand" opacity="0.8">
            © TSA Gestão Contábil
          </Text>
          <Box ml={{ base: "auto", md: "0" }}>
            <SolnixAssinatura />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
