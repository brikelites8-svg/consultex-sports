import Navbar from '@/components/nav/Navbar'
import Hero from '@/components/sections/Hero'
import SamMitchell from '@/components/sections/SamMitchell'
import FivePillars from '@/components/sections/FivePillars'
import SportsCapabilities from '@/components/sections/SportsCabilities'
import HowSamWorks from '@/components/sections/HowSamWorks'
import ConsultingMinutes from '@/components/sections/ConsultingMinutes'
import ServicesInDepth from '@/components/sections/ServicesInDepth'
import SamQuote from '@/components/sections/SamQuote'
import PlaybookPodcast from '@/components/sections/PlaybookPodcast'
import WhoSamServes from '@/components/sections/WhoSamServes'
import Pricing from '@/components/sections/Pricing'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SamMitchell />
      <FivePillars />
      <SportsCapabilities />
      <HowSamWorks />
      <ConsultingMinutes />
      <ServicesInDepth />
      <SamQuote />
      <PlaybookPodcast />
      <WhoSamServes />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
