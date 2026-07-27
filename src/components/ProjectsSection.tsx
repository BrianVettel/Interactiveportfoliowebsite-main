import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Smartphone, Code2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import eatSmartImage from '../assets/1bcdb8a63688130aade39247fdcfb2983324891d.png';
import niteFlowImage from '../assets/4b67ed0e4e36c2aa71b64577823fcb985f661964.png';
import hcsMainImage from '../assets/HomeCleaningService_Main.png';
import hcsChooserImage from '../assets/HomeCleaningService_Choosecleaner.png';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  role?: string;
  timeline?: string;
  scope?: string;
  challenge: string;
  solution: string;
  impact: string[];
  tools: string[];
  imageUrl?: string;
  imageUrl2?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Home Cleaning Service',
    category: 'Mobile Development',
    description: 'Platform mobile untuk memesan jasa pembersihan rumah dengan fitur transparansi harga dan penjadwalan real-time',
    role: 'Full-Stack Developer',
    timeline: 'May 22, 2026 - Present',
    scope: 'Mobile App Development, Backend API, UI/UX Design',
    challenge: 'Berdasarkan ulasan aplikasi serupa, keluhan terbesar pengguna adalah harga yang tidak transparan (ada biaya tak terduga saat pembersih datang) dan sulitnya memilih waktu yang fleksibel.',
    solution: 'Fitur Price Transparency Calculator: Aplikasi kami menampilkan rincian biaya secara breakdown di awal berdasarkan luas ruangan/jumlah kamar, sehingga tidak ada biaya siluman. Fitur Real-time Schedule Picker: Pengguna bisa melihat langsung kalender jadwal pembersih yang kosong secara real-time untuk menghindari bentrok atau pembatalan sepihak.',
    impact: [
      'Berhasil membangun MVP yang menyelesaikan 2 masalah utama pengguna aplikasi kompetitor',
      'Fitur kalkulator harga & penjadwalan diuji 100% sukses via Black-Box Testing',
      'Desain antarmuka dinilai lebih intuitif & transparan dibandingkan aplikasi serupa'
    ],
    tools: ['Flutter', 'Dart', 'Golang', 'REST API', 'Figma'],
    imageUrl: hcsMainImage,
    imageUrl2: hcsChooserImage
  },
  {
    id: 2,
    title: 'EatSmart Mobile App',
    category: 'Mobile UX',
    description: 'Intelligent Nutrition & Task Management Assistant',
    role: 'UI/UX Designer',
    timeline: '3 months',
    challenge: 'Many people want to live healthy and manage their diets, but often find it difficult because the manual process of recording nutrition is time-consuming and boring. Data Complexity: Users find it difficult to accurately calculate the calories and nutrients from local/homemade foods. Lack of Motivation: Without reminders or engaging progress visualizations, users tend to stop using health apps within days. Task Fragmentation: Users need an assistant that not only logs meals but also integrates daily schedules with their health goals.',
    solution: 'EatSmart is presented as an AI-based smart solution that simplifies nutrition management. Smart Scanning: A camera-based food scanning feature that instantly provides nutritional information without complex manual input. Integrated Task Management: Connecting daily schedules with optimal meal times to ensure users stay hydrated and nourished amidst their busy schedules. Gamified Dashboard: An intuitive visual progress display using color graphs and daily achievements to keep users motivated.',
    impact: [
      '60% faster food recording compared to manual input',
      'Increased engagement with clean and modern interface',
      'Enhanced user clarity with easy-to-understand data visualization'
    ],
    tools: ['Figma', 'FigJam', 'Maze'],
    imageUrl: eatSmartImage
  },
  {
    id: 3,
    title: 'NiteFlow: Intelligent Task Management & Wellness Assistant',
    category: 'Mobile UX',
    description: 'A human-centered productivity app that balances task management with mental well-being',
    role: 'UI/UX Designer',
    scope: 'Design Thinking, Wireframing, High-Fidelity Design',
    challenge: 'In today\'s fast-paced digital age, many young professionals and students experience the phenomenon of "revenge bedtime procrastination" or mental fatigue due to poor task management. Main problems include: Burnout - Users feel overwhelmed by an endless to-do list without any breaks. Poor Sleep Quality - Using productivity apps at night often increases stress instead of calming it. Lack of Balance - Typical task applications only focus on output, without considering the mental health or well-being of their users.',
    solution: 'Based on the Design Thinking process, NiteFlow is designed to balance productivity with mental well-being through a more human-centered approach. Focus & Flow Mode: A task management feature that automatically adjusts the difficulty level of tasks based on the user\'s remaining energy at the end of the day. Dark-First Design: An interface optimized for nighttime use with a calming color palette (Deep Blue & Purple) to reduce eye strain. Wellness Integration: NiteFlow not only reminds you of deadlines but also suggests short deep breathing or meditation sessions when it detects high workloads. Smart Prioritization: Using percentage visualizations and clean graphs to help users see progress without feeling overwhelmed.',
    impact: [
      '40% decrease in stress levels due to smart prioritizing',
      'Better transition to rest mode with dark and calming visual design',
      'Increased app usage loyalty with integrated wellness elements'
    ],
    tools: ['Figma', 'FigJam'],
    imageUrl: niteFlowImage
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<'main' | 'secondary'>('main');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-grotesk" style={{ color: '#1A1A2E' }}>
          Featured <span style={{ color: '#FF6B35' }}>Projects</span>
        </h2>
        <p className="text-xl max-w-2xl mx-auto font-grotesk" style={{ color: '#5A6B7A' }}>
          Explore my recent work and case studies showcasing user-centered design solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={() => { setSelectedProject(project); setActiveImage('main'); }}
          >
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
              style={{ border: '1px solid rgba(181,216,240,0.3)' }}
            >
              <div className="relative h-64 overflow-hidden bg-sky-gradient-br-deep">
                <ImageWithFallback src={project.imageUrl || ''} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium font-grotesk" style={{ color: '#3B9FD9' }}>
                  {project.category}
                </div>
                {project.category === 'Mobile Development' && (
                  <div className="absolute top-4 left-4 flex gap-1">
                    <span className="px-2 py-1 backdrop-blur-sm rounded-full text-xs font-medium text-white flex items-center gap-1" style={{ backgroundColor: 'rgba(255,107,53,0.9)' }}>
                      <Smartphone size={12} /> Flutter
                    </span>
                    <span className="px-2 py-1 backdrop-blur-sm rounded-full text-xs font-medium text-white flex items-center gap-1" style={{ backgroundColor: 'rgba(59,159,217,0.9)' }}>
                      <Code2 size={12} /> Golang
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 transition-colors font-grotesk" style={{ color: '#1A1A2E' }}>{project.title}</h3>
                <p className="mb-4 line-clamp-2 flex-1" style={{ color: '#5A6B7A' }}>{project.description}</p>
                <div className="flex items-center font-medium group-hover:gap-2 transition-all font-grotesk" style={{ color: '#FF6B35' }}>
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" style={{ border: '1px solid rgba(181,216,240,0.3)' }} onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white p-6 flex justify-between items-center" style={{ borderBottom: '1px solid #B5D8F0' }}>
                <h3 className="text-2xl font-bold font-grotesk" style={{ color: '#1A1A2E' }}>{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="p-2 rounded-full transition-colors" style={{ backgroundColor: 'transparent' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E8F4FD'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                {/* Image */}
                <div className="relative rounded-xl overflow-hidden">
                  {selectedProject.imageUrl2 ? (
                    <div>
                      <div className="relative h-80">
                        <ImageWithFallback src={activeImage === 'main' ? selectedProject.imageUrl! : selectedProject.imageUrl2} alt={selectedProject.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex gap-3 mt-3">
                        <button onClick={() => setActiveImage('main')} className="flex-1 h-20 rounded-lg overflow-hidden transition-all" style={{ border: `2px solid ${activeImage === 'main' ? '#FF6B35' : '#B5D8F0'}`, opacity: activeImage === 'main' ? 1 : 0.6 }}>
                          <ImageWithFallback src={selectedProject.imageUrl!} alt="Main" className="w-full h-full object-cover" />
                        </button>
                        <button onClick={() => setActiveImage('secondary')} className="flex-1 h-20 rounded-lg overflow-hidden transition-all" style={{ border: `2px solid ${activeImage === 'secondary' ? '#FF6B35' : '#B5D8F0'}`, opacity: activeImage === 'secondary' ? 1 : 0.6 }}>
                          <ImageWithFallback src={selectedProject.imageUrl2} alt="Secondary" className="w-full h-full object-cover" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-80">
                      <ImageWithFallback src={selectedProject.imageUrl || ''} alt={selectedProject.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                {/* Meta */}
                {(selectedProject.role || selectedProject.timeline || selectedProject.scope) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.role && (
                      <div className="p-4 rounded-xl bg-sky-gradient-br" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
                        <p className="text-sm mb-1" style={{ color: '#5A6B7A' }}>Role</p>
                        <p className="font-semibold" style={{ color: '#1A1A2E' }}>{selectedProject.role}</p>
                      </div>
                    )}
                    {selectedProject.timeline && (
                      <div className="p-4 rounded-xl bg-sky-gradient-br" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
                        <p className="text-sm mb-1" style={{ color: '#5A6B7A' }}>Timeline</p>
                        <p className="font-semibold" style={{ color: '#1A1A2E' }}>{selectedProject.timeline}</p>
                      </div>
                    )}
                    {selectedProject.scope && (
                      <div className="p-4 rounded-xl bg-sky-gradient-br sm:col-span-2" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
                        <p className="text-sm mb-1" style={{ color: '#5A6B7A' }}>Scope</p>
                        <p className="font-semibold" style={{ color: '#1A1A2E' }}>{selectedProject.scope}</p>
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <h4 className="text-xl font-bold mb-2 font-grotesk" style={{ color: '#FF6B35' }}>The Challenge</h4>
                  <p style={{ color: '#1A1A2E' }}>{selectedProject.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 font-grotesk" style={{ color: '#3B9FD9' }}>The Solution</h4>
                  <p style={{ color: '#1A1A2E' }}>{selectedProject.solution}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 font-grotesk" style={{ color: '#FF6B35' }}>Impact & Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.impact.map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-sky-gradient-br" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
                        <p className="font-medium" style={{ color: '#1A1A2E' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 font-grotesk" style={{ color: '#1A1A2E' }}>Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, i) => (
                      <span key={i} className="px-4 py-2 bg-sky-light rounded-full text-sm font-medium" style={{ color: '#3B9FD9', border: '1px solid rgba(181,216,240,0.5)' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}