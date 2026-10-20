import { Flex, HStack, Text } from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"

export function CheckItem({
  children,
  onBrand = false,
}: {
  children: React.ReactNode
  onBrand?: boolean
}) {
  return (
    <HStack
      gap="3"
      align="flex-start"
      minW="0"
      w="full"
      fontSize="cta"
      lineHeight="1.2"
    >
      <Flex
        boxSize="5"
        flex="0 0 auto"
        borderRadius="full"
        bg={onBrand ? "accent.warm" : "rgba(244, 132, 32, 0.14)"}
        color={onBrand ? "brand.primary" : "accent.warm"}
        align="center"
        justify="center"
        css={{ marginTop: "calc((1lh - 1.25rem) / 2)" }}
      >
        <LuCheck size="12" />
      </Flex>
      <Text
        fontSize="inherit"
        lineHeight="inherit"
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
