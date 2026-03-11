import React, { useState } from 'react'
import Button from '../components/Button';
import {Mail, Phone, MapPin, Send} from 'lucide-react';
import emailjs from "@emailjs/browser"

const  contactInfo=[
  {
    icon: Mail,
    label: "Email",
    value: "Ananth@gmail.com",
    href:"mailto:Ananthvj09@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+9360206402",
    href: "tel: 9360206400",
  },
  {
    icon:MapPin,
    label: "Location",
    value: "Dindigul, Tamilnadu, IN",
    href:"#",
  }
]
const Contact = () => {
  const [formData, setFormData] = useState({
      name:"",
      email:"",
      message:""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
      type: null,
      message:"",
    });

    const handleSubmit = async(e)=>{
      e.preventDefault();
      setIsLoading(true);
      setSubmitStatus({type: null, message:""});
      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if(!serviceId || !templateId || !publicKey){
          throw new Error(
            "EmailJS configuration is missing. Please check your evironment variable."
          );
        }

        await emailjs.send(serviceId. templateId, {
          name:formData.name ,
          email: formData.email,
          message: formData.message,
        }, publicKey);

        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back you soon."
        });
        setFormData({name: "", email:"", message:""});
        
      } catch (error) {
        type: "error"
        
        
      } finally{
        setIsLoading(false);
      }
    }
  return (
    

    <>
    <section iid="contact" className='py-32 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full'>
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl'/>
      <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'/>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-tight">
          Get In Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
          Let's build{" "}
          <span className='font-serif italic font-normal text-white'>
            something great
          </span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
          have a project in mind? I'd love tp hear about. Send me a message
          and let's discuss how we can work together.
        </p>
      </div>

      <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
        <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name' className='block text-sm font-medium mb-2' >Name</label>
              <input id="name"  type='text' 
              required
              value={formData.name}
              onChange={(e)=> setFormData({...formData, name:e.target.value})}
              placeholder='Your name...'
               className='w-full px-4 py-3 bg-surface rounded-xl border border-border outline-none focus:border-primary focus:ring-primary transition-all'
               />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium mb-2'  >Email</label>
              <input type="email" 
              required
              value={formData.email}
              onChange={(e)=> setFormData({...formData, email:e.target.value})}
              placeholder='Your@gmail.com'
              className='w-full px-4 py-3 bg-surface rounded-xl border border-border outline-none focus:border-primary focus:ring-primary transition-all'
              />
            </div>

            <div>
              <label htmlFor='message' className='block text-sm font-medium mb-2' >Message</label>
              <textarea  type="text"
              rows={5}
              required
              value={formData.message}
              onChange={(e)=> setFormData({...formData, message:e.target.value})}
              placeholder='Your message...'
              className='w-full px-4 py-3 bg-surface rounded-xl border border-border outline-none focus:border-primary focus:ring-primary transition-all resize-none'
              />
            </div>
            <Button classname="w-full" type="submit" size='lg' 
            disabled={isLoading}
            >
            {isLoading ? (
              <>
              Sending...
              
              </>

            ):(
              <>
              Send Messsage
              <Send className='w-5 h-5'/>
              </>

            )
          }
            
            </Button>
              
          </form>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Contact