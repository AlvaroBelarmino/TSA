import { Provider } from "@/components/ui/provider"
import "@fontsource/cormorant-garamond/600.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/600.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TSA Gestão Contábil",
  description: "TSA Gestão Contábil",
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
