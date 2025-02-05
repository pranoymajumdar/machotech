import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  LucideArrowRight,
  LucideFlag,
  LucideLightbulb,
  LucideTarget,
  LucideUsers,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const Route = createFileRoute('/about-us')({
  component: AboutComponent,
})

const milestones = [
  {
    year: '1995',
    title: 'Company Founded',
    description: 'Started with a vision to revolutionize the bandsaw industry',
  },
  {
    year: '2000',
    title: 'First Export',
    description: 'Expanded operations to international markets',
  },
  {
    year: '2005',
    title: 'ISO Certification',
    description: 'Achieved ISO 9001:2015 certification',
  },
  {
    year: '2010',
    title: 'R&D Center',
    description: 'Established state-of-the-art research facility',
  },
  {
    year: '2015',
    title: 'Digital Innovation',
    description: 'Introduced smart manufacturing solutions',
  },
  {
    year: '2020',
    title: 'Global Presence',
    description: 'Expanded to 50+ countries worldwide',
  },
]

const values = [
  {
    icon: <LucideTarget className="w-6 h-6" />,
    title: 'Excellence',
    description: 'Striving for perfection in every machine we produce',
  },
  {
    icon: <LucideLightbulb className="w-6 h-6" />,
    title: 'Innovation',
    description: 'Continuously improving our technology and processes',
  },
  {
    icon: <LucideUsers className="w-6 h-6" />,
    title: 'Customer Focus',
    description: "Putting our customers' needs at the heart of everything",
  },
]

function AboutComponent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <Container className="relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-light tracking-tight"
            >
              About <span className="text-primary font-normal">mechotech</span>
            </motion.h1>
            <motion.div
              variants={fadeIn}
              className="h-1 w-20 bg-primary rounded mx-auto"
            />
            <motion.p
              variants={fadeIn}
              className="text-lg text-muted-foreground"
            >
              Leading manufacturer of precision bandsaw machines, delivering
              excellence since 1995
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 relative">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 text-primary">
                <LucideTarget className="w-5 h-5" />
                <span className="text-sm font-medium">Our Vision</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                To be the global leader in bandsaw technology
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We aim to revolutionize the metalworking industry through
                innovative solutions and unmatched precision in our machines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 text-primary">
                <LucideFlag className="w-5 h-5" />
                <span className="text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Empowering industries with cutting-edge technology
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide innovative, reliable, and efficient bandsaw solutions
                that enhance our customers' productivity and success.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl font-semibold">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in delivering excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl border hover:border-primary/50 transition-colors group"
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl font-semibold">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of our growth and achievements
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 text-right">
                    <div className="space-y-2">
                      <div className="text-primary font-semibold">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-medium">{milestone.title}</h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-primary relative z-10" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl font-semibold">Ready to Work Together?</h2>
            <p className="text-muted-foreground">
              Let's discuss how our bandsaw machines can enhance your operations
            </p>
            <Button size="lg" className="group">
              Contact Us
              <LucideArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
