"use client"

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react"

export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
})

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root
            width={{ md: "sm" }}
            bg="bg.surface"
            color="fg.default"
            borderColor="border.subtle"
            borderWidth="1px"
          >
            {toast.type === "loading" ? (
              <Spinner size="sm" color="accent.balance" />
            ) : (
              <Toast.Indicator color="accent.balance" />
            )}
            <Stack gap="1" flex="1" maxWidth="100%">
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
            </Stack>
            {toast.action && (
              <Toast.ActionTrigger color="brand.primary">
                {toast.action.label}
              </Toast.ActionTrigger>
            )}
            {toast.closable && <Toast.CloseTrigger color="fg.muted" />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}
