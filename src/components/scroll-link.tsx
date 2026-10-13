"use client"

import { chakra, type HTMLChakraProps } from "@chakra-ui/react"
import { forwardRef, type MouseEvent } from "react"

interface ScrollLinkProps extends Omit<HTMLChakraProps<"button">, "type"> {
  target: string
}

export const ScrollLink = forwardRef<HTMLButtonElement, ScrollLinkProps>(
  ({ target, onClick, ...props }, ref) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)

      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return
      }

      if (target === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        document.getElementById(target)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }

      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}`,
        )
      }
    }

    return (
      <chakra.button
        ref={ref}
        type="button"
        appearance="none"
        bg="transparent"
        borderWidth="0"
        cursor="pointer"
        font="inherit"
        minW="0"
        p="0"
        textAlign="inherit"
        {...props}
        onClick={handleClick}
      />
    )
  },
)

ScrollLink.displayName = "ScrollLink"
