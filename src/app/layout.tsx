import { Provider } from "@/components/ui/provider"
import "@fontsource/lora/600.css"
import "@fontsource/manrope/400.css"
import "@fontsource/manrope/600.css"
import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TSA Gestão Contábil — Segurança para cuidar. Clareza para decidir.",
    template: "%s | TSA Gestão Contábil",
  },
  description:
    "Contabilidade completa e próxima para prestadores de serviços e PMEs no Rio de Janeiro. Clareza, orientação e segurança para decidir.",
  openGraph: {
    title: "TSA Gestão Contábil",
    description: "Segurança para cuidar. Clareza para decidir.",
    type: "website",
    locale: "pt_BR",
    siteName: "TSA Gestão Contábil",
    images: [
      {
        url: "/capaCp.png",
        width: 852,
        height: 316,
        alt: "TSA Gestão Contábil — Segurança para cuidar. Clareza para decidir.",
      },
    ],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TSA Gestão Contábil",
    description: "Segurança para cuidar. Clareza para decidir.",
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
