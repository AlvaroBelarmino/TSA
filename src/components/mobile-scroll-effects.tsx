"use client"

import { useEffect } from "react"

/**
 * Animações de scroll exclusivas para telas pequenas (< 1024px).
 *
 * 1. Hero: a foto desce mais devagar que a página (parallax), então o card
 *    branco "sobe" e vai cobrindo a imagem conforme o usuário rola.
 * 2. Elementos marcados com `data-m-reveal` aparecem suavemente ao entrar
 *    na tela. Opcional: `data-m-reveal="left|right|scale"` e
 *    `data-m-delay="<ms>"`.
 *
 * Desktop e usuários com "reduzir movimento" não são afetados.
 */

const MOBILE_QUERY = "(max-width: 1023px)"
const MOTION_QUERY = "(prefers-reduced-motion: no-preference)"
const PARALLAX_SPEED = 0.55
const PARALLAX_MAX_SCROLL = 700
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"

function hiddenTransform(kind: string | undefined) {
  switch (kind) {
    case "left":
      return "translate3d(-28px, 0, 0)"
    case "right":
      return "translate3d(28px, 0, 0)"
    case "scale":
      return "translate3d(0, 24px, 0) scale(0.96)"
    default:
      return "translate3d(0, 32px, 0)"
  }
}

export function MobileScrollEffects() {
  useEffect(() => {
    const mobileMq = window.matchMedia(MOBILE_QUERY)
    const motionMq = window.matchMedia(MOTION_QUERY)

    let cleanup: (() => void) | undefined

    const setup = () => {
      cleanup?.()
      cleanup = undefined
      if (!mobileMq.matches || !motionMq.matches) return

      const cleanups: Array<() => void> = []

      // 1. Parallax do hero
      const heroImage = document.querySelector<HTMLElement>("[data-hero-parallax]")
      if (heroImage) {
        let frame = 0
        const update = () => {
          frame = 0
          const y = Math.min(Math.max(window.scrollY, 0), PARALLAX_MAX_SCROLL)
          heroImage.style.transform = `translate3d(0, ${(y * PARALLAX_SPEED).toFixed(1)}px, 0)`
        }
        const onScroll = () => {
          if (!frame) frame = requestAnimationFrame(update)
        }
        update()
        window.addEventListener("scroll", onScroll, { passive: true })
        cleanups.push(() => {
          window.removeEventListener("scroll", onScroll)
          if (frame) cancelAnimationFrame(frame)
          heroImage.style.transform = ""
        })
      }

      // 2. Reveal ao entrar na tela
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-m-reveal]"),
      ).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92)

      if (targets.length && "IntersectionObserver" in window) {
        const reset = (el: HTMLElement) => {
          el.style.opacity = ""
          el.style.transform = ""
          el.style.transition = ""
          el.style.willChange = ""
        }

        targets.forEach((el) => {
          el.style.opacity = "0"
          el.style.transform = hiddenTransform(el.dataset.mReveal)
          el.style.willChange = "opacity, transform"
        })

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return
              const el = entry.target as HTMLElement
              const delay = Number(el.dataset.mDelay ?? 0)
              el.style.transition = `opacity 800ms ${EASE} ${delay}ms, transform 800ms ${EASE} ${delay}ms`
              el.style.opacity = "1"
              el.style.transform = "translate3d(0, 0, 0)"
              observer.unobserve(el)
              window.setTimeout(() => reset(el), 800 + delay + 60)
            })
          },
          { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        )

        targets.forEach((el) => observer.observe(el))
        cleanups.push(() => {
          observer.disconnect()
          targets.forEach(reset)
        })
      }

      cleanup = () => cleanups.forEach((fn) => fn())
    }

    setup()
    mobileMq.addEventListener("change", setup)
    motionMq.addEventListener("change", setup)

    return () => {
      mobileMq.removeEventListener("change", setup)
      motionMq.removeEventListener("change", setup)
      cleanup?.()
    }
  }, [])

  return null
}
