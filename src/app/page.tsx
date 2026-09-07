import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { SiteHeader } from "@/components/site-header"
import SolnixAssinatura from "@/components/solnixAssinatura"
import { WhatsappFloat } from "@/components/whatsapp-float"
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import {
  LuArrowDownRight,
  LuArrowUpRight,
  LuCheck,
  LuClock3,
  LuInstagram,
  LuLinkedin,
  LuMapPin,
  LuMonitor,
} from "react-icons/lu"

const whatsappNumber = process.env.NEXT_PUBLIC_TSA_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
)
const contactFormEndpoint = process.env.NEXT_PUBLIC_TSA_CONTACT_FORM_ENDPOINT
const instagramUrl = process.env.NEXT_PUBLIC_TSA_INSTAGRAM_URL
const linkedinUrl = process.env.NEXT_PUBLIC_TSA_LINKEDIN_URL

const hasWhatsapp = Boolean(whatsappNumber)

const heroAlt =
  "Profissional da TSA Gestão Contábil em um escritório acolhedor e organizado"

function whatsappLink(message: string) {
  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : "#contato"
}

const externalLinkProps = hasWhatsapp
  ? { target: "_blank", rel: "noreferrer" }
  : {}

const whatsappHref = whatsappLink(
  "Olá! Vim pelo site da TSA Gestão Contábil e gostaria de conversar sobre a contabilidade da minha empresa.",
)

const featuredService = {
  badge: "Serviço principal",
  title: "Contabilidade completa com acompanhamento próximo",
  description:
    "Rotinas contábeis e fiscais, apuração de impostos e obrigações acessórias — com explicação, acesso e orientação ao longo de toda a relação.",
  items: [
    "Escrituração contábil e fiscal",
    "Impostos e obrigações acessórias",
    "Folha e rotinas trabalhistas",
    "Orientação contínua para decidir",
  ],
  message:
    "Olá! Vim pelo site da TSA e gostaria de falar sobre a Contabilidade completa com acompanhamento próximo para a minha empresa.",
}

const services = [
  {
    title: "Contabilidade e escrituração",
    badge: "Rotina essencial",
    description:
      "Escrituração contábil e fiscal em dia, com visão clara da realidade da empresa.",
    items: ["Escrituração", "Apuração de impostos", "Obrigações acessórias"],
    image: "/servicos/contabilidade.png",
    imageAlt:
      "Livro contábil aberto com colunas de lançamentos ao lado de um demonstrativo impresso",
    message:
      "Olá! Vim pelo site da TSA e gostaria de falar sobre contabilidade e escrituração fiscal para a minha empresa.",
  },
  {
    title: "Folha e rotinas trabalhistas",
    badge: "Destaque",
    description:
      "Para empresas que já possuem equipe ou estão começando a contratar agora.",
    items: ["Folha de pagamento", "Admissões e desligamentos", "eSocial"],
    image: "/servicos/folha.png",
    imageAlt:
      "Planilha de folha de pagamento impressa ao lado de um calendário e envelopes",
    message:
      "Olá! Vim pelo site da TSA e gostaria de falar sobre folha de pagamento e rotinas trabalhistas.",
  },
  {
    title: "Planejamento e orientação tributária",
    badge: "Destaque",
    description:
      "Avaliação responsável da estrutura tributária, sempre dentro da legislação.",
    items: ["Análise do regime", "Cenários e comparativos", "Próximos passos"],
    image: "/servicos/tributario.png",
    imageAlt:
      "Balança de dois pratos ao lado de um relatório com análise comparativa de cenários",
    message:
      "Olá! Vim pelo site da TSA e gostaria de falar sobre planejamento e orientação tributária para a minha empresa.",
  },
  {
    title: "Regularização e pendências fiscais",
    badge: "Porta de entrada",
    description:
      "Organização das pendências para que o negócio siga com tranquilidade.",
    items: ["Diagnóstico", "Pendências fiscais", "MEI com débitos"],
    image: "/servicos/regularizacao.png",
    imageAlt:
      "Relatório de situação fiscal com obrigações regularizadas e carimbo de regular",
    message:
      "Olá! Vim pelo site da TSA e gostaria de falar sobre regularização da minha empresa e pendências fiscais.",
  },
  {
    title: "Abertura, alteração e encerramento",
    badge: "Porta de entrada",
    description:
      "Orientação em cada etapa para começar, reorganizar ou encerrar uma empresa.",
    items: ["Abertura de CNPJ", "Alterações contratuais", "Encerramento"],
    image: "/servicos/abertura.png",
    imageAlt:
      "Certidão de abertura de empresa ao lado de chaves com chaveiro laranja e uma planta",
    message:
      "Olá! Vim pelo site da TSA e gostaria de falar sobre abertura, alteração ou encerramento de empresa.",
  },
  {
    title: "Consultoria e assessoria contábil",
    badge: "Diferencial TSA",
    description:
      "Suporte no dia a dia e apoio em decisões relacionadas à gestão do negócio.",
    items: ["Dúvidas do dia a dia", "Leitura dos números", "Apoio em decisões"],
    image: "/servicos/consultoria.png",
    imageAlt:
      "Caderno com anotações de uma reunião de consultoria ao lado de duas canecas de café",
    message:
      "Olá! Vim pelo site da TSA e gostaria de falar sobre consultoria e assessoria contábil.",
  },
]

const methodSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Levantamento real da situação contábil e financeira da empresa.",
    icon: "/icons/bussola.png",
  },
  {
    number: "02",
    title: "Organização",
    description: "Processos e documentação em ordem, sem burocracia extra.",
    icon: "/icons/funil.png",
  },
  {
    number: "03",
    title: "Direção",
    description: "Recomendações claras para decisões de curto e médio prazo.",
    icon: "/icons/farol.png",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Presença contínua antes que a dúvida vire problema.",
    icon: "/icons/ponte.png",
  },
]

const values = [
  {
    title: "Clareza",
    description: "Tornar o que é complexo compreensível para o cliente.",
  },
  {
    title: "Proximidade",
    description: "Conhecer a realidade de cada negócio e estar acessível.",
  },
  {
    title: "Responsabilidade",
    description: "Cuidar de informações, obrigações e decisões com rigor.",
  },
  {
    title: "Ética",
    description: "Agir com transparência, integridade e respeito.",
  },
  {
    title: "Confiança",
    description: "Construir relações consistentes pela competência e presença.",
  },
]

const audiences = [
  "Tecnologia e informática",
  "Advocacia e serviços profissionais",
  "Saúde e bem-estar",
  "Educação, cursos e treinamentos",
  "Empresas prestadoras de serviços",
]

const sectionAnchorOffset = { base: "76px", md: "88px" }

function Kicker({
  children,
  color = "brand.primary",
}: {
  children: React.ReactNode
  color?: string
}) {
  return (
    <HStack gap="4" minW="0" align="center">
      <Box w="10" h="1px" bg="accent.warm" flex="0 0 auto" aria-hidden="true" />
      <Text textStyle="micro" color={color} minW="0" css={{ overflowWrap: "anywhere" }}>
        {children}
      </Text>
    </HStack>
  )
}

function DotTrail() {
  const dots = [
    { size: "3", color: "accent.balance" },
    { size: "3.5", color: "fg.muted" },
    { size: "4", color: "accent.warm" },
    { size: "5", color: "accent.warm" },
    { size: "6", color: "brand.primary" },
  ]

  return (
    <Box position="relative" w="full" maxW="300px" h="7" aria-hidden="true">
      <Box
        position="absolute"
        left="0"
        right="0"
        top="50%"
        h="1px"
        bg="border.subtle"
      />
      <Flex position="absolute" inset="0" align="center" justify="space-between">
        {dots.map((dot, index) => (
          <Box
            key={`${dot.size}-${index}`}
            boxSize={dot.size}
            borderRadius="full"
            bg={dot.color}
          />
        ))}
      </Flex>
    </Box>
  )
}

function CheckItem({
  children,
  onBrand = false,
}: {
  children: React.ReactNode
  onBrand?: boolean
}) {
  return (
    <HStack gap="3" align="flex-start" minW="0" w="full">
      <Flex
        mt="1"
        boxSize="5"
        flex="0 0 auto"
        borderRadius="full"
        bg={onBrand ? "accent.warm" : "rgba(244, 132, 32, 0.14)"}
        color={onBrand ? "brand.primary" : "accent.warm"}
        align="center"
        justify="center"
      >
        <LuCheck size="12" />
      </Flex>
      <Text
        textStyle="cta"
        fontWeight="regular"
        color={onBrand ? "fg.onBrand" : "fg.default"}
        minW="0"
        css={{ overflowWrap: "anywhere" }}
      >
        {children}
      </Text>
    </HStack>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <Stack
      role="group"
      position="relative"
      overflow="hidden"
      h="full"
      w="full"
      minW="0"
      maxW="100%"
      gap="0"
      bg="bg.surface"
      borderWidth="1px"
      borderColor="border.subtle"
      borderRadius="2xl"
      transition="transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease"
      _hover={{
        transform: "translateY(-6px)",
        borderColor: "rgba(0, 56, 88, 0.22)",
        boxShadow: "0 22px 50px rgba(0, 56, 88, 0.14)",
      }}
    >
      <Box position="relative" aspectRatio="16 / 9" overflow="hidden" flex="0 0 auto">
        <Box
          position="absolute"
          inset="0"
          transition="transform 600ms cubic-bezier(0.22, 1, 0.36, 1)"
          _groupHover={{ transform: "scale(1.06)" }}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 64rem) 33vw, (min-width: 48rem) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box position="absolute" top="4" left="4">
          <Box
            as="span"
            display="inline-block"
            bg="rgba(247, 243, 238, 0.92)"
            color="brand.primary"
            borderRadius="full"
            px="3"
            py="1.5"
            fontFamily="body"
            fontSize="10px"
            fontWeight="semibold"
            lineHeight="1"
            letterSpacing="0.1em"
            textTransform="uppercase"
            whiteSpace="nowrap"
            boxShadow="0 2px 12px rgba(0, 56, 88, 0.16)"
            backdropFilter="blur(6px)"
          >
            {service.badge}
          </Box>
        </Box>
      </Box>

      <Stack gap="0" flex="1" minW="0" px={{ base: "5", md: "7" }} pt="7" pb="6">
        <Heading
          as="h3"
          fontFamily="heading"
          fontSize={{ base: "1.2rem", md: "1.3125rem" }}
          lineHeight="1.3"
          fontWeight="semibold"
          letterSpacing="-0.01em"
          color="brand.primary"
          mb="3"
          css={{ textWrap: "balance", overflowWrap: "anywhere" }}
        >
          {service.title}
        </Heading>
        <Text
          fontSize="0.9375rem"
          lineHeight="1.6"
          color="fg.default"
          css={{ textWrap: "pretty", overflowWrap: "anywhere" }}
        >
          {service.description}
        </Text>

        <Stack
          gap="2"
          mt="auto"
          pt="6"
          borderTopWidth="1px"
          borderColor="border.subtle"
          minW="0"
        >
          {service.items.map((item) => (
            <HStack key={item} gap="2.5" align="center" minW="0">
              <Box
                boxSize="1.5"
                borderRadius="full"
                bg="accent.warm"
                flex="0 0 auto"
                aria-hidden="true"
              />
              <Text
                fontSize="0.8125rem"
                lineHeight="1.5"
                color="fg.muted"
                minW="0"
                css={{ overflowWrap: "anywhere" }}
              >
                {item}
              </Text>
            </HStack>
          ))}
        </Stack>
      </Stack>

      <Link
        href={whatsappLink(service.message)}
        {...externalLinkProps}
        aria-label={`Falar sobre ${service.title} no WhatsApp`}
        fontFamily="body"
        fontSize="0.8125rem"
        fontWeight="semibold"
        letterSpacing="0.02em"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="3"
        px={{ base: "5", md: "7" }}
        py="4"
        borderTopWidth="1px"
        borderColor="border.subtle"
        color="brand.primary"
        minW="0"
        transition="background 260ms ease, color 260ms ease"
        _groupHover={{ bg: "brand.primary", color: "fg.onBrand" }}
        _hover={{ textDecoration: "none" }}
      >
        <HStack gap="2.5" minW="0">
          <Box flex="0 0 auto">
            <FaWhatsapp size={16} aria-hidden="true" />
          </Box>
          <Text as="span" css={{ overflowWrap: "anywhere" }}>
            Falar sobre esse serviço
          </Text>
        </HStack>
        <Box
          as="span"
          display="inline-flex"
          flex="0 0 auto"
          transition="transform 240ms ease"
          _groupHover={{ transform: "translate(3px, -3px)" }}
        >
          <LuArrowUpRight size="16" />
        </Box>
      </Link>
    </Stack>
  )
}

export default function Home() {
  return (
    <Box overflowX="clip" maxW="100%">
      <SiteHeader whatsappNumber={whatsappNumber} />

      <Box as="main" minW="0" maxW="100%">
        <Box
          id="inicio"
          as="section"
          aria-labelledby="hero-title"
          position="relative"
          minH="100svh"
          overflow="hidden"
          bg="brand.primary"
          color="fg.onBrand"
        >
          <Box position="absolute" inset="0">
            <Box display={{ base: "none", lg: "block" }} position="absolute" inset="0">
              <Image
                src="/InicioTotal.png"
                alt={heroAlt}
                fill
                priority
                quality={100}
                sizes="(min-width: 64rem) 100vw, 0px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Box>
            <Box display={{ base: "block", lg: "none" }} position="absolute" inset="0">
              <Image
                src="/InicioTotal-mobile.png"
                alt={heroAlt}
                fill
                priority
                quality={100}
                sizes="(max-width: 63.99rem) 100vw, 0px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Box>
            <Box
              display={{ base: "block", lg: "none" }}
              position="absolute"
              inset="auto 0 0"
              width="100%"
              height="55%"
              background="linear-gradient(0deg, rgba(0, 56, 88, 0.96) 0%, rgba(0, 56, 88, 0.72) 58%, rgba(0, 56, 88, 0) 100%)"
              css={{
                maskImage: "linear-gradient(0deg, black 0%, black 68%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(0deg, black 0%, black 68%, transparent 100%)",
              }}
            />
            <Box
              display={{ base: "none", lg: "block" }}
              position="absolute"
              inset="0 auto 0 0"
              width="46%"
              height="100%"
              background="linear-gradient(90deg, rgba(0, 56, 88, 0.96) 0%, rgba(0, 56, 88, 0.78) 52%, rgba(0, 56, 88, 0) 100%)"
              css={{
                maskImage: "linear-gradient(90deg, black 0%, black 68%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, black 0%, black 68%, transparent 100%)",
              }}
            />
          </Box>

          <Container
            maxW="none"
            px={{ base: "5", md: "8", xl: "10" }}
            position="relative"
            zIndex="1"
            minH="100svh"
            display="flex"
            alignItems={{ base: "flex-end", lg: "center" }}
            pb={{ base: "16", lg: "0" }}
            pt={{ base: "28", lg: "0" }}
          >
            <Stack gap={{ base: "5", md: "6" }} maxW="680px" w="full" minW="0">
              <Kicker color="accent.warm">TSA Gestão Contábil · Rio de Janeiro</Kicker>
              <Heading
                id="hero-title"
                as="h1"
                textStyle="h1"
                color="fg.onBrand"
                css={{ textWrap: "balance", overflowWrap: "anywhere" }}
              >
                Segurança para cuidar.
                <Box as="span" display="block">
                  Clareza para decidir.
                </Box>
              </Heading>
              <Text textStyle="body" color="fg.onBrand" maxW="48ch" opacity="0.92">
                Contabilidade completa e próxima para quem empreende: cuidamos das
                obrigações e orientamos as decisões do seu negócio.
              </Text>
              <Flex gap="3" wrap="wrap" pt="1" w="full">
                <Button
                  asChild
                  size="lg"
                  bg="accent.warm"
                  color="brand.primary"
                  borderRadius="full"
                  px={{ base: "5", md: "7" }}
                  w={{ base: "full", sm: "auto" }}
                  _hover={{ bg: "fg.onBrand" }}
                >
                  <a href={whatsappHref} {...externalLinkProps}>
                    Conversar no WhatsApp
                    <FaWhatsapp />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  borderColor="rgba(247, 243, 238, 0.55)"
                  color="fg.onBrand"
                  borderRadius="full"
                  px={{ base: "5", md: "7" }}
                  w={{ base: "full", sm: "auto" }}
                  _hover={{ bg: "rgba(247, 243, 238, 0.1)" }}
                >
                  <a href="#servicos">
                    Ver serviços
                    <LuArrowDownRight />
                  </a>
                </Button>
              </Flex>
            </Stack>
          </Container>
        </Box>

        <Box
          bg="bg.brand"
          color="fg.onBrand"
          borderTopWidth="1px"
          borderColor="rgba(247,243,238,0.08)"
        >
          <Container maxW="1440px" px={{ base: "5", md: "8", xl: "12" }}>
            <SimpleGrid
              columns={{ base: 1, sm: 3 }}
              py={{ base: "8", md: "10" }}
              gap={{ base: "7", md: "0" }}
            >
              {[
                ["+10 anos", "de experiência na área contábil"],
                ["MBA", "em Gestão Financeira e Auditoria"],
                ["RJ", "atendimento online e próximo"],
              ].map(([value, label], index) => (
                <Stack
                  key={value}
                  gap="1"
                  px={{ base: "0", sm: "6" }}
                  borderLeftWidth={{ base: "0", sm: index === 0 ? "0" : "1px" }}
                  borderColor="rgba(247,243,238,0.16)"
                  align={{ base: "flex-start", sm: "center" }}
                  textAlign={{ base: "left", sm: "center" }}
                >
                  <Text
                    fontFamily="heading"
                    fontSize="h2"
                    fontWeight="semibold"
                    color="fg.onBrand"
                  >
                    {value}
                  </Text>
                  <Text textStyle="micro" color="accent.warm">
                    {label}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        <Box as="section" py={{ base: "20", md: "28" }} bg="bg.surface">
          <Container maxW="1200px" px={{ base: "5", md: "8" }}>
            <Reveal>
              <Grid
                templateColumns={{ base: "1fr", lg: "0.92fr 1.08fr" }}
                gap={{ base: "12", lg: "24" }}
                alignItems="center"
              >
                <Stack gap="6">
                  <Kicker>Contabilidade que explica</Kicker>
                  <Heading as="h2" textStyle="h2" color="brand.primary">
                    Seu contador entrega a guia. Mas explica o que ela significa?
                  </Heading>
                </Stack>
                <Stack gap="6">
                  <Text textStyle="body" color="fg.default">
                    Cumprir prazos e obrigações é o ponto de partida. Na TSA, você
                    também entende o que está acontecendo, quais decisões merecem
                    atenção e como a contabilidade se conecta à realidade do seu
                    negócio.
                  </Text>
                  <Stack gap="3">
                    <CheckItem>Informação técnica traduzida com clareza</CheckItem>
                    <CheckItem>Acesso real para perguntar e entender</CheckItem>
                    <CheckItem>Orientação antes que a dúvida vire problema</CheckItem>
                  </Stack>
                </Stack>
              </Grid>
            </Reveal>
          </Container>
        </Box>

        <Box bg="bg.brand" color="fg.onBrand" py={{ base: "14", md: "18" }}>
          <Container maxW="1200px" px={{ base: "5", md: "8" }}>
            <Reveal>
              <Stack gap={{ base: "10", md: "12" }}>
                <Stack gap="4" maxW="900px">
                  <Kicker color="accent.warm">Por que a TSA</Kicker>
                  <Heading as="h2" textStyle="h2" color="fg.onBrand" fontStyle="italic">
                    “Na TSA você não recebe apenas a contabilidade da sua empresa:
                    recebe clareza para entender e orientação para decidir.”
                  </Heading>
                  <Text textStyle="body" color="fg.onBrand" maxW="64ch" opacity="0.9">
                    Unimos rigor técnico a um atendimento próximo — para que o
                    empresário não se sinta perdido quando o assunto é contabilidade.
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
                  diretamente sobre ele — a conversa já começa no assunto certo.
                </Text>
              </Grid>

              <Reveal>
                <Box
                  w="full"
                  minW="0"
                  maxW="100%"
                  bg="bg.brand"
                  color="fg.onBrand"
                  borderRadius="2xl"
                  overflow="hidden"
                  p={{ base: "5", sm: "7", md: "10" }}
                >
                  <Grid
                    templateColumns={{ base: "1fr", lg: "1.15fr 0.85fr" }}
                    gap={{ base: "6", md: "7" }}
                    alignItems="center"
                    w="full"
                    minW="0"
                  >
                    <Stack gap="5" minW="0" w="full">
                      <HStack gap="3" wrap="wrap">
                        <Box
                          as="span"
                          borderWidth="1px"
                          borderColor="accent.warm"
                          color="accent.warm"
                          borderRadius="full"
                          px="3"
                          py="1"
                          textStyle="micro"
                        >
                          {featuredService.badge}
                        </Box>
                      </HStack>
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
                            Falar sobre contabilidade completa
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

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                gap={{ base: "5", md: "6" }}
                minW="0"
                w="full"
              >
                {services.map((service, index) => (
                  <Reveal key={service.title} delay={index * 60}>
                    <ServiceCard service={service} />
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
                <Button
                  asChild
                  variant="outline"
                  borderColor="brand.primary"
                  color="brand.primary"
                  borderRadius="full"
                  px="6"
                  w={{ base: "full", sm: "auto" }}
                  flexShrink="0"
                  _hover={{ bg: "brand.primary", color: "fg.onBrand" }}
                >
                  <a href="#contato">
                    Explicar minha situação
                    <LuArrowDownRight />
                  </a>
                </Button>
              </Flex>
            </Stack>
          </Container>
        </Box>

        <Box
          id="metodo"
          as="section"
          scrollMarginTop={sectionAnchorOffset}
          py={{ base: "20", md: "28" }}
          bg="bg.surface"
        >
          <Container maxW="1200px" px={{ base: "5", md: "8" }}>
            <Stack gap={{ base: "12", md: "16" }}>
              <Grid
                templateColumns={{ base: "1fr", lg: "1fr 0.8fr" }}
                gap="10"
                alignItems="end"
              >
                <Stack gap="5" maxW="730px">
                  <Kicker>Um sistema próprio de trabalho</Kicker>
                  <Heading as="h2" textStyle="h2" color="brand.primary">
                    Método Clareza: da situação real à decisão segura.
                  </Heading>
                </Stack>
                <Stack gap="6">
                  <Text textStyle="body" color="fg.default">
                    Quatro etapas organizam a relação com a TSA para que você saiba
                    onde está, o que precisa ser feito e quais são os próximos passos.
                  </Text>
                  <DotTrail />
                </Stack>
              </Grid>

              <Reveal>
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 4 }}
                  gap="0"
                  borderTopWidth="1px"
                  borderColor="border.subtle"
                  minW="0"
                  w="full"
                >
                  {methodSteps.map((step, index) => (
                    <Stack
                      key={step.number}
                      position="relative"
                      pt="9"
                      pb="8"
                      px={{ base: "0", lg: index === 0 ? "0" : "7" }}
                      pr={{ base: "0", lg: "7" }}
                      borderBottomWidth={{ base: "1px", lg: "0" }}
                      borderLeftWidth={{ base: "0", lg: index === 0 ? "0" : "1px" }}
                      borderColor="border.subtle"
                      gap="4"
                      minW="0"
                    >
                      <Box
                        position="absolute"
                        top="-7px"
                        left={{ base: "0", lg: index === 0 ? "0" : "7" }}
                        boxSize={index === 3 ? "4" : "3.5"}
                        borderRadius="full"
                        bg={index === 3 ? "brand.primary" : "accent.warm"}
                      />
                      <Flex
                        boxSize="12"
                        borderWidth="1px"
                        borderColor="rgba(244, 132, 32, 0.45)"
                        borderRadius="full"
                        align="center"
                        justify="center"
                        bg="bg.canvas"
                      >
                        <Image
                          src={step.icon}
                          alt=""
                          width={829}
                          height={829}
                          style={{
                            width: "22px",
                            height: "22px",
                            objectFit: "contain",
                          }}
                        />
                      </Flex>
                      <Text textStyle="micro" color="brand.primary">
                        {step.number}
                      </Text>
                      <Heading as="h3" textStyle="h3" color="brand.primary">
                        {step.title}
                      </Heading>
                      <Text textStyle="body" color="fg.default">
                        {step.description}
                      </Text>
                    </Stack>
                  ))}
                </SimpleGrid>
              </Reveal>
            </Stack>
          </Container>
        </Box>

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
                  src="/home.png"
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

              <Stack gap="7">
                <Kicker>Quem conduz</Kicker>
                <Heading as="h2" textStyle="h2" color="brand.primary">
                  Conhecimento técnico com atenção genuína a quem está do outro lado.
                </Heading>
                <Text textStyle="body" color="fg.default">
                  A TSA nasceu durante a pandemia, quando a experiência contábil se
                  encontrou com os desafios reais de empreender. O propósito ficou
                  claro: trazer clareza onde existe dúvida e segurança para quem toma
                  decisões todos os dias.
                </Text>
                <Text textStyle="body" color="fg.default">
                  Mais de 10 anos de atuação na área, combinando formação, análise
                  criteriosa e uma relação próxima com cada cliente — porque
                  contabilidade boa também explica.
                </Text>

                <Stack gap="3">
                  {[
                    "Graduação em Ciências Contábeis · Faculdades Integradas Simonsen",
                    "MBA em Gestão Financeira e Auditoria Contábil · UCB",
                    "Perícia Judicial Contábil · Escola de Administração Judiciária · PJERJ",
                  ].map((credential) => (
                    <HStack key={credential} gap="3" align="flex-start">
                      <Box
                        mt="2"
                        boxSize="2"
                        borderRadius="full"
                        bg="accent.warm"
                        flex="0 0 auto"
                      />
                      <Text textStyle="body" color="fg.default">
                        {credential}
                      </Text>
                    </HStack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Container>
        </Box>

        <Box as="section" py={{ base: "20", md: "28" }} bg="bg.surface">
          <Container maxW="1200px" px={{ base: "5", md: "8" }}>
            <Reveal>
              <Stack gap={{ base: "10", md: "14" }}>
                <Stack gap="5" maxW="720px">
                  <Kicker>O que nos guia</Kicker>
                  <Heading as="h2" textStyle="h2" color="brand.primary">
                    Valores que o cliente sente na prática — não só no discurso.
                  </Heading>
                </Stack>
                <SimpleGrid
                  columns={{ base: 1, sm: 2, lg: 5 }}
                  gap={{ base: "8", md: "6" }}
                >
                  {values.map((value, index) => (
                    <Stack
                      key={value.title}
                      gap="3"
                      borderTopWidth="2px"
                      borderColor="accent.warm"
                      pt="5"
                    >
                      <Text textStyle="micro" color="fg.muted">
                        0{index + 1}
                      </Text>
                      <Heading as="h3" textStyle="h3" color="brand.primary">
                        {value.title}
                      </Heading>
                      <Text textStyle="body" color="fg.default">
                        {value.description}
                      </Text>
                    </Stack>
                  ))}
                </SimpleGrid>
              </Stack>
            </Reveal>
          </Container>
        </Box>

        <Box as="section" py={{ base: "20", md: "28" }} bg="bg.canvas">
          <Container maxW="1200px" px={{ base: "5", md: "8" }}>
            <Reveal>
              <Grid
                templateColumns={{ base: "1fr", lg: "0.95fr 1.05fr" }}
                gap={{ base: "12", lg: "20" }}
              >
                <Stack gap="6">
                  <Kicker>Para quem a TSA existe</Kicker>
                  <Heading as="h2" textStyle="h2" color="brand.primary">
                    Prestadores de serviços e PMEs que querem entender o porquê das
                    decisões.
                  </Heading>
                  <Text textStyle="body" color="fg.default">
                    Especialmente negócios no Rio de Janeiro que estão formando equipe,
                    profissionalizando processos ou cansaram de uma contabilidade
                    distante e pouco orientadora.
                  </Text>
                </Stack>

                <Stack gap="0" borderTopWidth="1px" borderColor="border.subtle">
                  {audiences.map((audience) => (
                    <Flex
                      key={audience}
                      align="center"
                      justify="space-between"
                      gap="4"
                      py="4"
                      borderBottomWidth="1px"
                      borderColor="border.subtle"
                    >
                      <Text textStyle="cta" color="fg.default">
                        {audience}
                      </Text>
                      <Box color="accent.warm" flex="0 0 auto">
                        <LuArrowUpRight size="16" />
                      </Box>
                    </Flex>
                  ))}
                  <Text textStyle="body" color="fg.muted" pt="5">
                    Para MEIs, o atendimento é direcionado à fase de crescimento e
                    transição para uma estrutura empresarial.
                  </Text>
                </Stack>
              </Grid>
            </Reveal>
          </Container>
        </Box>

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
                  <Kicker>Vamos começar pela sua dúvida</Kicker>
                  <Heading as="h2" textStyle="h2" color="brand.primary">
                    Vale a pena conversar com uma contabilidade que explica.
                  </Heading>
                  <Text textStyle="body" color="fg.default">
                    A principal porta de entrada é o WhatsApp. Se preferir, deixe seus
                    dados no formulário e a TSA retorna.
                  </Text>
                </Stack>

                <Button
                  asChild
                  size="lg"
                  alignSelf={{ base: "stretch", sm: "flex-start" }}
                  w={{ base: "full", sm: "auto" }}
                  maxW="100%"
                  bg="#25D366"
                  color="white"
                  borderRadius="full"
                  px={{ base: "5", md: "7" }}
                  h="auto"
                  minH="12"
                  whiteSpace="normal"
                  _hover={{ bg: "#1EBE5D" }}
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
                    },
                  }}
                >
                  <a href={whatsappHref} {...externalLinkProps}>
                    Abrir conversa no WhatsApp
                    <FaWhatsapp />
                  </a>
                </Button>

                <Stack gap="5">
                  <ContactDetail icon={<LuMapPin />} title="Rio de Janeiro — RJ">
                    Atuação próxima e regional, com atendimento online
                  </ContactDetail>
                  <ContactDetail icon={<LuMonitor />} title="Atendimento online">
                    Com acesso e acompanhamento de verdade
                  </ContactDetail>
                  <ContactDetail icon={<LuClock3 />} title="Segunda a sexta">
                    Das 9h às 18h
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
                <ContactForm
                  whatsappNumber={whatsappNumber}
                  formEndpoint={contactFormEndpoint}
                />
              </Box>
            </Grid>
          </Container>
        </Box>
      </Box>

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
              <HStack gap="3" pt="1">
                {instagramUrl ? (
                  <Link
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram da TSA"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxSize="10"
                    borderRadius="full"
                    borderWidth="1px"
                    borderColor="rgba(247,243,238,0.28)"
                    color="fg.onBrand"
                    _hover={{
                      color: "brand.primary",
                      bg: "accent.warm",
                      borderColor: "accent.warm",
                    }}
                  >
                    <LuInstagram size="19" />
                  </Link>
                ) : null}
                {linkedinUrl ? (
                  <Link
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn da TSA"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxSize="10"
                    borderRadius="full"
                    borderWidth="1px"
                    borderColor="rgba(247,243,238,0.28)"
                    color="fg.onBrand"
                    _hover={{
                      color: "brand.primary",
                      bg: "accent.warm",
                      borderColor: "accent.warm",
                    }}
                  >
                    <LuLinkedin size="19" />
                  </Link>
                ) : null}
                {hasWhatsapp ? (
                  <Link
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp da TSA"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxSize="10"
                    borderRadius="full"
                    borderWidth="1px"
                    borderColor="rgba(247,243,238,0.28)"
                    color="fg.onBrand"
                    _hover={{
                      color: "brand.primary",
                      bg: "accent.warm",
                      borderColor: "accent.warm",
                    }}
                  >
                    <FaWhatsapp size={19} />
                  </Link>
                ) : null}
              </HStack>
            </Stack>

            <Stack gap="4">
              <Text textStyle="micro" color="accent.warm">
                Seções
              </Text>
              <Stack gap="2">
                {[
                  ["Início", "#inicio"],
                  ["Serviços", "#servicos"],
                  ["Método Clareza", "#metodo"],
                  ["Sobre", "#sobre"],
                  ["Contato", "#contato"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    textStyle="cta"
                    color="fg.onBrand"
                    _hover={{ color: "accent.warm" }}
                  >
                    {label}
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Stack gap="4">
              <Text textStyle="micro" color="accent.warm">
                Atendimento
              </Text>
              <Stack gap="2">
                <Text textStyle="body" color="fg.onBrand">
                  Rio de Janeiro — RJ
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

      {hasWhatsapp ? <WhatsappFloat href={whatsappHref} /> : null}
    </Box>
  )
}

function ContactDetail({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <HStack gap="4" align="flex-start">
      <Flex
        boxSize="10"
        borderRadius="full"
        bg="accent.warm"
        color="brand.primary"
        align="center"
        justify="center"
        flex="0 0 auto"
      >
        {icon}
      </Flex>
      <Stack gap="0">
        <Text fontWeight="semibold" color="brand.primary">
          {title}
        </Text>
        <Text textStyle="body" color="fg.default">
          {children}
        </Text>
      </Stack>
    </HStack>
  )
}
