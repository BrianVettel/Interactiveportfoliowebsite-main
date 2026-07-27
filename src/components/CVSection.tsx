import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Download, Mail, Linkedin, MapPin, Globe } from 'lucide-react';
import cvPdf from '../assets/CV Dewa Putu Brian Arta Winata.pdf';

const academicProjects = [
  {
    title: 'Home Cleaning Service - Mobile App',
    type: 'Full-Stack Development Project',
    period: 'May 2026 - Present',
    description: 'Platform mobile untuk memesan jasa pembersihan rumah dengan fitur transparansi harga dan penjadwalan real-time. Built with Flutter (frontend) and Golang (backend).',
    achievements: [
      'Developed Price Transparency Calculator with real-time cost breakdown',
      'Built Real-time Schedule Picker for flexible cleaner booking',
      'Achieved 100% success rate in Black-Box Testing for core features',
      'Designed intuitive and transparent UI validated by internal respondents'
    ],
    tools: ['Flutter', 'Dart', 'Golang', 'REST API', 'Figma']
  },
  {
    title: 'EatSmart - Smart Food Catering Application',
    type: 'UI/UX Design Competition Project',
    period: 'December 2025',
    description: 'AI-based smart solution that simplifies nutrition management with camera-based food scanning.',
    achievements: [
      'Developed smart scanning feature for instant nutritional information',
      'Integrated task management with optimal meal scheduling',
      'Created gamified dashboard with color graphs and daily achievements'
    ],
    tools: ['Figma', 'FigJam', 'Maze', 'Google Form', 'Notion']
  },
  {
    title: 'NiteFlow - Task Management & Wellness System',
    type: 'Project (UX Design - Semester Management User Experience Design)',
    period: 'December 2025',
    description: 'Human-centered productivity app balancing task management with mental well-being.',
    achievements: [
      'Designed Focus & Flow Mode with adaptive task difficulty',
      'Implemented dark-first design for nighttime use',
      'Integrated wellness features with deep breathing and meditation',
      'Created smart prioritization with percentage visualizations'
    ],
    tools: ['Figma', 'FigJam']
  }
];

const education = [
  {
    degree: 'S1 Sistem Informasi',
    school: 'Universitas Pendidikan Ganesha',
    period: 'Semester 6',
    gpa: 'IPK: 3.79 / 4.00',
    details: 'Mata Kuliah Relevan: Pemrograman Web, Basis Data, Rekayasa Perangkat Lunak, Pemrograman Mobile, Jaringan Komputer, Pemrograman Berorientasi Objek'
  }
];

const skills = [
  { category: 'Design Tools', items: ['Figma', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Affinity'] },
  { category: 'UX/UI Skills', items: ['Wireframing', 'Prototyping', 'User Research', 'Usability Testing', 'User Personas', 'Journey Mapping', 'Information Architecture'] },
  { category: 'Technical Skills', items: ['Flutter', 'Dart', 'Golang', 'REST API', 'HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Accessibility Standards (WCAG)'] },
  { category: 'Soft Skills', items: ['Communication', 'Collaboration', 'Problem Solving', 'Time Management', 'Attention to Detail'] }
];

export function CVSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-grotesk" style={{ color: '#1A1A2E' }}>
          Curriculum <span style={{ color: '#FF6B35' }}>Vitae</span>
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-6 font-grotesk" style={{ color: '#5A6B7A' }}>My professional journey and qualifications</p>
        <a
          href={cvPdf}
          download="CV Dewa Putu Brian Arta Winata.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-grotesk cursor-pointer"
          style={{ backgroundColor: '#FF6B35' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E85D2C'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF6B35'}
        >
          <Download size={20} /> Download CV (PDF)
        </a>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 lg:col-span-1" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
          <h3 className="text-xl font-bold mb-4 font-grotesk" style={{ color: '#1A1A2E' }}>Contact Information</h3>
          <div className="space-y-3">
            {[
              { icon: <Mail size={20} />, text: 'brian.arta@students.undiksha.ac.id' },
              { icon: <Linkedin size={20} />, text: 'linkedin.com/in/brianarta' },
              { icon: <MapPin size={20} />, text: 'Penarukan, Buleleng, Bali' },
              { icon: <Globe size={20} />, text: 'portfoliobrian.com' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3" style={{ color: '#5A6B7A' }}>
                <span style={{ color: '#3B9FD9' }}>{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6" style={{ borderTop: '1px solid #B5D8F0' }}>
            <h4 className="font-bold mb-3 font-grotesk" style={{ color: '#1A1A2E' }}>Professional Summary</h4>
            <p className="text-sm" style={{ color: '#5A6B7A' }}>
              Information Systems student (semester 6) focused on creating creative, user-centered digital solutions. Experienced in User-Centered Design (UCD), Design Thinking, Design Sprint, rapid prototyping, and sketching. Proactive problem-solver who leverages experience and relevant technology to create solutions. Current mission is to continue exploring the UX/UI field focused on solving real problems quickly. Collaborative, communicative, and contributes to enjoyable team dynamics.
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Projects */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={28} style={{ color: '#FF6B35' }} />
              <h3 className="text-2xl font-bold font-grotesk" style={{ color: '#1A1A2E' }}>Academic & Personal Projects</h3>
            </div>
            <div className="space-y-6">
              {academicProjects.map((project, index) => (
                <div key={index} className="pl-4" style={{ borderLeft: '4px solid #FF6B35' }}>
                  <h4 className="text-xl font-bold font-grotesk" style={{ color: '#1A1A2E' }}>{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-2" style={{ color: '#5A6B7A' }}>
                    <span className="font-medium">{project.type}</span><span>•</span><span>{project.period}</span>
                  </div>
                  <p className="mb-3" style={{ color: '#1A1A2E' }}>{project.description}</p>
                  <ul className="space-y-1 mb-3">
                    {project.achievements.map((a, i) => (
                      <li key={i} className="text-sm flex items-start" style={{ color: '#5A6B7A' }}>
                        <span className="mr-2" style={{ color: '#FF6B35' }}>▹</span>{a}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-1 bg-sky-light rounded text-xs font-medium" style={{ color: '#3B9FD9' }}>{tool}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={28} style={{ color: '#3B9FD9' }} />
              <h3 className="text-2xl font-bold font-grotesk" style={{ color: '#1A1A2E' }}>Education</h3>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="pl-4" style={{ borderLeft: '4px solid #3B9FD9' }}>
                <h4 className="text-xl font-bold font-grotesk" style={{ color: '#1A1A2E' }}>{edu.degree}</h4>
                <div className="text-base font-semibold font-grotesk mt-0.5" style={{ color: '#3B9FD9' }}>{edu.school}</div>
                <div className="flex flex-wrap gap-2 my-1 text-sm font-medium" style={{ color: '#5A6B7A' }}>
                  <span>{edu.period}</span><span>•</span><span>{edu.gpa}</span>
                </div>
                <p className="text-sm mt-2" style={{ color: '#1A1A2E' }}>{edu.details}</p>
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Award size={28} style={{ color: '#FF6B35' }} />
              <h3 className="text-2xl font-bold font-grotesk" style={{ color: '#1A1A2E' }}>Skills & Expertise</h3>
            </div>
            <div className="space-y-4">
              {skills.map((sg, index) => (
                <div key={index}>
                  <h4 className="font-bold mb-2 font-grotesk" style={{ color: '#3B9FD9' }}>{sg.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {sg.items.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-sky-gradient-br rounded-full text-sm font-medium" style={{ color: '#1A1A2E', border: '1px solid rgba(181,216,240,0.5)' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}