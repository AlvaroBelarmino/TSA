import { LuCalendarDays, LuChartNoAxesCombined, LuMapPin } from "react-icons/lu"

const defaultWhatsappNumber = "5521990772435"

export const whatsappNumber =
  process.env.NEXT_PUBLIC_TSA_WHATSAPP_NUMBER?.replace(/\D/g, "") ??
  defaultWhatsappNumber
export const contactFormEndpoint = process.env.NEXT_PUBLIC_TSA_CONTACT_FORM_ENDPOINT
export const instagramUrl =
  process.env.NEXT_PUBLIC_TSA_INSTAGRAM_URL ??
  "https://www.instagram.com/tsa.gestaocontabil/"
export const linkedinUrl =
  process.env.NEXT_PUBLIC_TSA_LINKEDIN_URL ??
  "https://www.linkedin.com/in/thaise-oliveira/"

export const hasWhatsapp = Boolean(whatsappNumber)

export function whatsappLink(message: string) {
  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : "#contato"
}

export const externalLinkProps = hasWhatsapp
  ? { target: "_blank", rel: "noreferrer" }
  : {}

export const whatsappHref = whatsappLink(
  "Olá! Vim pelo site da TSA Gestão Contábil e gostaria de conversar sobre a contabilidade da minha empresa.",
)

export const featuredService = {
  title: "Contabilidade",
  description:
    "Rotinas contábil completas, com suporte especializado em todas as etapas.",
     items: [
    "classificação das receitas e despesas",
    "Balancete mensal",
    "Demonstrações financeiras",
    "Escrituração contábil / fiscal",
  ],
  message:
    "Olá! Vim pelo site da TSA e gostaria de falar sobre a Contabilidade completa com acompanhamento próximo para a minha empresa.",
}

function serviceMessage(title: string) {
  return `Olá! Vim pelo site da TSA Gestão Contábil e cliquei no serviço de ${title}. Gostaria de conversar sobre isso para a minha empresa.`
}

export const services = [
  {
    title: "Contabilidade",
    description:
      "Rotina contábil completa, com suporte especializado em todas as etapas.",
    items: [
      "Classificação das receitas e despesas",
      "Balancete mensal",
      "Demonstrações financeiras",
      "Escrituração contábil / fiscal",
    ],
    image: "/servicos/contabilidade-real.jpg",
    imageAlt:
      "Profissionais analisando documentos em um escritório",
    message: serviceMessage("Contabilidade"),
  },
  {
    title: "Fiscal e tributário",
    description:
      "Atuamos no controle e na gestão das obrigações tributárias.",
    items: [
      "Emissão de nota fiscal",
      "Apuração de impostos",
      "Obrigações acessórias",
      "PER/DCOMP e compensação de tributos",
    ],
    image: "/servicos/escrituracao-real.jpg",
    imageAlt:
      "Documentos e gráficos organizados ao lado de um computador",
    message: serviceMessage("Fiscal e tributário"),
  },
  {
    title: "Folha e rotinas trabalhistas",
    description:
      "Folha de pagamento organizada, com orientações claras para sua equipe.",
    items: ["Folha de pagamento", "Admissões e desligamentos", "eSocial", "Férias e rescisões"],
    image: "/servicos/folha-real.jpg",
    imageAlt:
      "Equipe reunida para discutir informações em uma mesa de trabalho",
    message: serviceMessage("Folha e rotinas trabalhistas"),
  },
  {
    title: "Consultoria e planejamento",
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
    message: serviceMessage("Consultoria e planejamento"),
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
    message: serviceMessage("Regularização fiscal"),
  },
  {
    title: "Societário e legalização",
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
    message: serviceMessage("Societário e legalização"),
  },
]

export const values = [
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

export const experienceHighlights = [
  {
    value: "+10 anos",
    label: "de experiência na área contábil",
    icon: LuCalendarDays,
  },
  {
    value: "MBA",
    label: "em gestão financeira e auditoria",
    icon: LuChartNoAxesCombined,
  },
  {
    value: "RJ",
    label: "atendimento online e próximo",
    icon: LuMapPin,
  },
]

export const sectionAnchorOffset = { base: "76px", md: "88px" }
