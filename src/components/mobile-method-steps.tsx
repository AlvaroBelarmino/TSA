import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"

type MethodStep = {
  number: string
  title: string
  description: string
  icon: string
}

const mobileStickyTops = ["6.5rem", "7.25rem", "8rem", "8.75rem"]

export function MobileMethodSteps({ steps }: { steps: MethodStep[] }) {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      display={{ base: "block", md: "grid" }}
      gap="0"
      borderTopWidth={{ base: "0", md: "1px" }}
      borderColor="border.subtle"
      minW="0"
      w="full"
    >
      {steps.map((step, index) => (
        <Stack
          key={step.number}
          data-method-step
          position={{ base: "sticky", md: "relative" }}
          top={{ base: mobileStickyTops[index], md: "auto" }}
          zIndex={{ base: index + 1, md: "auto" }}
          minH={{ base: "270px", md: "auto" }}
          mb={{ base: index === steps.length - 1 ? "0" : "42vh", md: "0" }}
          pt={{ base: "7", md: "9" }}
          pb={{ base: "7", md: "8" }}
          px={{ base: "6", md: "0", lg: index === 0 ? "0" : "7" }}
          pr={{ base: "6", md: "0", lg: "7" }}
          bg={{ base: "bg.surface", md: "transparent" }}
          borderWidth={{ base: "1px", md: "0" }}
          borderBottomWidth={{ base: "1px", md: "1px", lg: "0" }}
          borderLeftWidth={{ base: "1px", md: "0", lg: index === 0 ? "0" : "1px" }}
          borderColor="border.subtle"
          borderRadius={{ base: "2xl", md: "0" }}
          boxShadow={{ base: "0 18px 45px rgba(0, 56, 88, 0.14)", md: "none" }}
          gap="4"
          minW="0"
        >
          <Box
            position="absolute"
            top={{ base: "6", md: "-7px" }}
            left={{ base: "auto", md: "0", lg: index === 0 ? "0" : "7" }}
            right={{ base: "6", md: "auto" }}
            boxSize={index === 3 ? "4" : "3.5"}
            borderRadius="full"
            bg={index === 3 ? "brand.primary" : "accent.warm"}
          />
          <Flex
            boxSize="12"
            borderWidth="1px"
            borderColor="rgba(244, 132, 32, 0.45)"
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
          <Heading as="h3" textStyle="h3" color="brand.primary">
            {step.title}
          </Heading>
          <Text textStyle="body" color="fg.default">
            {step.description}
          </Text>
        </Stack>
      ))}
    </SimpleGrid>
  )
}
