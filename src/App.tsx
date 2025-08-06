import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Community } from './components/Community'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
export function App() {
  return (
    <div
      className="w-full min-h-screen font-sans"
      style={{
        background:
          'linear-gradient(to bottom, rgba(21, 20, 26, 1) 0%, rgba(8, 2, 19, 1) 25%, rgba(16, 19, 36, 1) 50%, rgba(13, 14, 37, 1) 75%, rgba(24, 29, 56, 1) 100%)',
      }}
    >
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Community />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
