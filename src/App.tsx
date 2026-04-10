import { useState } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { ProjectsSection } from './components/ProjectsSection';
import { CVSection } from './components/CVSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="projects" className="min-h-screen py-20">
          <ProjectsSection />
        </section>
        
        <section id="cv" className="min-h-screen py-20">
          <CVSection />
        </section>
        
        <section id="certifications" className="min-h-screen py-20">
          <CertificationsSection />
        </section>
        
        <section id="contact" className="min-h-screen py-20">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
