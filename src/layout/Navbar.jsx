import React, { useState, useEffect } from 'react'
import Button from '../components/Button';
import {Menu, X} from "lucide-react"; //1.6k (gzipped:915)


const navLinks=[
    {href:"#about", label:"About"},
    {href:"#projects", label:"Projects"},
    {href:"#testimonials", label:"Testimonials"}
    
    
]
const Navbar = () => {

  const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      setIsScrolled(window.scrollY>50);
    }

    window.addEventListener("scroll",handleScroll);

    return () => window.addEventListener("scroll",handleScroll);
  },[])
  return (
    <header className={`fixed left-0 top-0 right-0 transition-all duraion-500 ${
      isScrolled ? "glass-strong" : "bg-trnasparent py-5"
    }  z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" 
        className="text-xl font-bold tracking-light hover:text-primary">
          A<span className='text-primary'>.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href}
            className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'
            >
              {link.label}
            </a>
          ))}
          </div>
        </div>

        <div className='hidden md:block'>
          <Button size="sm">Contact Me</Button>
        </div>

        <button className='md:hidden p-2 text-foreground cursor-pointer' 
        onClick={()=>setIsMobileMenuOpen((prev)=> !prev)}
        >
          {isMobileMenuOpen ? <X size={24}/>:<Menu size={24}/>}
        </button>
      </nav>
       {/*menu*/}
       {isMobileMenuOpen &&(
      <div className="md:hidden glass-strong animate-fade-in">
        <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href}
            onClick={()=> setIsMobileMenuOpen(false)}
            className='text-lg text-muted-foreground hover:text-foreground py-2'
            >
              {link.label}
            </a>
          ))}

          <Button onClick={()=> setIsMobileMenuOpen(false)}>Contact Me</Button>
        </div>
      </div>
      )}
    </header>
  );
};


export default Navbar