import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import OurProducts from '@/components/OurProducts';
import KeyFeatures from '@/components/KeyFeatures';
import OurExpertise from '@/components/OurExpertise';
import Testimonials from '@/components/Testimonials';
import Container from '@/components/ui/container';
import { createFileRoute } from '@tanstack/react-router';
import Certifications from '@/components/Certifications';
export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <Container as='main' className='space-y-28'>
      <HeroSection/>
      <AboutSection/>
      <OurProducts/>
      <KeyFeatures/>
      <OurExpertise/>
      <Testimonials/>
      <Certifications/>
    </Container>
  )
}
