import { Box, HStack, Heading, Link, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { externalLinkProps, services, whatsappLink } from "./data"

export function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const card = (
    <Stack
      role="group"
      className="group"
      position="relative"
      overflow="hidden"
      h="full"
      w="full"
      minW="0"
      maxW="100%"
      gap="0"
      bg="bg.surface"
      borderWidth="1px"
      borderColor="border.subtle"
      borderRadius="2xl"
      cursor="pointer"
      transform="translateY(0) rotate(0)"
      transformOrigin="center center"
      willChange="transform"
      transition="transform 520ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 280ms ease, border-color 280ms ease"
      _hover={{
        transform: `translateY(-9px) rotate(${index % 2 === 0 ? "-0.9deg" : "0.9deg"}) scale(1.008)`,
        borderColor: "rgba(0, 56, 88, 0.22)",
        boxShadow: "0 22px 50px rgba(0, 56, 88, 0.14)",
      }}
    >
      <Box position="relative" aspectRatio="16 / 9" overflow="hidden" flex="0 0 auto">
        <Box
          position="absolute"
          inset="0"
          transition="transform 600ms cubic-bezier(0.22, 1, 0.36, 1)"
          _groupHover={{ transform: "scale(1.06)" }}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 64rem) 33vw, (min-width: 48rem) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          position="absolute"
          inset="0"
          pointerEvents="none"
          background="linear-gradient(135deg, rgba(0, 56, 88, 0.3), rgba(0, 56, 88, 0.08))"
          backdropFilter="saturate(0.88) contrast(1.04)"
          transition="background 280ms ease, backdrop-filter 280ms ease"
          _groupHover={{
            background:
              "linear-gradient(135deg, rgba(0, 56, 88, 0.18), rgba(0, 56, 88, 0.04))",
            backdropFilter: "saturate(0.98) contrast(1.02)",
          }}
        />
      </Box>

      <Stack gap="0" flex="1" minW="0" px={{ base: "5", md: "7" }} pt="7" pb="6">
        <Heading
          as="h3"
          fontFamily="heading"
          fontSize={{ base: "1.2rem", md: "1.3125rem" }}
          lineHeight="1.3"
          fontWeight="semibold"
          letterSpacing="-0.01em"
          color="brand.primary"
          mb="3"
          css={{ textWrap: "balance", overflowWrap: "anywhere" }}
        >
          {service.title}
        </Heading>
        <Text
          fontSize="0.9375rem"
          lineHeight="1.6"
          color="fg.default"
          css={{ textWrap: "pretty", overflowWrap: "anywhere" }}
        >
          {service.description}
        </Text>

        <Stack
          gap="2"
          mt="auto"
          pt="6"
          borderTopWidth="1px"
          borderColor="border.subtle"
          minW="0"
        >
          {service.items.map((item) => (
            <HStack key={item} gap="2.5" align="center" minW="0">
              <Box
                boxSize="1.5"
                borderRadius="full"
                bg="accent.warm"
                flex="0 0 auto"
                aria-hidden="true"
              />
              <Text
                fontSize="0.8125rem"
                lineHeight="1.5"
                color="fg.muted"
                minW="0"
                css={{ overflowWrap: "anywhere" }}
              >
                {item}
              </Text>
            </HStack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )

  return (
    <Link
      href={whatsappLink(service.message)}
      aria-label={`Falar no WhatsApp sobre ${service.title}`}
      display="block"
      h="full"
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
      _focusVisible={{
        outline: "3px solid rgba(244, 132, 32, 0.65)",
        outlineOffset: "4px",
      }}
      {...externalLinkProps}
    >
      {card}
    </Link>
  )
}
