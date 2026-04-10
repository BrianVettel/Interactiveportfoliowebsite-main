import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import eatSmartImage from 'figma:asset/1bcdb8a63688130aade39247fdcfb2983324891d.png';
import niteFlowImage from 'figma:asset/4b67ed0e4e36c2aa71b64577823fcb985f661964.png';

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
  imageQuery?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
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
          UX Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore my recent work and case studies showcasing user-centered design solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                <ImageWithFallback
                  src={project.imageUrl ? project.imageUrl : `https://source.unsplash.com/800x600/?${project.imageQuery}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-purple-600">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center text-purple-600 font-medium group-hover:gap-2 transition-all">
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={selectedProject.imageUrl ? selectedProject.imageUrl : `https://source.unsplash.com/1200x800/?${selectedProject.imageQuery}`}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {(selectedProject.role || selectedProject.timeline || selectedProject.scope) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.role && (
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl">
                        <p className="text-sm text-gray-600 mb-1">Role</p>
                        <p className="font-semibold text-gray-800">{selectedProject.role}</p>
                      </div>
                    )}
                    {selectedProject.timeline && (
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl">
                        <p className="text-sm text-gray-600 mb-1">Timeline</p>
                        <p className="font-semibold text-gray-800">{selectedProject.timeline}</p>
                      </div>
                    )}
                    {selectedProject.scope && (
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl sm:col-span-2">
                        <p className="text-sm text-gray-600 mb-1">Scope</p>
                        <p className="font-semibold text-gray-800">{selectedProject.scope}</p>
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <h4 className="text-xl font-bold mb-2 text-purple-600">The Challenge</h4>
                  <p className="text-gray-700">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-600">The Solution</h4>
                  <p className="text-gray-700">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-purple-600">Impact & Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.impact.map((item, index) => (
                      <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl">
                        <p className="font-medium text-gray-800">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                      >
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