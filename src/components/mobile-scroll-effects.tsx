"use client"

import { useEffect } from "react"

/**
 * Animações de scroll exclusivas para telas pequenas (< 1024px).
 *
 * Controla animações pontuais nas seções mobile.
 *
 * Desktop não é afetado.
 */

const MOBILE_QUERY = "(max-width: 1023px)"
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"

export function MobileScrollEffects() {
  useEffect(() => {
    const mobileMq = window.matchMedia(MOBILE_QUERY)

    let cleanup: (() => void) | undefined

    const setup = () => {
      cleanup?.()
      cleanup = undefined
      if (!mobileMq.matches) return

      const cleanups: Array<() => void> = []
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

      const maskTargets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-m-mask-reveal]"),
      ).filter((target) => target.getBoundingClientRect().top >= window.innerHeight - 24)

      if (maskTargets.length && "IntersectionObserver" in window) {
        const timers = new Set<number>()
        const reset = (target: HTMLElement) => {
          target.style.removeProperty("clip-path")
          target.style.removeProperty("transform")
          target.style.removeProperty("transition")
          target.style.removeProperty("will-change")
        }

        maskTargets.forEach((target) => {
          target.style.clipPath = "inset(0 100% 0 0)"
          target.style.transform = "scale(1.04)"
        })

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return
              const target = entry.target as HTMLElement

              target.style.willChange = "clip-path, transform"
              target.style.transition = `clip-path 700ms cubic-bezier(0.77, 0, 0.175, 1), transform 700ms ${EASE}`
              target.style.clipPath = "inset(0 0 0 0)"
              target.style.transform = "scale(1)"
              observer.unobserve(target)
              const timer = window.setTimeout(() => {
                timers.delete(timer)
                reset(target)
              }, 760)
              timers.add(timer)
            })
          },
          { threshold: 0.2, rootMargin: "0px 0px -24px 0px" },
        )

        maskTargets.forEach((target) => observer.observe(target))
        cleanups.push(() => {
          observer.disconnect()
          timers.forEach((timer) => window.clearTimeout(timer))
          maskTargets.forEach(reset)
        })
      }

      const experienceHighlights = Array.from(
        document.querySelectorAll<HTMLElement>("[data-m-experience-reveal]"),
      ).filter((highlight) => highlight.getBoundingClientRect().top >= window.innerHeight - 24)

      if (experienceHighlights.length && "IntersectionObserver" in window) {
        const timers = new Set<number>()
        const reset = (highlight: HTMLElement) => {
          highlight.style.removeProperty("opacity")
          highlight.style.removeProperty("transform")
          highlight.style.removeProperty("transition")
          highlight.style.removeProperty("will-change")
        }

        experienceHighlights.forEach((highlight) => {
          highlight.style.opacity = "0"
          highlight.style.transform = "translate3d(-24px, 0, 0)"
        })

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return
              const highlight = entry.target as HTMLElement
              const delay = Math.min(Number(highlight.dataset.mExperienceReveal ?? 0) * 100, 200)

              highlight.style.willChange = "opacity, transform"
              highlight.style.transition = `opacity 420ms ${EASE} ${delay}ms, transform 520ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
              highlight.style.opacity = "1"
              highlight.style.transform = "translate3d(0, 0, 0)"
              observer.unobserve(highlight)
              const timer = window.setTimeout(() => {
                timers.delete(timer)
                reset(highlight)
              }, 600 + delay)
              timers.add(timer)
            })
          },
          { threshold: 0.15, rootMargin: "0px 0px -24px 0px" },
        )

        experienceHighlights.forEach((highlight) => observer.observe(highlight))
        cleanups.push(() => {
          observer.disconnect()
          timers.forEach((timer) => window.clearTimeout(timer))
          experienceHighlights.forEach(reset)
        })
      }

      const counters = Array.from(
        document.querySelectorAll<HTMLElement>("[data-m-counter]"),
      ).filter((counter) => counter.getBoundingClientRect().top >= window.innerHeight - 24)

      if (counters.length && "IntersectionObserver" in window) {
        const frames = new Set<number>()
        const formatCounter = (counter: HTMLElement, value: number) => {
          const prefix = counter.dataset.mCounterPrefix ?? ""
          const suffix = counter.dataset.mCounterSuffix ?? ""
          counter.textContent = `${prefix}${value}${suffix}`
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return
              const counter = entry.target as HTMLElement
              const target = Number(counter.dataset.mCounter ?? 0)
              const start = performance.now()
              const duration = 760

              const update = (now: number) => {
                const progress = Math.min((now - start) / duration, 1)
                const easedProgress = 1 - (1 - progress) ** 3
                formatCounter(counter, Math.round(target * easedProgress))

                if (progress < 1) {
                  const frame = window.requestAnimationFrame(update)
                  frames.add(frame)
                }
              }

              formatCounter(counter, 0)
              const frame = window.requestAnimationFrame(update)
              frames.add(frame)
              observer.unobserve(counter)
            })
          },
          { threshold: 0.35, rootMargin: "0px 0px -24px 0px" },
        )

        counters.forEach((counter) => observer.observe(counter))
        cleanups.push(() => {
          observer.disconnect()
          frames.forEach((frame) => window.cancelAnimationFrame(frame))
          counters.forEach((counter) => {
            formatCounter(counter, Number(counter.dataset.mCounter ?? 0))
          })
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
