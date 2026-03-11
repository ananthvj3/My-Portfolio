import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'
import React from 'react'

const highLights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalabe code that stands the test of time."
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experience."
  },
  {
    icon: Users,
    title: "Collabration",
    description:
      "Working closely with teams to bring ideas to life."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices."
  },
];

const About = () => {

  return (
    <>
      <section id="" className='py-32 relative overflow-hidden'>
        <div className='container mx-auto px-6 relative z-10 '>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* left column*/}
            <div className='space-y-8'>
              <div className='animate-fade-in'>
                <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                  About Me
                </span>
              </div>

              <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
                Building the future,
                <span className='font-serif italic font-normal text-white'>one component at a time.</span>
              </h2>

              <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
                <p>
                  I'm a passionate MERN Stack Developer and a recent graduate, focused on
                  building modern, responsive, and user-friendly web applications.
                  I enjoy turning ideas into real-world projects using clean and efficient code.
                </p>

                <p>
                  I work with React, Node.js, Express, and MongoDB, and I have hands-on
                  experience building full-stack projects like authentication systems,
                  CRUD applications, and REST APIs. I continuously improve my skills by
                  learning best practices and working on personal projects.
                </p>

                <p>
                  As a fresher, I’m highly motivated to learn, adapt, and grow in a
                  professional environment. I’m currently looking for an opportunity where
                  I can contribute, learn from experienced developers, and build impactful
                  software solutions.
                </p>

              </div>
              <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-200'>
                <p className='tex-lg font-medium italic text-foreground'> My technical skills include React, Node.js, Express, and MongoDB, with
                  practical experience in building full-stack applications, REST APIs,
                  and responsive UIs using modern tools like Tailwind CSS.</p>
              </div>
            </div>

            {/*right*/}
            <div className="grid sm:grid-cols-2 gap-6">
              {highLights.map((item,idx)=>(
                <div key={idx} className='glass p-6 rounded-2xl animate-fade-in'
                style={{animationDelay:`${(idx + 1)*100}ms`}}
                >
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                  <item.icon className='w-6 h-6 text-primary'/>
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About