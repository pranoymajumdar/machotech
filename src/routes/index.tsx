import AboutSection from '@/components/Home/AboutSection';
import HeroSection from '@/components/Home/HeroSection';
import OurProducts from '@/components/Home/OurProducts';
import KeyFeatures from '@/components/Home/KeyFeatures';
import OurExpertise from '@/components/Home/OurExpertise';
import Testimonials from '@/components/Home/Testimonials';
import Container from '@/components/ui/container';
import { createFileRoute } from '@tanstack/react-router';
import Certifications from '@/components/Home/Certifications';
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
