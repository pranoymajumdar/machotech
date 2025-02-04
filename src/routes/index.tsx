import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import Container from '@/components/ui/container';
import { createFileRoute } from '@tanstack/react-router';

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
