"use client"

import { useEffect } from "react"

/**
 * Animações de scroll exclusivas para telas pequenas (< 1024px).
 *
 * Elementos marcados com `data-m-reveal` aparecem suavemente ao entrar
 *    na tela. Opcional: `data-m-reveal="left|right|scale"` e
 *    `data-m-delay="<ms>"`.
 *
 * Desktop não é afetado.
 */

const MOBILE_QUERY = "(max-width: 1023px)"
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"

function hiddenTransform(kind: string | undefined) {
  switch (kind) {
    case "left":
      return "translate3d(-16px, 0, 0)"
    case "right":
      return "translate3d(16px, 0, 0)"
    case "scale":
      return "translate3d(0, 12px, 0)"
    default:
      return "translate3d(0, 16px, 0)"
  }
}

export function MobileScrollEffects() {
  useEffect(() => {
    const mobileMq = window.matchMedia(MOBILE_QUERY)

    let cleanup: (() => void) | undefined

    const setup = () => {
      cleanup?.()
      cleanup = undefined
      if (!mobileMq.matches) return

      const cleanups: Array<() => void> = []
      const duration = 420

      // Reveal ao entrar na tela
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-m-reveal]"),
      ).filter((el) => el.getBoundingClientRect().top >= window.innerHeight - 24)

      if (targets.length && "IntersectionObserver" in window) {
        const timers = new Set<number>()
        const reset = (el: HTMLElement) => {
          el.style.opacity = ""
          el.style.transform = ""
          el.style.transition = ""
          el.style.willChange = ""
        }

        targets.forEach((el) => {
          el.style.opacity = "0"
          el.style.transform = hiddenTransform(el.dataset.mReveal)
        })

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return
              const el = entry.target as HTMLElement
              const delay = Math.min(Number(el.dataset.mDelay ?? 0), 60)
              el.style.willChange = "opacity, transform"
              el.style.transition = `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`
              el.style.opacity = "1"
              el.style.transform = "translate3d(0, 0, 0)"
              observer.unobserve(el)
              const timer = window.setTimeout(() => {
                timers.delete(timer)
                reset(el)
              }, duration + delay + 60)
              timers.add(timer)
            })
          },
          { threshold: 0, rootMargin: "0px 0px -24px 0px" },
        )

        targets.forEach((el) => observer.observe(el))
        cleanups.push(() => {
          observer.disconnect()
          timers.forEach((timer) => window.clearTimeout(timer))
          targets.forEach(reset)
        })
      }

      const serviceCards = Array.from(
        document.querySelectorAll<HTMLElement>("[data-m-service-card]"),
      ).filter((card) => card.getBoundingClientRect().top >= window.innerHeight - 24)

      if (serviceCards.length && "IntersectionObserver" in window) {
        const timers = new Set<number>()
        const reset = (card: HTMLElement) => {
          const media = card.querySelector<HTMLElement>("[data-m-service-media]")
          const content = card.querySelector<HTMLElement>("[data-m-service-content]")

          media?.style.removeProperty("opacity")
          media?.style.removeProperty("transform")
          media?.style.removeProperty("transition")
          media?.style.removeProperty("will-change")
          content?.style.removeProperty("opacity")
          content?.style.removeProperty("transform")
          content?.style.removeProperty("filter")
          content?.style.removeProperty("transition")
          content?.style.removeProperty("will-change")
          card.style.removeProperty("opacity")
          card.style.removeProperty("transform")
          card.style.removeProperty("transition")
          card.style.removeProperty("will-change")
        }

        serviceCards.forEach((card) => {
          const media = card.querySelector<HTMLElement>("[data-m-service-media]")
          const content = card.querySelector<HTMLElement>("[data-m-service-content]")
          const index = Number(card.dataset.mServiceCard ?? 0)

          card.style.opacity = "0"
          card.style.transform = `translate3d(0, 32px, 0) scale(0.94) rotate(${index % 2 === 0 ? "-1.5deg" : "1.5deg"})`

          if (media) {
            media.style.opacity = "0.7"
            media.style.transform = "translate3d(0, -10px, 0) scale(1.14)"
          }

          if (content) {
            content.style.opacity = "0"
            content.style.transform = "translate3d(0, 28px, 0)"
            content.style.filter = "blur(5px)"
          }
        })

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return
              const card = entry.target as HTMLElement
              const media = card.querySelector<HTMLElement>("[data-m-service-media]")
              const content = card.querySelector<HTMLElement>("[data-m-service-content]")

              card.style.willChange = "opacity, transform"
              card.style.transition = `opacity 440ms ${EASE}, transform 620ms cubic-bezier(0.34, 1.56, 0.64, 1)`
              card.style.opacity = "1"
              card.style.transform = "translate3d(0, 0, 0) scale(1) rotate(0)"

              if (media) {
                media.style.willChange = "opacity, transform"
                media.style.transition = `opacity 480ms ${EASE} 60ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 60ms`
                media.style.opacity = "1"
                media.style.transform = "translate3d(0, 0, 0) scale(1)"
              }

              if (content) {
                content.style.willChange = "opacity, transform"
                content.style.transition = `opacity 440ms ${EASE} 160ms, transform 520ms cubic-bezier(0.22, 1, 0.36, 1) 160ms, filter 400ms ${EASE} 160ms`
                content.style.opacity = "1"
                content.style.transform = "translate3d(0, 0, 0)"
                content.style.filter = "blur(0)"
              }

              observer.unobserve(card)
              const timer = window.setTimeout(() => {
                timers.delete(timer)
                reset(card)
              }, 960)
              timers.add(timer)
            })
          },
          { threshold: 0.1, rootMargin: "0px 0px -24px 0px" },
        )

        serviceCards.forEach((card) => observer.observe(card))
        cleanups.push(() => {
          observer.disconnect()
          timers.forEach((timer) => window.clearTimeout(timer))
          serviceCards.forEach(reset)
        })
      }

      cleanup = () => cleanups.forEach((fn) => fn())
    }

    setup()
    mobileMq.addEventListener("change", setup)

    return () => {
      mobileMq.removeEventListener("change", setup)
      cleanup?.()
    }
  }, [])

  return null
}
