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
