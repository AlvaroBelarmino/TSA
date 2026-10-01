import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"

type MethodStep = {
  number: string
  title: string
  description: string
  icon: string
}

const mobileStickyTop = "6.5rem"

const mobileCardThemes = [
  {
    background: "linear-gradient(145deg, #FFFFFF 0%, #FAF7F2 100%)",
    border: "rgba(0, 56, 88, 0.12)",
    accent: "#F48420",
    title: "#003858",
    body: "#1F2430",
    iconBackground: "#FFF8F1",
    watermark: "rgba(0, 56, 88, 0.055)",
  },
  {
    background: "linear-gradient(145deg, #FFF8F0 0%, #FBE8D5 100%)",
    border: "rgba(244, 132, 32, 0.22)",
    accent: "#F48420",
    title: "#003858",
    body: "#1F2430",
    iconBackground: "rgba(255, 255, 255, 0.72)",
    watermark: "rgba(244, 132, 32, 0.1)",
  },
  {
    background: "linear-gradient(145deg, #F2F6F3 0%, #DEE8E3 100%)",
    border: "rgba(95, 115, 107, 0.25)",
    accent: "#5F736B",
    title: "#003858",
    body: "#1F2430",
    iconBackground: "rgba(255, 255, 255, 0.72)",
    watermark: "rgba(95, 115, 107, 0.11)",
  },
  {
    background: "linear-gradient(145deg, #277691 0%, #0D5A75 68%, #064966 100%)",
    border: "rgba(255, 255, 255, 0.14)",
    accent: "#F48420",
    title: "#F7F3EE",
    body: "rgba(247, 243, 238, 0.88)",
    iconBackground: "#F7F3EE",
    watermark: "rgba(247, 243, 238, 0.075)",
  },
]

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
      {steps.map((step, index) => {
        const theme = mobileCardThemes[index] ?? mobileCardThemes[0]

        return (
          <Stack
            key={step.number}
            data-method-step
            position={{ base: "sticky", md: "relative" }}
            top={{ base: mobileStickyTop, md: "auto" }}
            zIndex={{ base: index + 1, md: "auto" }}
            minH={{ base: "292px", md: "auto" }}
            mb={{ base: index === steps.length - 1 ? "0" : "42vh", md: "0" }}
            pt={{ base: "8", md: "9" }}
            pb={{ base: "7", md: "8" }}
            px={{ base: "7", md: "0", lg: index === 0 ? "0" : "7" }}
            pr={{ base: "7", md: "0", lg: "7" }}
            background={{ base: theme.background, md: "transparent" }}
            borderWidth={{ base: "1px", md: "0" }}
            borderBottomWidth={{ base: "1px", md: "1px", lg: "0" }}
            borderLeftWidth={{ base: "1px", md: "0", lg: index === 0 ? "0" : "1px" }}
            borderColor={{ base: theme.border, md: "border.subtle" }}
            borderRadius={{ base: "3xl", md: "0" }}
            boxShadow={{
              base: "0 24px 60px rgba(0, 56, 88, 0.18), 0 5px 14px rgba(0, 56, 88, 0.08)",
              md: "none",
            }}
            overflow="hidden"
            gap="5"
            minW="0"
          >
            <Box
              display={{ base: "block", md: "none" }}
              position="absolute"
              top="0"
              left="0"
              h="4px"
              w={`${((index + 1) / steps.length) * 100}%`}
              bg={theme.accent}
              borderTopRightRadius="full"
            />
            <Text
              display={{ base: "block", md: "none" }}
              position="absolute"
              right="4"
              bottom="-5"
              fontFamily="heading"
              fontSize="7.5rem"
              fontWeight="semibold"
              lineHeight="1"
              color={theme.watermark}
              aria-hidden="true"
            >
              {step.number}
            </Text>
            <Box
              display={{ base: "none", md: "block" }}
              position="absolute"
              top="-7px"
              left={{ md: "0", lg: index === 0 ? "0" : "7" }}
              boxSize={index === 3 ? "4" : "3.5"}
              borderRadius="full"
              bg={index === 3 ? "brand.primary" : "accent.warm"}
            />

            <Flex
              boxSize={{ base: "14", md: "12" }}
              borderWidth="1px"
              borderColor={{ base: theme.accent, md: "rgba(244, 132, 32, 0.45)" }}
              borderRadius="full"
              align="center"
              justify="center"
              bg={{ base: theme.iconBackground, md: "bg.canvas" }}
              boxShadow={{ base: "inset 0 0 0 5px rgba(255, 255, 255, 0.28)", md: "none" }}
              position="relative"
              zIndex="1"
            >
              <Image
                src={step.icon}
                alt=""
                width={829}
                height={829}
                style={{ width: "22px", height: "22px", objectFit: "contain" }}
              />
            </Flex>

            <Text
              display={{ base: "none", md: "block" }}
              textStyle="micro"
              color="brand.primary"
            >
              {step.number}
            </Text>
            <Heading
              as="h3"
              textStyle="h3"
              color={{ base: theme.title, md: "brand.primary" }}
              position="relative"
              zIndex="1"
            >
              {step.title}
            </Heading>
            <Text
              textStyle="body"
              color={{ base: theme.body, md: "fg.default" }}
              position="relative"
              zIndex="1"
            >
              {step.description}
            </Text>
          </Stack>
        )
      })}
      <Box display={{ base: "block", md: "none" }} h="48vh" aria-hidden="true" />
    </SimpleGrid>
  )
}
