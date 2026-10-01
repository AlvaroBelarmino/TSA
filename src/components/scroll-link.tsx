"use client"

import { Button, type ButtonProps } from "@chakra-ui/react"
import { forwardRef, type MouseEvent } from "react"

interface ScrollLinkProps extends Omit<ButtonProps, "type"> {
  target: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
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

      document.getElementById(target)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}`,
        )
      }
    }

    return (
      <Button
        ref={ref}
        type="button"
        variant="plain"
        minW="0"
        h="auto"
        p="0"
        {...props}
        onClick={handleClick}
      />
    )
  },
)

ScrollLink.displayName = "ScrollLink"
