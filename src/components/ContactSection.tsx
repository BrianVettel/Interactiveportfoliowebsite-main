import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

export function ContactSection() {
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
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it and explore how we can collaborate.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white"
        >
          <Mail className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Email Me</h3>
          <p className="text-purple-100 mb-4">
            Prefer email? Drop me a line and I'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:brian.arta@student.undiksha.ac.id"
            className="inline-block text-lg font-medium hover:underline"
          >
            brian.arta@student.undiksha.ac.id
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
          <div className="space-y-4">
            <a
              href="https://linkedin.com/in/brianarta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="text-white" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-900">LinkedIn</div>
                <div className="text-sm text-gray-600">Connect professionally</div>
              </div>
            </a>

            <a
              href="https://github.com/BrianVettel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-all group"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Github className="text-white" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-900">GitHub</div>
                <div className="text-sm text-gray-600">View my code & projects</div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/zephyrv8_?igsh=MXkxNW95enV3YXNhYQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-all group"
            >
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="text-white" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-900">Instagram</div>
                <div className="text-sm text-gray-600">Follow for design inspiration</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-xl font-bold mb-4">Availability</h3>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700">Available for freelance projects</span>
          </div>
          <p className="mt-4 text-gray-600">
            I'm currently open to new opportunities and exciting collaborations. Let's create something amazing together!
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600"
      >
        <p>© 2026 UX Designer Portfolio. All rights reserved.</p>
      </motion.div>
    </div>
  );
}