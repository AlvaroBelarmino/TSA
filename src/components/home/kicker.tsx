import { Box, HStack, Text } from "@chakra-ui/react"

export function Kicker({
  children,
  color = "brand.primary",
  center = false,
}: {
  children: React.ReactNode
  color?: React.ComponentProps<typeof Text>["color"]
  center?: boolean | { base?: boolean; lg?: boolean }
}) {
  const centered =
    typeof center === "boolean"
      ? { base: center, lg: center }
      : { base: false, lg: false, ...center }

  return (
    <HStack
      gap="4"
      minW="0"
      align="center"
      justify={{ base: centered.base ? "center" : "flex-start", lg: centered.lg ? "center" : "flex-start" }}
      w={{ base: centered.base ? "full" : "auto", lg: centered.lg ? "full" : "auto" }}
    >
      <Box w="10" h="1px" bg="accent.warm" flex="0 0 auto" aria-hidden="true" />
      <Text
        textStyle="micro"
        color={color}
        minW="0"
        textAlign={{ base: centered.base ? "center" : "left", lg: centered.lg ? "center" : "left" }}
      >
        {children}
      </Text>
      <Box
        display={{ base: centered.base ? "block" : "none", lg: centered.lg ? "block" : "none" }}
        w="10"
        h="1px"
        bg="accent.warm"
        flex="0 0 auto"
        aria-hidden="true"
      />
    </HStack>
  )
}
