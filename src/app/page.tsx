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
const instagramUrl =
  process.env.NEXT_PUBLIC_TSA_INSTAGRAM_URL ??
  "https://www.instagram.com/tsa.gestaocontabil/"
const linkedinUrl =
  process.env.NEXT_PUBLIC_TSA_LINKEDIN_URL ??
  "https://www.linkedin.com/in/thaise-oliveira/"

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
    title: "Contabilidade completa",
    description:
      "Rotinas contábeis e fiscais com suporte e clareza em cada etapa.",
    items: ["Escrituração contábil e fiscal", "Impostos e obrigações acessórias", "Folha e rotinas trabalhistas", "Orientação contínua para decidir"],
    image: "/servicos/contabilidade-real.jpg",
    imageAlt:
      "Profissionais analisando documentos em um escritório",
  },
  {
    title: "Contabilidade e escrituração",
    description:
      "Escrituração em dia, com clareza sobre a real situação da empresa.",
    items: ["Demonstrativos contábeis", "Apuração de impostos", "Obrigações acessórias", "Balancetes mensais"],
    image: "/servicos/escrituracao-real.jpg",
    imageAlt:
      "Documentos e gráficos organizados ao lado de um computador",
  },
  {
    title: "Folha e rotinas trabalhistas",
    description:
      "Rotinas de folha organizadas e explicadas para sua equipe.",
    items: ["Folha de pagamento", "Admissões e desligamentos", "eSocial", "Férias e rescisões"],
    image: "/servicos/folha-real.jpg",
    imageAlt:
      "Equipe reunida para discutir informações em uma mesa de trabalho",
  },
  {
    title: "Planejamento tributário",
    description:
      "Avaliação clara da estrutura tributária, dentro da legislação.",
    items: [
      "Análise do regime",
      "Cenários e comparativos",
      "Plano de ação tributário",
      "Simulação de economia tributária",
    ],
    image: "/servicos/tributario-real.jpg",
    imageAlt:
      "Documentos fiscais com moedas e a palavra tax",
  },
  {
    title: "Regularização fiscal",
    description:
      "Organização das pendências para o negócio seguir com tranquilidade.",
    items: [
      "Diagnóstico",
      "Parcelamento de débitos",
      "MEI com débitos",
      "Negociação de acordos",
    ],
    image: "/servicos/regularizacao-real.jpg",
    imageAlt:
      "Duas pessoas se cumprimentando durante uma reunião de negócios",
  },
  {
    title: "Abertura e encerramento",
    description:
      "Orientação clara para começar, reorganizar ou encerrar a empresa.",
    items: [
      "Abertura de CNPJ",
      "Alterações contratuais",
      "Baixa de CNPJ",
      "Licenças e registros",
    ],
    image: "/servicos/abertura-real.jpg",
    imageAlt:
      "Equipe unindo as mãos sobre documentos e gráficos",
  },
]

const methodSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Você entende exatamente onde sua empresa está hoje, sem letras miúdas.",
    icon: "/icons/bussola.png",
  },
  {
    number: "02",
    title: "Organização",
    description: "Suas informações ficam em ordem, sem você precisar correr atrás.",
    icon: "/icons/funil.png",
  },
  {
    number: "03",
    title: "Direção",
    description: "Você recebe recomendações claras pra decidir com segurança.",
    icon: "/icons/farol.png",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Você tem alguém por perto antes que a dúvida vire problema.",
    icon: "/icons/ponte.png",
  },
]

const values = [
  {
    title: "Missão",
    description: "Traduzir a contabilidade em clareza, para você decidir com mais segurança.",
  },
  {
    title: "Visão",
    description: "Ser referência em contabilidade próxima e estratégica no Rio de Janeiro.",
  },
  {
    title: "Valores",
    description: "Clareza, proximidade e responsabilidade em cada relação.",
  },
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

function ServiceCard({
  service,
  index,
  href,
}: {
  service: (typeof services)[number]
  index: number
  href?: string
}) {
  const card = (
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
      cursor={href ? "pointer" : undefined}
      transform="translateY(0) rotate(0)"
      transformOrigin="center center"
      willChange="transform"
      transition="transform 520ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 280ms ease, border-color 280ms ease"
      _hover={{
        transform: `translateY(-9px) rotate(${index % 2 === 0 ? "-0.9deg" : "0.9deg"}) scale(1.008)`,
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
        <Box
          position="absolute"
          inset="0"
          pointerEvents="none"
          background="linear-gradient(135deg, rgba(0, 56, 88, 0.3), rgba(0, 56, 88, 0.08))"
          backdropFilter="saturate(0.88) contrast(1.04)"
          transition="background 280ms ease, backdrop-filter 280ms ease"
          _groupHover={{
            background:
              "linear-gradient(135deg, rgba(0, 56, 88, 0.18), rgba(0, 56, 88, 0.04))",
            backdropFilter: "saturate(0.98) contrast(1.02)",
          }}
        />
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
    </Stack>
  )

  if (!href) return card

  return (
    <Link
      href={href}
      aria-label={`Ir para o formulário sobre ${service.title}`}
      display="block"
      h="full"
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
      _focusVisible={{
        outline: "3px solid rgba(244, 132, 32, 0.65)",
        outlineOffset: "4px",
      }}
    >
      {card}
    </Link>
  )
}

export default function Home() {
  return (
    <Box overflowX="clip" maxW="100%">
      <SiteHeader
        whatsappNumber={whatsappNumber}
      />

      <Box as="main" minW="0" maxW="100%">
        <Box
          id="inicio"
          as="section"
          aria-labelledby="hero-title"
          position="relative"
          minH={{ base: "auto", lg: "100svh" }}
          overflow="hidden"
          bg="brand.primary"
          color="fg.onBrand"
        >
          <Box display={{ base: "none", lg: "block" }} position="absolute" inset="0">
            <Image
              src="/BannerPrincipal.png"
              alt={heroAlt}
              fill
              priority
              quality={100}
              sizes="(min-width: 64rem) 100vw, 0px"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <Box
              position="absolute"
              inset="0 auto 0 0"
              width="60%"
              height="100%"
              background="linear-gradient(90deg, rgba(0, 56, 88, 0.96) 0%, rgba(0, 56, 88, 0.78) 52%, rgba(0, 56, 88, 0) 100%)"
              css={{
                maskImage: "linear-gradient(90deg, black 0%, black 68%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, black 0%, black 68%, transparent 100%)",
              }}
            />
          </Box>

          <Box
            display={{ base: "block", lg: "none" }}
            position="relative"
            h={{ base: "44svh", sm: "46svh" }}
            minH="340px"
            overflow="hidden"
          >
            <Image
              src="/BannerPrincipal.png"
              alt={heroAlt}
              fill
              priority
              quality={100}
              sizes="(max-width: 63.99rem) 100vw, 0px"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <Box
              position="absolute"
              inset="0"
              background="linear-gradient(180deg, rgba(0, 56, 88, 0.58) 0%, rgba(0, 56, 88, 0.14) 28%, rgba(0, 56, 88, 0) 48%)"
            />
          </Box>

          <Container
            maxW="none"
            px={{ base: "5", md: "8", xl: "10" }}
            position="relative"
            zIndex="1"
            minH={{ base: "auto", lg: "100svh" }}
            display={{ base: "block", lg: "flex" }}
            alignItems="center"
            mt={{ base: "-10", lg: "0" }}
            pt={{ base: "10", lg: "0" }}
            pb={{ base: "14", lg: "0" }}
            bg={{ base: "bg.surface", lg: "transparent" }}
            color={{ base: "fg.default", lg: "fg.onBrand" }}
            borderTopLeftRadius={{ base: "3xl", lg: "0" }}
            borderTopRightRadius={{ base: "3xl", lg: "0" }}
          >
            <Stack
              gap={{ base: "4", md: "6" }}
              maxW={{ base: "34rem", lg: "680px" }}
              w="full"
              minW="0"
            >
              <Kicker color="accent.warm">CONTABILIDADE PARA EMPRESAS EM CRESCIMENTO</Kicker>
              <Heading
                id="hero-title"
                as="h1"
                textStyle="h1"
                color={{ base: "brand.primary", lg: "fg.onBrand" }}
                fontSize={{ base: "clamp(2.25rem, 10vw, 3rem)", md: "h1" }}
                css={{ textWrap: "balance", overflowWrap: "anywhere" }}
              >
                Sua contabilidade deve trazer clareza, não mais dúvidas.
              </Heading>
              <Text
                textStyle="body"
                color={{ base: "fg.default", lg: "fg.onBrand" }}
                maxW={{ base: "34ch", md: "48ch" }}
                opacity="0.92"
              >
                Organizamos, acompanhamos e traduzimos os números da sua empresa para que você entenda melhor o negócio e tome decisões com mais segurança.

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
                  minH="12"
                  _hover={{ bg: "fg.onBrand" }}
                >
                  <a href={whatsappHref} {...externalLinkProps}>
                    Quero conversar sobre minha empresa
                    <FaWhatsapp />
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
                  <Kicker>Sua empresa cresceu.</Kicker>
                  <Heading as="h2" textStyle="h2" color="brand.primary">
                    Mas você entende melhor os números hoje?
                  </Heading>
                </Stack>
                <Stack gap="6">
                  <Text textStyle="body" color="fg.default">
                    À medida que o negócio fica mais complexo, receber informações não é suficiente. Você precisa conseguir entendê-las para decidir com mais segurança.
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
                      src="/BannerContabilidade.png"
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
                    <ServiceCard
                      service={service}
                      index={index}
                      href={index < 2 ? "#contato" : undefined}
                    />
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

              <Stack gap="4">
                <Kicker>Quem conduz</Kicker>
                <Heading as="h2" textStyle="h2" color="brand.primary" mb="4">
                  Conhecimento técnico com atenção genuína a quem está do outro lado.
                </Heading>
                <Text textStyle="body" color="fg.default">
                  Sou Thaise, contadora e gestora, com mais de 10 anos de experiência em
                  Contabilidade, Gestão Financeira e Auditoria.
                </Text>
                <Text textStyle="body" color="fg.default">
                  Aprendi, ao longo desses anos, que contabilidade não deve ser só sobre
                  impostos, guias e obrigações: ela precisa{" "}
                  <Text as="em" fontWeight="semibold">
                    ajudar o empresário a entender o negócio e decidir com clareza
                  </Text>
                  . Foi esse entendimento, amadurecido durante a pandemia ao lado de
                  empresários enfrentando desafios reais, que deu origem à TSA.
                </Text>
                <Text textStyle="body" color="fg.default">
                  Sou formada em Ciências Contábeis, com MBA em Gestão Financeira e
                  Auditoria Contábil e formação em Perícia Judicial Contábil.
                </Text>
                <Text textStyle="body" color="fg.default">
                  Boa parte da minha visão profissional, porém, nasceu da prática:{" "}
                  <Text as="em" fontWeight="semibold">
                    acompanhando empresas em diferentes fases de crescimento.
                  </Text>
                </Text>
                <Text textStyle="body" color="fg.default">
                  Hoje, à frente da TSA, ofereço uma contabilidade mais próxima,
                  estratégica e fácil de compreender. Quero que cada empresário saiba onde
                  sua empresa está, o que os números dizem e quais decisões podem fortalecer
                  o próximo passo.
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
                    Fale sobre o momento do seu CNPJ hoje: o que está em dia, o que falta e que tipo de suporte você precisa hoje. É por aí que a gente começa.
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
