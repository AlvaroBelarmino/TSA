import { ContactForm } from "@/components/contact-form"
import { MobileMethodSteps } from "@/components/mobile-method-steps"
import { Reveal } from "@/components/reveal"
import { ScrollLink } from "@/components/scroll-link"
import { SiteHeader } from "@/components/site-header"
import SolnixAssinatura from "@/components/solnixAssinatura"
import { WhatsappFloat } from "@/components/whatsapp-float"
import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import Image from "next/image"
import type { IconType } from "react-icons"
import { FaWhatsapp } from "react-icons/fa"
import {
  LuArrowRight,
  LuArrowUpRight,
  LuCalendarDays,
  LuChartNoAxesCombined,
  LuClock3,
  LuInstagram,
  LuLinkedin,
  LuMapPin,
  LuMonitor,
} from "react-icons/lu"

const whatsappNumber = process.env.NEXT_PUBLIC_TSA_WHATSAPP_NUMBER?.replace(/\D/g, "")
const contactFormEndpoint = process.env.NEXT_PUBLIC_TSA_CONTACT_FORM_ENDPOINT
const instagramUrl =
  process.env.NEXT_PUBLIC_TSA_INSTAGRAM_URL ?? "https://www.instagram.com/tsa.gestaocontabil/"
const linkedinUrl =
  process.env.NEXT_PUBLIC_TSA_LINKEDIN_URL ?? "https://www.linkedin.com/in/thaise-oliveira/"
const hasWhatsapp = Boolean(whatsappNumber)
const externalLinkProps = hasWhatsapp ? { target: "_blank", rel: "noreferrer" } : {}

function whatsappLink(message: string) {
  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : "#contato"
}

const whatsappHref = whatsappLink(
  "Olá! Vim pelo site da TSA Gestão Contábil e gostaria de conversar sobre a contabilidade da minha empresa.",
)

const featuredService = {
  title: "Contabilidade completa com acompanhamento próximo",
  description:
    "Rotinas contábeis e fiscais, apuração de impostos e obrigações acessórias, com explicação, acesso e orientação ao longo de toda a relação.",
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
    description: "Rotinas contábeis e fiscais com suporte e clareza em cada etapa.",
    items: ["Escrituração contábil e fiscal", "Impostos e obrigações acessórias", "Folha e rotinas trabalhistas", "Orientação contínua para decidir"],
    image: "/servicos/contabilidade-real.jpg",
    imageAlt: "Profissionais analisando documentos em um escritório",
  },
  {
    title: "Contabilidade e escrituração",
    description: "Escrituração em dia, com clareza sobre a real situação da empresa.",
    items: ["Demonstrativos contábeis", "Apuração de impostos", "Obrigações acessórias", "Balancetes mensais"],
    image: "/servicos/escrituracao-real.jpg",
    imageAlt: "Documentos e gráficos organizados ao lado de um computador",
  },
  {
    title: "Folha e rotinas trabalhistas",
    description: "Rotinas de folha organizadas e explicadas para sua equipe.",
    items: ["Folha de pagamento", "Admissões e desligamentos", "eSocial", "Férias e rescisões"],
    image: "/servicos/folha-real.jpg",
    imageAlt: "Equipe reunida para discutir informações em uma mesa de trabalho",
  },
  {
    title: "Planejamento tributário",
    description: "Avaliação clara da estrutura tributária, dentro da legislação.",
    items: ["Análise do regime", "Cenários e comparativos", "Plano de ação tributário", "Simulação de economia tributária"],
    image: "/servicos/tributario-real.jpg",
    imageAlt: "Documentos fiscais com moedas e a palavra tax",
  },
  {
    title: "Regularização fiscal",
    description: "Organização das pendências para o negócio seguir com tranquilidade.",
    items: ["Diagnóstico", "Parcelamento de débitos", "MEI com débitos", "Negociação de acordos"],
    image: "/servicos/regularizacao-real.jpg",
    imageAlt: "Duas pessoas se cumprimentando durante uma reunião de negócios",
  },
  {
    title: "Abertura e encerramento",
    description: "Orientação clara para começar, reorganizar ou encerrar a empresa.",
    items: ["Abertura de CNPJ", "Alterações contratuais", "Baixa de CNPJ", "Licenças e registros"],
    image: "/servicos/abertura-real.jpg",
    imageAlt: "Equipe unindo as mãos sobre documentos e gráficos",
  },
]

const methodSteps = [
  { number: "01", title: "Diagnóstico", description: "Você entende exatamente onde sua empresa está hoje, sem letras miúdas.", icon: "/icons/bussola.png" },
  { number: "02", title: "Organização", description: "Suas informações ficam em ordem, sem você precisar correr atrás.", icon: "/icons/funil.png" },
  { number: "03", title: "Direção", description: "Você recebe recomendações claras pra decidir com segurança.", icon: "/icons/farol.png" },
  { number: "04", title: "Acompanhamento", description: "Você tem alguém por perto antes que a dúvida vire problema.", icon: "/icons/ponte.png" },
]

const values = [
  { title: "Missão", description: "Traduzir a contabilidade em clareza, para você decidir com mais segurança." },
  { title: "Visão", description: "Ser referência em contabilidade próxima e estratégica no Rio de Janeiro." },
  { title: "Valores", description: "Clareza, proximidade e responsabilidade em cada relação." },
]

const experienceHighlights = [
  { value: "+10 anos", label: "de experiência na área contábil", icon: LuCalendarDays },
  { value: "MBA", label: "em gestão financeira e auditoria", icon: LuChartNoAxesCombined },
  { value: "RJ", label: "atendimento online e próximo", icon: LuMapPin },
]

const contactDetails: Array<{ icon: IconType; title: string; description: string }> = [
  { icon: LuMapPin, title: "Rio de Janeiro, RJ", description: "Atuação próxima e regional, com atendimento online" },
  { icon: LuMonitor, title: "Atendimento online", description: "Com acesso e acompanhamento de verdade" },
  { icon: LuClock3, title: "Segunda a sexta", description: "Das 9h às 18h" },
]

const socialLinks: Array<{ href: string; label: string; icon: IconType; external: boolean }> = [
  { href: whatsappHref, label: "WhatsApp da TSA", icon: FaWhatsapp, external: hasWhatsapp },
  { href: instagramUrl, label: "Instagram da TSA", icon: LuInstagram, external: true },
  { href: linkedinUrl, label: "LinkedIn da TSA", icon: LuLinkedin, external: true },
]

const footerLinks = [
  ["Início", "inicio"],
  ["Serviços", "servicos"],
  ["Método Clareza", "metodo"],
  ["Sobre", "sobre"],
  ["Contato", "contato"],
] as const

const shellProps = { w: { base: "calc(100% - 2.5rem)", md: "min(93%, 1320px)" }, mx: "auto" } as const
const sectionHeading = { fontSize: { base: "clamp(1.85rem, 7.5vw, 2.8rem)", md: "clamp(2rem, 3.2vw, 3.35rem)" }, lineHeight: "1.12", letterSpacing: "-0.035em" } as const

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <Flex align="center" gap="3.5" mb="5" color={light ? "fg.onBrand" : "brand.primary"} fontSize="0.69rem" fontWeight="700" lineHeight="1.4" letterSpacing="0.16em" textTransform="uppercase">
      <Box w="8" h="2px" flex="none" bg="accent.warm" aria-hidden="true" />
      <Box as="span">{children}</Box>
    </Flex>
  )
}

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      {...externalLinkProps}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      gap="3"
      minH="3.3rem"
      px="5"
      py="3.5"
      maxW="full"
      bg="accent.warm"
      color="brand.primary"
      fontSize="0.9rem"
      fontWeight="700"
      lineHeight="1.35"
      textAlign="center"
      textDecoration="none"
      boxShadow="0 10px 22px rgba(244, 132, 32, 0.15)"
      transition="transform 250ms cubic-bezier(0.22, 1, 0.36, 1), background 250ms ease, box-shadow 250ms ease"
      _hover={{ bg: "#f99132", color: "brand.primary", transform: "translateY(-3px)", boxShadow: "0 15px 28px rgba(244, 132, 32, 0.24)" }}
      _active={{ transform: "translateY(0) scale(0.985)" }}
    >
      {children}
    </Link>
  )
}

function ServiceTile({ service, index }: { service: (typeof services)[number]; index: number }) {
  const dark = index % 2 !== 0

  return (
    <Reveal delay={(index % 3) * 85} variant="slide">
      <Box
        as="details"
        bg="transparent"
        minW="0"
        role="group"
        css={{
          "&:hover .service-photo, &[open] .service-photo": { transform: "scale(1.07)" },
          "&:hover .service-pane, &[open] .service-pane": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
          "&[open] .service-arrow": { transform: "rotate(45deg)" },
        }}
      >
        <Box as="summary" position="relative" display="block" minH={{ base: "285px", sm: "320px" }} overflow="hidden" cursor="pointer" listStyleType="none" css={{ "&::-webkit-details-marker": { display: "none" } }}>
          <Box position="absolute" inset="0" overflow="hidden">
            <Image className="service-photo" src={service.image} alt={service.imageAlt} fill sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw" style={{ objectFit: "cover", transition: "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)" }} />
          </Box>
          <Flex
            className="service-pane"
            position="relative"
            direction="column"
            justify="flex-start"
            w={{ base: "79%", sm: "84%" }}
            minH={{ base: "285px", sm: "320px" }}
            p={{ base: "1.3rem 3rem 1.3rem 1.25rem", sm: "1.6rem 4rem 1.5rem 1.55rem" }}
            bg={dark ? "rgba(0, 56, 88, 0.95)" : "white"}
            color={dark ? "white" : "brand.primary"}
            clipPath="polygon(0 0, 82% 0, 100% 100%, 0 100%)"
            transition="clip-path 450ms cubic-bezier(0.22, 1, 0.36, 1)"
          >
            <Text as="span" fontFamily="heading" fontSize="1.4rem" color="#d2670a">0{index + 1}</Text>
            <Text as="span" maxW="16ch" mt={{ base: "5", lg: "9" }} fontFamily="heading" fontSize={{ base: "1.6rem", md: "clamp(1.28rem, 1.7vw, 1.82rem)" }} fontWeight="600" lineHeight="1.17">{service.title}</Text>
            <Text as="span" maxW="20ch" mt="2.5" fontSize="0.75rem" lineHeight="1.5">{service.description}</Text>
            <Box className="service-arrow" display="grid" placeItems="center" boxSize="8" mt="auto" borderBottom="1px solid currentColor" transition="transform 300ms ease" aria-hidden="true"><LuArrowUpRight /></Box>
          </Flex>
        </Box>
        <Box p="1.5rem 1.55rem 1.6rem">
          <Stack as="ul" gap="2.5" mb="5" p="0" listStyleType="none">
            {service.items.map((item) => (
              <Text as="li" key={item} position="relative" pl="4" color="#29475b" fontSize="0.8rem" _before={{ content: '""', position: "absolute", left: "0", top: "0.5rem", boxSize: "0.4rem", bg: "accent.warm" }}>{item}</Text>
            ))}
          </Stack>
          <Link href={whatsappLink(`Olá! Gostaria de saber mais sobre ${service.title} com a TSA.`)} {...externalLinkProps} display="inline-flex" alignItems="center" gap="1.5" minH="44px" color="brand.primary" fontSize="0.8rem" fontWeight="700" textDecoration="underline" textDecorationColor="accent.warm" textUnderlineOffset="0.3rem" _hover={{ "& svg": { transform: "translate(2px, -2px)" } }}>
            Conversar sobre este serviço <LuArrowUpRight aria-hidden="true" />
          </Link>
        </Box>
      </Box>
    </Reveal>
  )
}

export default function Home() {
  return (
    <Box
      bg="bg.canvas"
      color="fg.default"
      overflow="clip"
      css={{
        "@keyframes tsa-enter": {
          from: { opacity: 0, transform: "translateY(28px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "@keyframes tsa-photo": { to: { transform: "scale(1)" } },
        "& section[id]": { scrollMarginTop: "88px" },
        "& a:focus-visible, & button:focus-visible, & summary:focus-visible": { outline: "3px solid #f48420", outlineOffset: "4px" },
        "@media (max-width: 599px)": { "& section[id]": { scrollMarginTop: "76px" } },
        "@media (prefers-reduced-motion: reduce)": {
          "& *, & *::before, & *::after": { animationDuration: "0.01ms !important", animationDelay: "0ms !important", transitionDuration: "0.01ms !important", scrollBehavior: "auto !important" },
          "& .hero-animated": { opacity: "1 !important", transform: "none !important" },
          "& .hero-photo": { transform: "none !important" },
        },
      }}
    >
      <Link href="#conteudo" position="fixed" top="-5rem" left="4" zIndex="100" p="3 4" bg="accent.warm" color="brand.primary" _focus={{ top: "4" }}>Ir para o conteúdo</Link>
      <SiteHeader whatsappNumber={whatsappNumber} />

      <Box as="main" id="conteudo" tabIndex={-1}>
        <Grid as="section" id="inicio" aria-labelledby="hero-title" templateColumns={{ base: "1fr", lg: "minmax(0, 1.1fr) minmax(400px, .9fr) minmax(170px, .28fr)" }} minH={{ base: "0", lg: "min(800px, 100svh)" }} pt="0" bg="bg.canvas">
          <Flex order={{ base: "2", lg: "initial" }} position={{ base: "relative", lg: "static" }} zIndex={{ base: "2", lg: "auto" }} align="center" minW="0" mt={{ base: "-3.8rem", lg: "0" }} p={{ base: "3.1rem 1.5rem 2.5rem", sm: "3.6rem 2rem 3rem", lg: "4.7rem clamp(2rem, 6.1vw, 7.5rem) 5rem max(3.5vw, calc((100vw - 1320px) / 2))" }} bg={{ base: "bg.canvas", lg: "transparent" }} borderTopRadius={{ base: "2rem", lg: "0" }}>
            <Box w="full" maxW="700px">
              <Box display={{ base: "block", lg: "none" }}>
                <Eyebrow>Contabilidade para empresas em crescimento</Eyebrow>
              </Box>
              <Heading id="hero-title" as="h1" color="brand.primary" fontSize={{ base: "clamp(2.55rem, 10.5vw, 3.45rem)", lg: "clamp(2.2rem, 3.5vw, 4.1rem)" }} lineHeight={{ base: "1.08", lg: "1.04" }} letterSpacing="-0.035em">
                {["Sua contabilidade", "deve trazer clareza,", "não mais dúvidas."].map((line, index) => (
                  <Box className="hero-animated" as="span" key={line} display={{ base: "inline", sm: "block" }} opacity="1" animation={`tsa-enter 780ms cubic-bezier(0.22, 1, 0.36, 1) ${index === 0 ? 0 : index === 1 ? 120 : 230}ms both`} _after={{ content: { base: '" "', sm: '""' } }}>{line}</Box>
                ))}
              </Heading>
              <Text className="hero-animated" maxW="48ch" mt={{ base: "5", md: "7" }} color="brand.primary" fontSize={{ base: "0.92rem", md: "clamp(0.98rem, 1.1vw, 1.15rem)" }} lineHeight="1.65" opacity="1" animation="tsa-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) 400ms both">
                Organizamos, acompanhamos e traduzimos os números da sua empresa para que você entenda melhor o negócio e tome decisões com mais segurança.
              </Text>
              <Box className="hero-animated" mt={{ base: "7", md: "8" }} opacity="1" animation="tsa-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) 550ms both">
                <Box display={{ base: "block", lg: "none" }} css={{ "& > a": { width: "100%", minHeight: "4.5rem", borderRadius: "999px", paddingInline: "1.25rem" } }}>
                  <PrimaryLink href={whatsappHref}><Box as="span">Quero conversar sobre minha empresa</Box><FaWhatsapp aria-hidden="true" /></PrimaryLink>
                </Box>
                <Box display={{ base: "none", lg: "block" }}>
                  <PrimaryLink href={whatsappHref}><FaWhatsapp aria-hidden="true" /><Box as="span">Quero conversar sobre minha empresa</Box><LuArrowRight aria-hidden="true" /></PrimaryLink>
                </Box>
              </Box>
            </Box>
          </Flex>
          <Box
            order={{ base: "1", lg: "initial" }}
            position="relative"
            minH={{ base: "clamp(450px, 118vw, 590px)", sm: "clamp(500px, 94vw, 620px)", lg: "610px" }}
            overflow="hidden"
            bg="brand.primary"
            _after={{
              content: '\"\"',
              position: "absolute",
              right: "0",
              bottom: "0",
              left: "0",
              h: { base: "3rem", md: "5rem" },
              background:
                "linear-gradient(180deg, rgba(0, 56, 88, 0) 0%, rgba(0, 56, 88, 0.08) 45%, rgba(0, 56, 88, 0.28) 100%), radial-gradient(82% 110% at 100% 100%, rgba(0, 56, 88, 0.14) 0%, rgba(0, 56, 88, 0) 72%)",
              pointerEvents: "none",
            }}
          >
            <Image className="hero-photo" src="/FotoPrincipal.png" alt="Profissional da TSA Gestão Contábil em um escritório acolhedor e organizado" fill priority sizes="(min-width: 900px) 40vw, 100vw" style={{ objectFit: "cover", objectPosition: "58% center", transform: "scale(1.08)", animation: "tsa-photo 1.5s cubic-bezier(0.22, 1, 0.36, 1) 150ms forwards" }} />
          </Box>
          <Flex
            display={{ base: "none", lg: "flex" }}
            align="center"
            minH="610px"
            p="clamp(2rem, 3.4vw, 4.5rem) clamp(1.5rem, 2.8vw, 4rem)"
          >
            <Box maxW="12ch">
              <Text color="brand.primary" fontFamily="heading" fontSize="clamp(1.35rem, 1.8vw, 2rem)" fontWeight="600" lineHeight="1.25">
                Clareza para decidir.
              </Text>
              <Box mt="6" w="10" h="2px" bg="accent.warm" aria-hidden="true" />
            </Box>
          </Flex>
        </Grid>

        <Box
          as="section"
          aria-label="Diferenciais da TSA"
          bg="brand.primary"
          color="white"
        >
          <SimpleGrid columns={{ base: 1, sm: 3 }} {...shellProps} py={{ base: "5", sm: "6" }}>
            {experienceHighlights.map(({ value, label, icon: Icon }, index) => (
              <Reveal key={value} delay={index * 100} y={12}>
                <Flex role="group" align="center" justify={{ base: "flex-start", sm: "center" }} gap={{ base: "5", sm: "4" }} minH={{ base: "5.8rem", sm: "4.8rem" }} p={{ base: "4 2", sm: "2 3" }} borderBottom={{ base: index === 2 ? "0" : "1px solid rgba(255,255,255,.19)", sm: "0" }} borderRight={{ base: "0", sm: index === 2 ? "0" : "1px solid rgba(255,255,255,.19)" }}>
                  <Box display="grid" placeItems="center" boxSize={{ base: "3.35rem", sm: "2.8rem" }} flex="none" color="accent.warm" border="1px solid rgba(255,255,255,.33)" borderRadius="full" transition="transform 300ms ease, border-color 300ms ease" _groupHover={{ transform: "rotate(-9deg) translateY(-3px)", borderColor: "accent.warm" }}><Icon aria-hidden="true" /></Box>
                  <Box><Text as="strong" display="block" fontFamily="heading" fontSize={{ base: "1.5rem", sm: "1.42rem" }} lineHeight="1.2">{value}</Text><Text as="span" display="block" mt="1" maxW={{ base: "22ch", sm: "19ch" }} fontSize={{ base: "0.88rem", sm: "0.78rem" }} lineHeight="1.45">{label}</Text></Box>
                </Flex>
              </Reveal>
            ))}
          </SimpleGrid>
        </Box>

        <Grid as="section" templateColumns={{ base: "1fr", lg: "44% 56%" }} bg="bg.canvas" aria-labelledby="problem-title">
          <Box order={{ base: 2, lg: 1 }} alignSelf="stretch" display="flex" h="full"><Reveal variant="image"><Box position="relative" w="full" h={{ base: "260px", sm: "360px", lg: "full" }} minH={{ lg: "500px" }} overflow="hidden" role="group" _hover={{ "& img": { transform: "scale(1.045)" } }}><Image src="/servicos/escrituracao-real.jpg" alt="Profissionais revisando informações contábeis juntos" fill sizes="(min-width: 900px) 45vw, 100vw" style={{ objectFit: "cover", objectPosition: "55% center", transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1)" }} /></Box></Reveal></Box>
          <Flex order={{ base: 1, lg: 2 }} align="center" w={{ base: "min(100%, 768px)", lg: "auto" }} mx="auto" p={{ base: "4.8rem 1.25rem 4rem", sm: "5rem 1.5rem", lg: "clamp(4rem, 7vw, 8rem) max(6vw, calc((100vw - 1320px) / 2))" }}>
            <Reveal y={20}>
              <Eyebrow>Sua empresa cresceu.</Eyebrow>
              <Heading id="problem-title" as="h2" maxW="17ch" color="brand.primary" {...sectionHeading}>Mas você entende melhor os números hoje?</Heading>
              <Text maxW="56ch" mt="6" color="#29475b">À medida que o negócio fica mais complexo, receber informações não é suficiente. Você precisa conseguir entendê-las para decidir com mais segurança.</Text>
              <SimpleGrid as="ul" columns={{ base: 1, sm: 2 }} gap="4 6" maxW="670px" mt="8" pt="7" borderTop="1px solid rgba(0, 56, 88, 0.15)" listStyleType="none">
                {["Você recebe as guias, mas não entende por que os valores mudaram.", "Fatura mais, mas ainda tem dificuldade de saber o que realmente sobra.", "Só fala com a contabilidade quando existe uma obrigação ou problema.", "Precisa tomar decisões importantes sem ter os números organizados e claros."].map((item) => <Text as="li" key={item} position="relative" pl="4" color="#29475b" fontSize="0.82rem" lineHeight="1.55" _before={{ content: '""', position: "absolute", top: "0.54rem", left: "0", boxSize: "0.36rem", bg: "accent.warm", borderRadius: "full" }}>{item}</Text>)}
              </SimpleGrid>
            </Reveal>
          </Flex>
        </Grid>

        <Box as="section" py={{ base: "4.8rem", md: "clamp(4.5rem, 7vw, 8rem)" }} bg="linear-gradient(135deg, #003858 0%, #003858 65%, #002c46 100%)" color="fg.onBrand" aria-labelledby="direction-title">
          <Grid {...shellProps} templateColumns={{ base: "1fr", lg: "minmax(0, .87fr) minmax(0, 1.13fr)" }} gap={{ base: "10", lg: "9%" }}>
            <Reveal variant="slide"><Eyebrow light>Ainda não sabe por onde começar?</Eyebrow><Heading id="direction-title" as="h2" maxW="15ch" {...sectionHeading}>Você não precisa decidir o próximo passo sozinho.</Heading><Text maxW="50ch" mt="5" color="#e1e9ea">Cada empresa tem um momento diferente. Conte a sua situação e a TSA te ajuda a entender o que fazer a seguir, sem compromisso.</Text></Reveal>
            <SimpleGrid columns={{ base: 1, sm: 3 }} gap={{ base: "0", sm: "4" }} alignSelf="center" alignItems="center" h="fit-content">
              {[["Entender", "Informação técnica traduzida para a realidade do seu negócio."], ["Organizar", "Rotinas e documentos em ordem, sem burocracia extra."], ["Decidir", "Orientação clara para agir no momento certo."]].map(([title, description], index) => (
                <Reveal key={title} delay={index * 90} y={16}><Box role="group" w="full" maxW={{ base: "none", sm: "220px" }} mx="auto" minH={{ base: "0", sm: "210px" }} p={{ base: "1rem 0 1.3rem 1.3rem", sm: "1.35rem 1rem 0 1.1rem" }} borderLeft="2px solid" borderColor="accent.warm" transition="transform 300ms ease" _hover={{ transform: "translateY(-5px)" }}><Text as="span" color="accent.warm" fontSize="0.78rem" letterSpacing="0.12em">0{index + 1}</Text><Heading as="h3" mt={{ base: "1.5", sm: "4" }} fontSize="1.55rem">{title}</Heading><Text mt={{ base: "1.5", sm: "5" }} color="#e1e9ea" fontSize="0.82rem" lineHeight="1.55">{description}</Text></Box></Reveal>
              ))}
            </SimpleGrid>
          </Grid>
        </Box>

        <Box as="section" id="servicos" py={{ base: "4.8rem", md: "clamp(5.5rem, 8vw, 9rem)" }} bg="bg.canvas" aria-labelledby="services-title">
          <Box {...shellProps}>
            <Grid templateColumns={{ base: "1fr", lg: "minmax(0, 1.4fr) minmax(0, .6fr)" }} gap={{ base: "8", lg: "9%" }} alignItems="end" mb={{ base: "10", lg: "14" }}>
              <Reveal><Eyebrow>Assessoria contábil completa</Eyebrow><Heading id="services-title" as="h2" maxW="19ch" color="brand.primary" {...sectionHeading}>Rigor técnico para manter sua empresa organizada. Presença para orientar o caminho.</Heading></Reveal>
              <Box alignSelf="end" justifySelf="end" maxW="360px"><Reveal delay={110} y={16}><Text color="#29475b" textAlign="justify">Escolha o serviço que faz sentido para o seu momento e fale diretamente sobre ele. A conversa já começa no assunto certo.</Text></Reveal></Box>
            </Grid>
            <Reveal variant="image">
              <Grid role="group" templateColumns={{ base: "1fr", lg: "41% 59%" }} minH={{ lg: "450px" }} mb="9" bg="brand.primary" color="white" overflow="hidden">
                <Box position="relative" minH={{ base: "260px", sm: "330px", lg: "450px" }} overflow="hidden" _groupHover={{ "& img": { transform: "scale(1.04)" } }}><Image src="/servicos/contabilidade-real.jpg" alt="Profissionais analisando documentos contábeis" fill sizes="(min-width: 900px) 43vw, 100vw" style={{ objectFit: "cover", transition: "transform 800ms cubic-bezier(0.22, 1, 0.36, 1)" }} /></Box>
                <Box alignSelf="center" p={{ base: "1.7rem 1.3rem 2rem", lg: "clamp(2rem, 4.5vw, 4.2rem)" }}><Eyebrow light>Em destaque</Eyebrow><Heading as="h3" maxW="22ch" fontSize="clamp(1.75rem, 2.4vw, 2.65rem)" lineHeight="1.2">{featuredService.title}</Heading><Text maxW="62ch" mt="4" color="#e7edef">{featuredService.description}</Text><SimpleGrid as="ul" columns={{ base: 1, sm: 2 }} gap="2.5 4" my="6" p="0" listStyleType="none">{featuredService.items.map((item) => <Text as="li" key={item} position="relative" pl="4" fontSize="0.8rem" _before={{ content: '""', position: "absolute", left: "0", top: "0.53rem", boxSize: "0.4rem", border: "1px solid #f48420", transform: "rotate(45deg)" }}>{item}</Text>)}</SimpleGrid><PrimaryLink href={whatsappLink(featuredService.message)}>Explicar minha situação <FaWhatsapp aria-hidden="true" /></PrimaryLink></Box>
              </Grid>
            </Reveal>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="4" alignItems="start">{services.map((service, index) => <ServiceTile key={service.title} service={service} index={index} />)}</SimpleGrid>
            <Flex align={{ base: "flex-start", sm: "center" }} justify="space-between" direction={{ base: "column", sm: "row" }} gap="8" mt="11" pt="5" borderTop="1px solid rgba(0, 56, 88, 0.2)"><Text maxW="60ch" color="#29475b">Não encontrou exatamente o que precisa? Conte sua situação e a TSA indica o caminho contábil mais adequado.</Text><ScrollLink target="contato" display="inline-flex" alignItems="center" gap="2" minH="44px" flex="none" color="brand.primary" borderBottom="2px solid" borderColor="accent.warm" fontWeight="700">Explicar minha situação <LuArrowUpRight aria-hidden="true" /></ScrollLink></Flex>
          </Box>
        </Box>

        <Box as="section" id="metodo" minH={{ lg: "116svh" }} py={{ base: "4.8rem", md: "clamp(5.5rem, 8vw, 9rem)" }} bg="bg.canvas" aria-labelledby="method-title">
          <Box {...shellProps} position={{ lg: "sticky" }} top={{ lg: "88px" }}><Grid templateColumns={{ base: "1fr", lg: "1.15fr .85fr" }} gap={{ base: "8", lg: "10%" }} alignItems="end" mb={{ base: "10", lg: "16" }}><Reveal><Eyebrow>Um sistema próprio de trabalho</Eyebrow><Heading id="method-title" as="h2" maxW="20ch" color="brand.primary" {...sectionHeading}>Método Clareza: da situação real à decisão segura.</Heading></Reveal><Reveal delay={100}><Text maxW="48ch" color="#29475b">Quatro etapas organizam a relação com a TSA para que você saiba onde está, o que precisa ser feito e quais são os próximos passos.</Text></Reveal></Grid><MobileMethodSteps steps={methodSteps} /></Box>
        </Box>

        <Grid as="section" id="sobre" templateColumns={{ base: "1fr", lg: "41% 59%" }} bg="linear-gradient(135deg, #003858 0%, #003858 68%, #002c46 100%)" color="white" aria-labelledby="about-title">
          <Box position="relative" h={{ base: "460px", sm: "560px", lg: "auto" }} minH={{ lg: "680px" }} overflow="hidden" role="group" _hover={{ "& img": { transform: "scale(1.035)" } }} _after={{ content: '""', position: "absolute", inset: "45% 0 0", bg: "linear-gradient(transparent, rgba(0,31,53,.77))" }}><Image src="/AFrenteTSA-otimizada.png" alt="Thaise, contadora e gestora à frente da TSA Gestão Contábil" fill sizes="(min-width: 900px) 41vw, 100vw" style={{ objectFit: "cover", objectPosition: "50% 38%", transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)" }} /><Text as="span" position="absolute" zIndex="1" bottom="9" left="9" maxW="23ch" fontSize="0.72rem" lineHeight="1.6" textTransform="uppercase" letterSpacing="0.1em">À frente da TSA<Text as="strong" display="block" mt="1.5" fontFamily="heading" fontSize="1.45rem" fontWeight="600" textTransform="none" letterSpacing="-0.02em">+10 anos unindo técnica e proximidade</Text></Text></Box>
          <Box alignSelf="center" w={{ base: "min(100%, 768px)", lg: "auto" }} mx="auto" p={{ base: "4rem 1.5rem", lg: "clamp(3.5rem, 6vw, 7rem) max(3vw, calc((100vw - 1320px) / 2))" }}><Reveal><Eyebrow light>Quem conduz</Eyebrow><Heading id="about-title" as="h2" maxW="19ch" mb="6" {...sectionHeading}>Conhecimento técnico com atenção genuína a quem está do outro lado.</Heading><Stack gap="4" maxW="75ch" color="#e7edef" fontSize="0.9rem" lineHeight="1.75"><Text>Sou Thaise, contadora e gestora, com mais de 10 anos de experiência em Contabilidade, Gestão Financeira e Auditoria.</Text><Text>Aprendi, ao longo desses anos, que contabilidade não deve ser só sobre impostos, guias e obrigações: ela precisa <Box as="em" color="white" fontWeight="700">ajudar o empresário a entender o negócio e decidir com clareza</Box>. Foi esse entendimento, amadurecido durante a pandemia ao lado de empresários enfrentando desafios reais, que deu origem à TSA.</Text><Text>Sou formada em Ciências Contábeis, com MBA em Gestão Financeira e Auditoria Contábil e formação em Perícia Judicial Contábil.</Text><Text>Boa parte da minha visão profissional, porém, nasceu da prática: <Box as="em" color="white" fontWeight="700">acompanhando empresas em diferentes fases de crescimento.</Box></Text><Text>Hoje, à frente da TSA, ofereço uma contabilidade mais próxima, estratégica e fácil de compreender. Quero que cada empresário saiba onde sua empresa está, o que os números dizem e quais decisões podem fortalecer o próximo passo.</Text></Stack></Reveal><SimpleGrid columns={{ base: 1, sm: 3 }} gap={{ base: "6", sm: "8" }} mt="12">{values.map((value, index) => <Reveal key={value.title} delay={index * 90} y={14}><Box pt="4" borderTop="2px solid" borderColor="accent.warm"><Text as="span" color="accent.warm" fontSize="0.7rem" letterSpacing="0.12em">0{index + 1}</Text><Heading as="h3" mt="1.5" fontSize="1.4rem">{value.title}</Heading><Text mt="2" color="#e7edef" fontSize="0.82rem">{value.description}</Text></Box></Reveal>)}</SimpleGrid></Box>
        </Grid>

        <Box as="section" id="contato" position="relative" py={{ base: "4.8rem", md: "clamp(5.5rem, 8vw, 9rem)" }} bg="brand.primary" color="white" aria-labelledby="contact-title" _before={{ content: '""', position: "absolute", inset: "0", opacity: ".14", backgroundImage: 'url("/experiencia-mobile-v1.png")', backgroundPosition: "center", backgroundSize: "cover", pointerEvents: "none" }}>
          <Grid {...shellProps} position="relative" templateColumns={{ base: "1fr", lg: "minmax(0, .9fr) minmax(0, 1.1fr)" }} gap={{ base: "12", lg: "9%" }} alignItems="center">
            <Box><Reveal><Eyebrow light>O próximo passo</Eyebrow><Heading id="contact-title" as="h2" maxW="15ch" {...sectionHeading}>Vale a pena conversar com uma contabilidade que explica.</Heading><Text maxW="51ch" mt="5" color="#e7edef">Fale sobre o momento do seu CNPJ hoje: o que está em dia, o que falta e que tipo de suporte você precisa hoje. É por aí que a gente começa.</Text></Reveal><Stack gap="4" mt="12">{contactDetails.map(({ icon: Icon, title, description }) => <Flex key={title} align="flex-start" gap="3.5"><Box display="grid" placeItems="center" flex="none" boxSize="2.2rem" p="2" color="accent.warm" border="1px solid rgba(255,255,255,.37)" borderRadius="full"><Icon aria-hidden="true" /></Box><Text color="#d9e5e9" fontSize="0.8rem"><Box as="strong" color="white" fontSize="0.87rem">{title}</Box><br />{description}</Text></Flex>)}</Stack><Flex align="center" gap="3" wrap="wrap" mt="8"><Text w="full" color="#e7edef" fontSize="0.75rem">Encontre a TSA nas redes</Text>{socialLinks.map(({ href, label, icon: Icon, external }) => <Link key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} aria-label={label} display="grid" placeItems="center" boxSize="2.8rem" border="1px solid rgba(255,255,255,.45)" borderRadius="full" color="white" transition="background 200ms ease, transform 200ms ease" _hover={{ bg: "accent.warm", transform: "translateY(-2px)" }}><Icon aria-hidden="true" /></Link>)}</Flex></Box>
            <Reveal variant="slide"><Box p={{ base: "1.35rem", md: "clamp(1.4rem, 3vw, 3.5rem)" }} bg="rgba(0, 36, 59, 0.5)" backdropFilter={{ base: "none", md: "blur(6px)" }} boxShadow="0 24px 56px rgba(0, 25, 42, .18)"><Eyebrow light>Formulário de contato</Eyebrow><Heading as="h3" mb="3" fontSize="clamp(1.55rem, 2.2vw, 2.35rem)">Prefere receber um retorno?</Heading><Text maxW="58ch" mb="6" color="#e7edef" fontSize="0.85rem">Conte o momento da sua empresa. Usamos só o necessário para entender o perfil antes do primeiro contato.</Text><ContactForm whatsappNumber={whatsappNumber} formEndpoint={contactFormEndpoint} /></Box></Reveal>
          </Grid>
        </Box>
      </Box>

      <Box as="footer" py={{ base: "12", md: "14" }} bg="white" color="brand.primary" borderTop="1px solid rgba(0,56,88,.14)">
        <Box {...shellProps}>
          <Grid templateColumns={{ base: "1fr", md: "1.35fr .7fr .7fr .9fr" }} alignItems="start" justifyItems="start" gap={{ base: "9", md: "8" }}>
            <Stack gap="5" maxW="300px">
              <Box w={{ base: "122px", md: "138px" }}>
                <Image src="/logo-dark-reduzida.png" alt="TSA Gestão Contábil" width={870} height={630} style={{ width: "100%", height: "auto" }} />
              </Box>
              <Box w="10" h="2px" bg="accent.warm" aria-hidden="true" />
            </Stack>

            <Stack as="nav" aria-label="Navegação do rodapé" w="full" gap="3">
              <Text color="#be5805" fontSize="0.7rem" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase">Seções</Text>
              {footerLinks.map(([label, target]) => (
                <ScrollLink key={target} target={target} minH="34px" color="brand.primary" fontSize="0.86rem" textAlign="left" _hover={{ color: "#be5805" }}>
                  {label}
                </ScrollLink>
              ))}
            </Stack>

            <Stack w="full" gap="3">
              <Text color="#be5805" fontSize="0.7rem" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase">Atendimento</Text>
              <Text fontSize="0.86rem">Rio de Janeiro, RJ</Text>
              <Text fontSize="0.86rem">Online e próximo</Text>
              <Text fontSize="0.86rem">Segunda a sexta · 9h–18h</Text>
            </Stack>

            <Stack w="full" gap="3">
              <Text color="#be5805" fontSize="0.7rem" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase">Fale com a TSA</Text>
              <Link href={whatsappHref} {...externalLinkProps} display="inline-flex" alignItems="center" gap="2" minH="34px" color="brand.primary" fontSize="0.86rem" _hover={{ color: "#be5805" }}>
                <FaWhatsapp aria-hidden="true" /> WhatsApp <LuArrowUpRight aria-hidden="true" />
              </Link>
              <Link href={instagramUrl} target="_blank" rel="noreferrer" display="inline-flex" alignItems="center" gap="2" minH="34px" color="brand.primary" fontSize="0.86rem" _hover={{ color: "#be5805" }}>
                <LuInstagram aria-hidden="true" /> Instagram <LuArrowUpRight aria-hidden="true" />
              </Link>
              <Link href={linkedinUrl} target="_blank" rel="noreferrer" display="inline-flex" alignItems="center" gap="2" minH="34px" color="brand.primary" fontSize="0.86rem" _hover={{ color: "#be5805" }}>
                <LuLinkedin aria-hidden="true" /> LinkedIn <LuArrowUpRight aria-hidden="true" />
              </Link>
            </Stack>
          </Grid>

          <Flex mt={{ base: "10", md: "14" }} pt="5" borderTop="1px solid rgba(0,56,88,.16)" align={{ base: "flex-start", sm: "center" }} justify="space-between" direction={{ base: "column", sm: "row" }} gap="5">
            <Text color="rgba(0,56,88,.72)" fontSize="0.72rem">© TSA Gestão Contábil</Text>
            <Box display="inline-flex" p="0.35rem 0.45rem" borderRadius="14px" bg="brand.primary">
              <SolnixAssinatura />
            </Box>
          </Flex>
        </Box>
      </Box>
      {hasWhatsapp ? <WhatsappFloat href={whatsappHref} /> : null}
    </Box>
  )
}
