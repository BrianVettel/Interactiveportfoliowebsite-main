import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Download, Mail, Linkedin, MapPin, Globe } from 'lucide-react';

const academicProjects = [
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
    degree: 'Sarjana [Sistem Informasi]',
    school: 'Universitas Pendidikan Ganesha',
    period: 'Currently enrolled, Semester 6',
    gpa: 'IPK: 3.73',
    details: 'Relevant Coursework: User Experience Design, Web Programming, Software Engineering'
  }
];

const skills = [
  { 
    category: 'Design Tools', 
    items: ['Figma', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Affinity'] 
  },
  { 
    category: 'UX/UI Skills', 
    items: ['Wireframing', 'Prototyping', 'User Research', 'Usability Testing', 'User Personas', 'Journey Mapping', 'Information Architecture'] 
  },
  { 
    category: 'Technical Skills', 
    items: ['HTML', 'CSS', 'JavaScript Basics', 'Responsive Design', 'Accessibility Standards (WCAG)'] 
  },
  { 
    category: 'Soft Skills', 
    items: ['Communication', 'Collaboration', 'Problem Solving', 'Time Management', 'Attention to Detail'] 
  }
];

export function CVSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Curriculum Vitae
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          My professional journey and qualifications
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Download size={20} />
          Download CV (PDF)
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 lg:col-span-1"
        >
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail size={20} className="text-purple-600" />
              <span className="text-sm">brian.arta@students.undiksha.ac.id</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Linkedin size={20} className="text-purple-600" />
              <span className="text-sm">linkedin.com/in/brianarta</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin size={20} className="text-purple-600" />
              <span className="text-sm">Penarukan, Buleleng, Bali</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Globe size={20} className="text-purple-600" />
              <span className="text-sm">portfoliobrian.com</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-bold mb-3">Professional Summary</h4>
            <p className="text-gray-600 text-sm">
              Information Systems student (semester 8) focused on creating creative, user-centered digital solutions. Experienced in User-Centered Design (UCD), Design Thinking, Design Sprint, rapid prototyping, and sketching. Proactive problem-solver who leverages experience and relevant technology to create solutions. Current mission is to continue exploring the UX/UI field focused on solving real problems quickly. Collaborative, communicative, and contributes to enjoyable team dynamics.
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Academic Projects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-purple-600" size={28} />
              <h3 className="text-2xl font-bold">Academic & Personal Projects</h3>
            </div>
            <div className="space-y-6">
              {academicProjects.map((project, index) => (
                <div key={index} className="border-l-4 border-purple-600 pl-4">
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 text-gray-600 mb-2">
                    <span className="font-medium">{project.type}</span>
                    <span>•</span>
                    <span>{project.period}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <ul className="space-y-1 mb-3">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="text-purple-600 mr-2">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-50 rounded text-xs font-medium text-purple-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <div className="flex flex-wrap gap-2 text-gray-600 mb-2">
                    <span className="font-medium">{edu.school}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-700">{edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-purple-600" size={28} />
              <h3 className="text-2xl font-bold">Skills & Expertise</h3>
            </div>
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-bold mb-2 text-purple-600">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 rounded-full text-sm font-medium text-gray-700"
                      >
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