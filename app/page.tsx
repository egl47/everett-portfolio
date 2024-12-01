import { Metadata } from 'next'
import ContactCard from '@/components/contact-card'

export const metadata: Metadata = {
  title: 'Everett Lee',
  description: 'Welcome to my portfolio!',
}

export default function Home() {
  const headerText = "Hi, my name\'s Everett."
  const descriptionText = `I\'m a Master of Engineering student at Cornell Engineering studying Computer Science with a concentration in Applied AI
                        , where I also completed my undergrad. I\'m passionate about machine learning, software engineering, and data science.
                        Here, you'll find some of my projects and occasional reflections on technology, design, and more.`
  return (
    <main>
      <section id="about" className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          {/* Top Section: Title, Description, and Image */}
          <div className="flex flex-col md:flex-row items-center md:items-center">
            {/* Left Column: Title and Description */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-primary mb-4 pl-8 pr-8">
                {headerText}
              </h1>
              <p className="text-muted-foreground mb-8 max-w-prose pl-8 pr-8">
                {descriptionText}
              </p>
            </div>
            {/* Right Column: Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/profile_mountains.jpeg"
                alt="Description of image"
                className="max-w-full h-auto p-8"
                style={{ maxWidth: '500px', maxHeight: '500px' }}
              />
            </div>
          </div>
          {/* Bottom Section: Contact Form */}
          <div className="flex justify-center mt-12">
            <ContactCard />
          </div>
        </div>
      </section>
    </main>
  )
}

