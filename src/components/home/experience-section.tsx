import { Box, Container, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { Kicker } from "./kicker"
import { experienceHighlights } from "./data"

export function ExperienceSection() {
  return (
    <>
      <Box
        display={{ base: "block", md: "none" }}
        position="relative"
        overflow="hidden"
        bg="bg.brand"
        color="fg.onBrand"
      >
        <Image
          src="/experiencia-mobile-v1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(90deg, rgba(0, 56, 88, 0.96) 0%, rgba(0, 56, 88, 0.84) 58%, rgba(0, 56, 88, 0.18) 100%)"
          aria-hidden="true"
        />
        <Container position="relative" zIndex="1" px="5" py="12">
          <Stack gap="8">
            <Stack gap="0">
              {experienceHighlights.map(({ value, label, icon: Icon }, index) => (
                <Flex
                  key={value}
                  data-m-experience-reveal={index}
                  gap="5"
                  align="center"
                  py={index === 0 ? "0" : "7"}
                  pb={index === experienceHighlights.length - 1 ? "0" : "7"}
                  borderBottomWidth={
                    index === experienceHighlights.length - 1 ? "0" : "1px"
                  }
                  borderColor="rgba(247,243,238,0.2)"
                >
                  <Flex
                    boxSize="24"
                    flexShrink="0"
                    align="center"
                    justify="center"
                    borderWidth="2px"
                    borderColor="rgba(53, 163, 196, 0.38)"
                    borderRadius="full"
                    color="accent.warm"
                  >
                    <Icon size="35" strokeWidth="1.8" aria-hidden="true" />
                  </Flex>
                  <Stack gap="2" minW="0">
                    <Text
                      data-m-counter={value === "+10 anos" ? "10" : undefined}
                      data-m-counter-prefix={value === "+10 anos" ? "+" : undefined}
                      data-m-counter-suffix={value === "+10 anos" ? " anos" : undefined}
                      fontFamily="heading"
                      fontSize="clamp(2.5rem, 12vw, 3.5rem)"
                      fontWeight="semibold"
                      lineHeight="1"
                      color="fg.onBrand"
                    >
                      {value}
                    </Text>
                    <Text
                      textStyle="micro"
                      fontSize="0.8125rem"
                      lineHeight="1.55"
                      letterSpacing="0.14em"
                      color="fg.onBrand"
                      maxW="25ch"
                    >
                      {label}
                    </Text>
                  </Stack>
                </Flex>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        bg="bg.brand"
        color="fg.onBrand"
        borderTopWidth="1px"
        borderColor="rgba(247,243,238,0.08)"
      >
        <Container maxW="1440px" px={{ base: "5", md: "8", xl: "12" }}>
          <SimpleGrid
            columns={{ base: 1, sm: 3 }}
            py={{ base: "8", md: "10" }}
            gap={{ base: "7", md: "0" }}
          >
            {experienceHighlights.map(({ value, label }, index) => (
              <Stack
                key={value}
                gap="1"
                px={{ base: "0", sm: "6" }}
                borderLeftWidth={{ base: "0", sm: index === 0 ? "0" : "1px" }}
                borderColor="rgba(247,243,238,0.16)"
                align={{ base: "flex-start", sm: "center" }}
                textAlign={{ base: "left", sm: "center" }}
              >
                <Text
                  fontFamily="heading"
                  fontSize="h2"
                  fontWeight="semibold"
                  color="fg.onBrand"
                >
                  {value}
                </Text>
                <Text textStyle="micro" color="accent.warm">
                  {label}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}
