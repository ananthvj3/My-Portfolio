import React from 'react';
import { ArrowUpRight, Github} from 'lucide-react';
import AnimatedBorderButton from '../components/AnimatedBorderButton';

const projects=[
  {
    title:"Ecommerce Website",
    description: "Ecommerce website developed by JavaScript",
    image:"ecom.jpeg",
    tags:["HTML","CSS","JavaScript"],
    link:"https://ananthvj3.github.io/ecommerce/",
    github:"https://github.com/ananthvj3",
  },
    {
    title:"SONY",
    description: "Sony Ecommerce website developed by React",
    image:"sony.jpeg",
    tags:["React","JavaScript","TailwindCSS"],
    link:"https://sony-sigma.vercel.app/",
    github:"https://github.com/ananthvj3",
  },
    {
    title:"Shopixo",
    description: "Shopixo Ecommerce website",
    image:"/shopixo.png",
    tags:["react","JavaScript","NodeJs","MongoDB","Mongoose"],
    link:"http://shopixo-pds6.vercel.app",
    github:"https://github.com/ananthvj3",
  },
    {
    title:"Mini Projects",
    description: " Todo List, Weather App, Calculator",
    image:"/miniproject.png",
    tags:["React","JavaScript","Bootstrap"],
    link:"https://mini-projects-fawn-two.vercel.app",
    github:"https://github.com/ananthvj3",
  },
];

const Projects = () => {
  return (
    <>
        <section id="about" className='py-32 relative overflow-hidden'>
          <div className="absolute top-1/4 right-0 w-96 bg-primary/5 roiunded full blur-3xl"/>
          <div className="absolute bottom-1/4 left-0 w-64 bg-highlight/5 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-6 relative z-10">
            {/* section header*/}
            <div className='text-center mx-auto max-w-3xl mb-16' >
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>featutred Work</span>
              <h2 className='text-4xl md:text-5xl font-bold amt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>projects that  
                <span className='font-serif italic font-normal text-white'> make an impact.</span>
              </h2>
              <p className='text-muted-foreground animate-fade-in animation-delay-200'>Built multiple MERN stack projects such as an e-commerce platform, to-do list, and weather application to strengthen full-stack development skills.
Implemented CRUD operations, API integration, and responsive design using React and Node.js.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects?.map((project, idx)=>(
                <div key={idx} 
                className='group glass rounded-2xl overflow-hidden animatoin-fade-in md:row-span-1 '
                style={{animationDelay:`${(idx+1)*100}`}}
                > 
                 {/*image*/}
                  <div className='relative overflow-hidden aspect-video'>
                    <img src={project.image} 
                    alt={project.title}
                     className='w-full h-full object-cover trnasition-transform duration-700 group-hover:scale-110 cursor-pointer' />
                  <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'/>
                 {/*overlay links*/}
                 <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a href={project.link}
                  className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                  >
                    <ArrowUpRight className='w-5 h-5 '/>
                  </a>
                  <a href={project.github}
                  className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                  >
                    <Github className='w-5 h-5'/>
                  </a>
                 </div>
                  </div>
                  {/* content*/}
                  <div className='p-6 space-y-4'>
                  <div className='flex items-start justify-between'>
                    <h3 className='text-xl font-semibold group-hover:text-primary transition-colors '>{project.title}</h3>
                    <ArrowUpRight 
                    className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1
                    group-hover:translate-y-1 transition-all'
                    />
                  </div>
                  <p className='text-muted-foreground text-sm'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 '>
                    {project?.tags?.map((tag,tagidx)=>(
                    <span key={tagidx}
                    className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>
                      {tag}</span>
                  ))}</div>
                </div>
                </div>
              ))}
            </div>

            <div className='text-center mt-12 animate-fade-in animation-delay-500'>
              <AnimatedBorderButton>
                View All Project
                <ArrowUpRight className='w-5 h-5'/>
              </AnimatedBorderButton>
            </div>


          </div>
        </section>
    </>
  )
}

export default Projects