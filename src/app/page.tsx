import { Box } from "@chakra-ui/react"
import { SiteHeader } from "@/components/site-header"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { AboutSection } from "@/components/home/about-section"
import { ContactSection } from "@/components/home/contact-section"
import { DecisionSection } from "@/components/home/decision-section"
import { ExperienceSection } from "@/components/home/experience-section"
import { HeroSection } from "@/components/home/hero-section"
import { PainPointSection } from "@/components/home/pain-point-section"
import { ServicesSection } from "@/components/home/services-section"
import { SiteFooter } from "@/components/home/site-footer"
import { hasWhatsapp, whatsappHref, whatsappNumber } from "@/components/home/data"

export default function Home() {
  return (
    <Box overflowX="clip" maxW="100%">
      <SiteHeader whatsappNumber={whatsappNumber} />
      <Box as="main" minW="0" maxW="100%">
        <HeroSection />
        <ExperienceSection />
        <PainPointSection />
        <ServicesSection />
        <DecisionSection />
        <AboutSection />
        <ContactSection />
      </Box>
      <SiteFooter />
      {hasWhatsapp ? <WhatsappFloat href={whatsappHref} /> : null}
    </Box>
  )
}
