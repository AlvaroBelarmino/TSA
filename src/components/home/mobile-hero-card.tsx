import { Grid } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface MobileHeroCardProps {
  children: ReactNode
}

export function MobileHeroCard({ children }: MobileHeroCardProps) {
  return (
    <Grid
      w="full"
      templateColumns={{ base: "minmax(0, 1fr)", lg: "minmax(0, 640px) auto" }}
      gap={{ base: "8", lg: "10" }}
      alignItems="center"
      bg={{ base: "bg.canvas", lg: "transparent" }}
      borderTopRadius={{ base: "32px", lg: "0" }}
      px={{ base: "6", md: "8", lg: "0" }}
      pt={{ base: "10", lg: "0" }}
      pb="0"
      boxShadow={{ base: "0 -10px 30px rgba(0, 56, 88, 0.08)", lg: "none" }}
    >
      {children}
    </Grid>
  )
}
