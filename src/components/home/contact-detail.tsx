import { Flex, HStack, Stack, Text } from "@chakra-ui/react"

export function ContactDetail({
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
