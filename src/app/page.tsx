import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { SiteHeader } from "@/components/site-header"
import SolnixAssinatura from "@/components/solnixAssinatura"
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
import {
  LuArrowDownRight,
  LuArrowUpRight,
  LuCheck,
  LuClock3,
  LuMapPin,
  LuMonitor,
} from "react-icons/lu"

const whatsappNumber = process.env.NEXT_PUBLIC_TSA_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
)
const contactFormEndpoint = process.env.NEXT_PUBLIC_TSA_CONTACT_FORM_ENDPOINT
const heroAlt =
  "Profissional da TSA Gestão Contábil em um escritório acolhedor e organizado"

const services = [
  {
    title: "Contabilidade e escrituração",
    description:
      "Escrituração contábil e fiscal para manter a empresa organizada e com uma visão clara da própria realidade.",
    icon: "/icons/funil.png",
  },
  {
    title: "Folha e rotinas trabalhistas",
    description:
      "Acompanhamento para empresas que já possuem equipe ou estão começando a contratar.",
    icon: "/icons/ponte.png",
  },
  {
    title: "Planejamento e orientação tributária",
    description:
      "Avaliação responsável da estrutura tributária, sempre dentro da legislação e da realidade da empresa.",
    icon: "/icons/equilibrio.png",
  },
  {
    title: "Regularização e pendências fiscais",
    description:
      "Organização das pendências para que o negócio possa seguir com mais tranquilidade e segurança.",
    icon: "/icons/farol.png",
  },
  {
    title: "Abertura, alteração e encerramento",
    description:
      "Orientação em cada etapa para começar, reorganizar ou encerrar uma empresa com segurança.",
    icon: "/icons/trilha.png",
  },
  {
    title: "Consultoria e assessoria contábil",
    description:
      "Suporte para entender questões do dia a dia e apoiar decisões relacionadas à gestão do negócio.",
    icon: "/icons/bussola.png",
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
    description: "Processos e documentação organizados sem burocracia extra.",
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
    description: "Checkpoints regulares antes que a dúvida vire problema.",
    icon: "/icons/ponte.png",
  },
]

const audiences = [
  "Tecnologia e informática",
  "Advocacia e serviços profissionais",
  "Saúde e bem-estar",
  "Educação, cursos e treinamentos",
  "Empresas prestadoras de serviços",
]

function Kicker({
  children,
  color = "brand.primary",
}: {
  children: React.ReactNode
  color?: string
}) {
  return (
    <HStack gap="4">
      <Box w="10" h="1px" bg="accent.warm" aria-hidden="true" />
      <Text textStyle="micro" color={color}>
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
        bg="fg.muted"
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

function ServiceIcon({ src }: { src: string }) {
  return (
    <Box
      boxSize="11"
      p="2.5"
      borderWidth="1px"
      borderColor="accent.warm"
      borderRadius="full"
      bg="rgba(185, 152, 122, 0.08)"
      flex="0 0 auto"
    >
      <Image
        src={src}
        alt=""
        width={829}
        height={829}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Box>
  )
}

export default function Home() {
  return (
    <Box overflow="hidden">
      <SiteHeader whatsappNumber={whatsappNumber} />

      <Box as="main">
        <Box
          id="inicio"
          as="section"
          aria-labelledby="hero-title"
          position="relative"
          minH={{ base: "clamp(700px, 94svh, 980px)", lg: "clamp(760px, 92svh, 1080px)" }}
          overflow="hidden"
          bg="brand.primary"
          color="fg.onBrand"
        >
          <Box
            position="absolute"
            inset="0"
          >
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
              height="50%"
              background="linear-gradient(0deg, rgba(11, 13, 56, 0.98) 0%, rgba(11, 13, 56, 0.78) 62%, rgba(11, 13, 56, 0) 100%)"
              backdropFilter="blur(2px)"
              css={{
                maskImage: "linear-gradient(0deg, black 0%, black 70%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(0deg, black 0%, black 70%, transparent 100%)",
              }}
            />
            <Box
              display={{ base: "none", lg: "block" }}
              position="absolute"
              inset="0 auto 0 0"
              width="42%"
              height="100%"
              background="linear-gradient(90deg, rgba(11, 13, 56, 0.98) 0%, rgba(11, 13, 56, 0.82) 54%, rgba(11, 13, 56, 0) 100%)"
              backdropFilter="blur(2px)"
              css={{
                maskImage: "linear-gradient(90deg, black 0%, black 70%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, black 0%, black 70%, transparent 100%)",
              }}
            />
          </Box>
          <Container
            maxW="none"
            px={{ base: "5", md: "8", xl: "10" }}
            position="relative"
            zIndex="1"
            minH={{ base: "clamp(700px, 94svh, 980px)", lg: "clamp(760px, 92svh, 1080px)" }}
            display="flex"
            alignItems="center"
            py="0"
          >
            <Stack gap={{ base: "6", md: "7" }} maxW="720px">
              <Kicker color="accent.warm">Empresas de serviços · Rio de Janeiro</Kicker>
              <Heading id="hero-title" as="h1" textStyle="h1" color="fg.onBrand">
                Sua contabilidade deve trazer clareza, não mais dúvidas.
              </Heading>
              <Text textStyle="body" color="fg.onBrand" maxW="55ch">
                Cuidamos das obrigações da sua empresa e estamos próximos para
                explicar, orientar e ajudar você a tomar decisões com mais segurança.
              </Text>
              <Flex gap="3" wrap="wrap">
                <Button
                  asChild
                  size="lg"
                  bg="accent.warm"
                  color="brand.primary"
                  borderRadius="full"
                  px="7"
                  _hover={{ bg: "fg.onBrand" }}
                >
                  <a href="#contato">
                    Quero conversar com a TSA
                    <LuArrowUpRight />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  borderColor="fg.onBrand"
                  color="fg.onBrand"
                  borderRadius="full"
                  px="7"
                  _hover={{ bg: "rgba(247, 245, 241, 0.12)" }}
                >
                  <a href="#metodo">
                    Conhecer o método
                    <LuArrowDownRight />
                  </a>
                </Button>
              </Flex>
            </Stack>
          </Container>
        </Box>

      <Box bg="bg.brand" color="fg.onBrand">
        <Container maxW="1440px" px={{ base: "5", md: "8", xl: "12" }}>
          <SimpleGrid
            columns={{ base: 1, sm: 3 }}
            py={{ base: "8", md: "10" }}
            gap={{ base: "7", md: "10" }}
          >
            {[
              ["+10 anos", "de experiência profissional na área contábil"],
              ["MBA", "em Gestão Financeira e Auditoria Contábil"],
              ["RJ", "atendimento online e próximo"],
            ].map(([value, label]) => (
              <Stack
                key={value}
                gap="1"
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
                Cumprir prazos e obrigações é o ponto de partida. Na TSA, você também
                entende o que está acontecendo, quais decisões merecem atenção e como
                a contabilidade se conecta à realidade do seu negócio.
              </Text>
              <Stack gap="3">
                {[
                  "Informação técnica traduzida com clareza",
                  "Acesso para perguntar e entender",
                  "Orientação antes que a dúvida vire problema",
                ].map((item) => (
                  <HStack key={item} align="flex-start" gap="3">
                    <Flex
                      mt="1"
                      boxSize="6"
                      flex="0 0 auto"
                      borderRadius="full"
                      bg="accent.warm"
                      color="brand.primary"
                      align="center"
                      justify="center"
                    >
                      <LuCheck size="14" />
                    </Flex>
                    <Text textStyle="body">{item}</Text>
                  </HStack>
                ))}
              </Stack>
            </Stack>
          </Grid>
          </Reveal>
        </Container>
      </Box>

      <Box bg="bg.brand" color="fg.onBrand" py={{ base: "12", md: "16" }}>
        <Container maxW="1200px" px={{ base: "5", md: "8" }}>
          <Reveal>
          <Stack gap={{ base: "10", md: "12" }}>
            <Stack gap="4" maxW="900px">
              <Kicker color="accent.warm">Manifesto TSA</Kicker>
              <Heading as="h2" textStyle="h2" color="fg.onBrand" fontStyle="italic">
                “Contador que só entrega a guia não está fazendo o trabalho todo.”
              </Heading>
              <Text textStyle="body" color="fg.onBrand" maxW="68ch">
                Entender o que os números significam é o que transforma obrigação em decisão.
              </Text>
            </Stack>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={{ base: "8", md: "10" }}>
            {["Entender", "Organizar", "Decidir"].map((title, index) => (
              <Stack key={title} gap="2" borderLeftWidth="2px" borderColor="accent.warm" pl="5">
                <Text textStyle="micro" color="accent.warm">0{index + 1}</Text>
                <Heading as="h3" textStyle="h3" color="fg.onBrand">{title}</Heading>
                <Text textStyle="body" color="fg.onBrand">
                  {index === 0 && "Informação técnica traduzida para a realidade do seu negócio."}
                  {index === 1 && "Rotinas e documentos em ordem, sem burocracia extra."}
                  {index === 2 && "Orientação clara para agir no momento certo."}
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
        py={{ base: "20", md: "28" }}
        bg="bg.canvas"
      >
        <Container maxW="1200px" px={{ base: "5", md: "8" }}>
          <Stack gap={{ base: "10", md: "14" }}>
            <Stack gap="5" maxW="760px">
              <Kicker>Assessoria contábil completa</Kicker>
              <Heading as="h2" textStyle="h2" color="brand.primary">
                Rigor técnico para manter sua empresa organizada. Presença para
                orientar o caminho.
              </Heading>
              <Text textStyle="body" color="fg.default" maxW="65ch">
                Uma atuação pensada principalmente para prestadores de serviços e
                pequenas e médias empresas que querem mais do que receber guias para
                pagar.
              </Text>
            </Stack>

            <Grid
              templateColumns={{ base: "1fr", lg: "1.05fr 1.95fr" }}
              gap="6"
            >
              <Stack
                bg="bg.brand"
                color="fg.onBrand"
                p={{ base: "7", md: "9" }}
                borderRadius="2xl"
                justify="space-between"
                height="full"
                gap="10"
              >
                <Stack gap="5">
                  <Text textStyle="micro" color="accent.warm">
                    Serviço principal
                  </Text>
                  <Heading
                    as="h3"
                    fontFamily="heading"
                    fontSize="h2"
                    lineHeight="1.12"
                    fontWeight="semibold"
                    color="fg.onBrand"
                  >
                    Contabilidade completa com acompanhamento próximo
                  </Heading>
                  <Text textStyle="body" color="fg.onBrand">
                    Rotinas contábeis e fiscais, apuração de impostos e obrigações
                    acessórias acompanhadas de explicação, acesso e orientação.
                  </Text>
                  <Stack gap="3" pt="2">
                    {["Escrituração contábil e fiscal", "Impostos e obrigações acessórias", "Folha e rotinas trabalhistas"].map((item) => (
                      <HStack key={item} gap="3" align="center">
                        <Flex boxSize="6" borderRadius="full" bg="accent.warm" color="brand.primary" align="center" justify="center" flex="0 0 auto">
                          <LuCheck size="14" />
                        </Flex>
                        <Text textStyle="cta" color="fg.onBrand">{item}</Text>
                      </HStack>
                    ))}
                  </Stack>
                </Stack>
                <Text textStyle="micro" color="accent.warm">Acompanhamento de ponta a ponta</Text>
              </Stack>

              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={{ base: "4", md: "5" }}
              >
                {services.slice(0, 4).map((service, index) => (
                  <Reveal key={service.title} delay={index * 70}>
                  <Stack
                    bg="transparent"
                    width="full"
                    borderWidth="1px"
                    borderColor="border.subtle"
                    borderRadius="xl"
                    py={{ base: "6", md: "8" }}
                    px={{ base: "5", md: "6" }}
                    gap="4"
                    h="full"
                    transition="transform 240ms ease, background 240ms ease"
                    _hover={{ transform: "translateY(-3px)" }}
                  >
                    <Flex align="center" justify="space-between">
                      <ServiceIcon src={service.icon} />
                      <HStack gap="2" color="accent.warm">
                        <Text textStyle="micro">0{index + 2}</Text>
                        <LuArrowUpRight size="16" />
                      </HStack>
                    </Flex>
                    <Heading
                      as="h3"
                      textStyle="h3"
                      color="brand.primary"
                    >
                      {service.title}
                    </Heading>
                    <Text textStyle="body" color="fg.default">
                      {service.description}
                    </Text>
                  </Stack>
                  </Reveal>
                ))}
              </SimpleGrid>

              <SimpleGrid
                gridColumn={{ base: "auto", lg: "1 / -1" }}
                columns={{ base: 1, md: 2 }}
                gap={{ base: "4", md: "5" }}
              >
                {services.slice(4).map((service, index) => (
                  <Reveal key={service.title} delay={(index + 4) * 70}>
                    <Stack
                      bg="transparent"
                      width="full"
                      borderWidth="1px"
                      borderColor="border.subtle"
                      borderRadius="xl"
                      py={{ base: "6", md: "8" }}
                      px={{ base: "5", md: "6" }}
                      gap="4"
                      h="full"
                      transition="transform 240ms ease, background 240ms ease"
                      _hover={{ transform: "translateY(-3px)" }}
                    >
                      <Flex align="center" justify="space-between">
                        <ServiceIcon src={service.icon} />
                        <HStack gap="2" color="accent.warm">
                          <Text textStyle="micro">0{index + 6}</Text>
                          <LuArrowUpRight size="16" />
                        </HStack>
                      </Flex>
                      <Heading as="h3" textStyle="h3" color="brand.primary">
                        {service.title}
                      </Heading>
                      <Text textStyle="body" color="fg.default">
                        {service.description}
                      </Text>
                    </Stack>
                  </Reveal>
                ))}
              </SimpleGrid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box
        id="metodo"
        as="section"
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
                  Quatro etapas organizam a relação com a TSA para que você saiba onde
                  está, o que precisa ser feito e quais são os próximos passos.
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
            >
              {methodSteps.map((step, index) => (
                <Stack
                  key={step.number}
                  position="relative"
                  pt="9"
                  pb="8"
                  pr={{ base: "0", lg: "7" }}
                  borderBottomWidth={{ base: "1px", lg: "0" }}
                  borderColor="border.subtle"
                  gap="4"
                >
                  <Box
                    position="absolute"
                    top="-7px"
                    left="0"
                    boxSize={index === 3 ? "4" : "3.5"}
                    borderRadius="full"
                    bg={index === 3 ? "brand.primary" : "accent.warm"}
                  />
                  <Flex
                    boxSize="12"
                    borderWidth="1px"
                    borderColor="accent.warm"
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
                      style={{ width: "22px", height: "22px", objectFit: "contain" }}
                    />
                  </Flex>
                  <Text textStyle="micro" color="brand.primary">
                    {step.number}
                  </Text>
                  <Heading
                    as="h3"
                    textStyle="h3"
                    color="brand.primary"
                  >
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
              borderWidth="1px"
              borderColor="border.subtle"
            >
              <Image
                src="/home.png"
                alt="Profissional responsável pela TSA Gestão Contábil"
                fill
                sizes="(min-width: 64rem) 42vw, 100vw"
                quality={100}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Box>

            <Stack gap="7">
              <Kicker>À frente da TSA</Kicker>
              <Heading as="h2" textStyle="h2" color="brand.primary">
                Conhecimento técnico com atenção genuína a quem está do outro lado.
              </Heading>
              <Text textStyle="body" color="fg.default">
                A TSA nasceu durante a pandemia, quando a experiência contábil se
                encontrou com os desafios reais de empreender. O que começou como uma
                necessidade ganhou propósito: trazer clareza onde existe dúvida e
                segurança para quem toma decisões todos os dias.
              </Text>
              <Text textStyle="body" color="fg.default">
                São mais de 10 anos de atuação na área contábil, combinando formação,
                análise criteriosa e uma relação próxima com cada cliente.
              </Text>

              <Stack gap="3">
                {[
                  "Graduação em Ciências Contábeis · Faculdades Integradas Simonsen",
                  "MBA em Gestão Financeira e Auditoria Contábil · UCB",
                  "Perícia Judicial Contábil · PJERJ",
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
          <Grid
            templateColumns={{ base: "1fr", lg: "0.85fr 1.15fr" }}
            gap={{ base: "12", lg: "20" }}
          >
            <Stack gap="6">
              <Kicker>Para quem a TSA existe</Kicker>
              <Heading as="h2" textStyle="h2" color="brand.primary">
                Empresas de serviços que querem entender o porquê das decisões.
              </Heading>
              <Text textStyle="body" color="fg.default">
                Especialmente negócios que estão formando equipe, profissionalizando
                processos ou cansaram de uma contabilidade distante e pouco orientadora.
              </Text>
            </Stack>

            <Flex wrap="wrap" gap="3" alignContent="flex-start">
              <Stack gap="5">
                <Flex wrap="wrap" gap="3">
                  {audiences.map((audience) => (
                    <Box
                      key={audience}
                      borderWidth="1px"
                      borderColor="border.subtle"
                      borderRadius="full"
                      px="5"
                      py="3"
                      bg="bg.canvas"
                    >
                      <Text textStyle="cta" color="fg.default">
                        {audience}
                      </Text>
                    </Box>
                  ))}
                </Flex>
                <Text textStyle="body" color="fg.default">
                  Para MEIs, o atendimento é direcionado à fase de crescimento e
                  transição para uma estrutura empresarial.
                </Text>
              </Stack>
            </Flex>
          </Grid>
          </Reveal>
        </Container>
      </Box>

      <Box
        id="contato"
        as="section"
        py={{ base: "20", md: "28" }}
        bg="bg.canvas"
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
                  Conte brevemente o momento da sua empresa. A primeira conversa serve
                  para entender sua realidade e identificar o caminho contábil mais
                  adequado.
                </Text>
              </Stack>

              <Stack gap="5">
                <ContactDetail icon={<LuMapPin />} title="Rio de Janeiro — RJ">
                  Atuação próxima e regional
                </ContactDetail>
                <ContactDetail icon={<LuMonitor />} title="Atendimento online">
                  Com acesso e acompanhamento próximo
                </ContactDetail>
                <ContactDetail icon={<LuClock3 />} title="Segunda a sexta">
                  Das 9h às 18h
                </ContactDetail>
              </Stack>
            </Stack>

            <Box
              bg="bg.surface"
              minW="0"
              width="full"
              borderWidth="1px"
              borderColor="border.subtle"
              borderRadius="2xl"
              p={{ base: "6", md: "9" }}
            >
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
        <Container maxW="1200px" px={{ base: "5", md: "8" }}>
          <Grid
            templateColumns={{ base: "1fr", md: "1.35fr 0.7fr 0.7fr 0.9fr" }}
            gap={{ base: "10", md: "8" }}
          >
            <Stack gap="5" maxW="620px">
              <Image
                src="/logo-Branca.png"
                alt="TSA Gestão Contábil"
                width={1582}
                height={882}
                style={{ width: "166px", height: "auto" }}
              />
              <Text
                textStyle="h3"
                color="fg.onBrand"
              >
                Rigor técnico por trás. Clareza e proximidade na frente.
              </Text>
            </Stack>

            <Stack gap="4">
              <Text textStyle="micro" color="accent.warm">Seções</Text>
              <Stack gap="2">
                {[['Início', '#inicio'], ['Serviços', '#servicos'], ['Método Clareza', '#metodo'], ['Sobre', '#sobre'], ['Contato', '#contato']].map(([label, href]) => (
                  <Link key={href} href={href} textStyle="cta" color="fg.onBrand" _hover={{ color: "accent.warm" }}>
                    {label}
                  </Link>
                ))}
              </Stack>
            </Stack>

            <Stack gap="4">
              <Text textStyle="micro" color="accent.warm">Atendimento</Text>
              <Stack gap="2">
                <Text textStyle="body" color="fg.onBrand">Rio de Janeiro — RJ</Text>
                <Text textStyle="body" color="fg.onBrand">Online e próximo</Text>
                <Text textStyle="body" color="fg.onBrand">Segunda a sexta · 9h–18h</Text>
              </Stack>
            </Stack>

            <Stack gap="4">
              <Text textStyle="micro" color="accent.warm">Fale com a TSA</Text>
              <Link href="#contato" textStyle="cta" color="fg.onBrand" _hover={{ color: "accent.warm" }}>
                Solicitar contato <LuArrowUpRight size="16" />
              </Link>
              <Text textStyle="body" color="fg.onBrand">
                Conte o momento da sua empresa e vamos entender o próximo passo.
              </Text>
            </Stack>
          </Grid>
          <Flex
            mt={{ base: "10", md: "14" }}
            pt="5"
            borderTopWidth="1px"
            borderColor="rgba(247,245,241,0.25)"
            align="center"
            justify="space-between"
            gap="5"
            wrap="wrap"
          >
            <Text textStyle="micro" color="fg.onBrand">© TSA Gestão Contábil</Text>
            <Box ml={{ base: "auto", md: "0" }}>
              <SolnixAssinatura />
            </Box>
          </Flex>
        </Container>
      </Box>
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
        <Text fontWeight="semibold">{title}</Text>
        <Text textStyle="body" color="fg.default">
          {children}
        </Text>
      </Stack>
    </HStack>
  )
}
