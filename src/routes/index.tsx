import { createFileRoute } from '@tanstack/react-router'
import Container from '@/components/ui/container';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <Container as='main' className='space-y-28'>
      <HeroSection/>
      <AboutSection/>
    </Container>
  )
}
