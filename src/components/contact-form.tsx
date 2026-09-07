"use client"

import {
  Box,
  Button,
  Field,
  Grid,
  Input,
  NativeSelect,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react"
import { useState, type FormEvent } from "react"
import { LuArrowUpRight } from "react-icons/lu"

interface ContactFormProps {
  whatsappNumber?: string
  formEndpoint?: string
}

const fieldStyles = {
  width: "full",
  minW: "0",
  bg: "bg.surface",
  borderColor: "border.subtle",
  color: "fg.default",
  _focusVisible: {
    borderColor: "brand.primary",
    boxShadow: "0 0 0 1px var(--chakra-colors-brand-primary)",
  },
}

export function ContactForm({
  whatsappNumber = "",
  formEndpoint = "",
}: ContactFormProps) {
  const [submissionState, setSubmissionState] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")
  const normalizedNumber = whatsappNumber.replace(/\D/g, "")
  const hasWhatsapp = normalizedNumber.length > 0
  const hasFormEndpoint = formEndpoint.trim().length > 0
  const isConfigured = hasWhatsapp || hasFormEndpoint

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isConfigured) return

    const form = event.currentTarget
    const data = new FormData(form)

    if (hasFormEndpoint) {
      setSubmissionState("sending")

      try {
        const response = await fetch(formEndpoint.trim(), {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        })

        if (!response.ok) throw new Error("Não foi possível enviar o formulário")

        form.reset()
        setSubmissionState("success")
      } catch {
        setSubmissionState("error")
      }

      return
    }

    const message = [
      "Olá! Gostaria de conversar com a TSA Gestão Contábil.",
      "",
      `Nome: ${data.get("name")}`,
      `WhatsApp: ${data.get("whatsapp")}`,
      `E-mail: ${data.get("email")}`,
      `Negócio ou atividade: ${data.get("business")}`,
      `Já possui CNPJ: ${data.get("hasCnpj")}`,
      `Regime tributário: ${data.get("taxRegime")}`,
      `Principal necessidade: ${data.get("need")}`,
      `Contexto: ${data.get("message")}`,
    ].join("\n")

    window.open(
      `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Solicitar contato da TSA" style={{ width: "100%", maxWidth: "100%" }}>
      <Stack gap="5">
        <Grid minW="0" width="full" templateColumns={{ base: "minmax(0, 1fr)", md: "minmax(0, 1fr) minmax(0, 1fr)" }} gap="5">
          <Field.Root required>
            <Field.Label>Nome</Field.Label>
            <Input name="name" autoComplete="name" {...fieldStyles} />
          </Field.Root>

          <Field.Root required>
            <Field.Label>WhatsApp</Field.Label>
            <Input
              name="whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              {...fieldStyles}
            />
          </Field.Root>

          <Field.Root required>
            <Field.Label>E-mail</Field.Label>
            <Input name="email" type="email" autoComplete="email" {...fieldStyles} />
          </Field.Root>

          <Field.Root required>
            <Field.Label>Tipo de negócio ou atividade</Field.Label>
            <Input name="business" {...fieldStyles} />
          </Field.Root>

          <Field.Root required>
            <Field.Label>A empresa já possui CNPJ?</Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field name="hasCnpj" {...fieldStyles}>
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
                <option value="Em processo">Está em processo</option>
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Field.Root>

          <Field.Root>
            <Field.Label>Regime tributário, se souber</Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field name="taxRegime" {...fieldStyles}>
                <option value="Não sei informar">Não sei informar</option>
                <option value="MEI">MEI</option>
                <option value="Simples Nacional">Simples Nacional</option>
                <option value="Lucro Presumido">Lucro Presumido</option>
                <option value="Outro">Outro</option>
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Field.Root>
        </Grid>

        <Field.Root required>
          <Field.Label>Principal necessidade</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field name="need" {...fieldStyles}>
              <option value="">Selecione</option>
              <option value="Contabilidade completa">Contabilidade completa</option>
              <option value="Abertura, alteração ou encerramento de empresa">
                Abertura, alteração ou encerramento de empresa
              </option>
              <option value="Regularização">Regularização</option>
              <option value="Folha e rotinas trabalhistas">
                Folha e rotinas trabalhistas
              </option>
              <option value="Planejamento tributário">Planejamento tributário</option>
              <option value="Consultoria contábil">Consultoria contábil</option>
              <option value="Outra orientação">Outra orientação</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        <Field.Root>
          <Field.Label>Conte brevemente o que está acontecendo</Field.Label>
          <Textarea name="message" minH="120px" resize="vertical" {...fieldStyles} />
        </Field.Root>

        <Button
          type="submit"
          alignSelf={{ base: "stretch", sm: "flex-start" }}
          size="lg"
          bg="brand.primary"
          color="fg.onBrand"
          borderRadius="full"
          px="7"
          disabled={!isConfigured || submissionState === "sending"}
          _hover={{ bg: "accent.warm", color: "brand.primary" }}
        >
          {submissionState === "sending"
            ? "Enviando..."
            : hasFormEndpoint
              ? "Solicitar contato"
              : hasWhatsapp
                ? "Enviar pelo WhatsApp"
                : "Canal comercial em configuração"}
          <LuArrowUpRight />
        </Button>

        <Box aria-live="polite">
          {submissionState === "success" && (
            <Text textStyle="micro" color="accent.balance">
              Informações enviadas. A TSA entrará em contato.
            </Text>
          )}
          {submissionState === "error" && (
            <Text textStyle="micro" color="brand.primary" role="alert">
              Não foi possível enviar agora. Tente novamente em alguns instantes.
            </Text>
          )}
        </Box>

        {!isConfigured && (
          <Text textStyle="micro" color="fg.muted" maxW="60ch">
            O envio será ativado assim que o número comercial da TSA for definido.
          </Text>
        )}
      </Stack>
    </form>
  )
}
