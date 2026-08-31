import { Provider } from "@/components/ui/provider"
import "@fontsource/lora/600.css"
import "@fontsource/manrope/400.css"
import "@fontsource/manrope/600.css"
import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TSA Gestão Contábil",
    template: "%s | TSA Gestão Contábil",
  },
  description:
    "Contabilidade para empresas de serviços no Rio de Janeiro, com clareza, rigor técnico e proximidade real.",
  openGraph: {
    title: "TSA Gestão Contábil",
    description: "Clareza para decidir com segurança.",
    type: "website",
    locale: "pt_BR",
    siteName: "TSA Gestão Contábil",
    images: [
      {
        url: "/capaCp.png",
        width: 852,
        height: 316,
        alt: "TSA Gestão Contábil — Clareza para decidir com segurança.",
      },
    ],
  },
  icons: {
    icon: [{ url: "/TsaLogoSite.png", type: "image/png" }],
    shortcut: ["/TsaLogoSite.png"],
    apple: [{ url: "/TsaLogoSite.png", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TSA Gestão Contábil",
    description: "Clareza para decidir com segurança.",
    images: ["/capaCp.png"],
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
