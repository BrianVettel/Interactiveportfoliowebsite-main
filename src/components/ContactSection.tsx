import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-grotesk" style={{ color: '#1A1A2E' }}>
          Let's Work <span style={{ color: '#FF6B35' }}>Together</span>
        </h2>
        <p className="text-xl max-w-2xl mx-auto font-grotesk" style={{ color: '#5A6B7A' }}>
          Have a project in mind? I'd love to hear about it.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Email Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="bg-sky-gradient-card rounded-2xl shadow-lg p-8 text-white">
          <Mail className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2 font-grotesk">Email Me</h3>
          <p className="mb-4" style={{ color: '#B5D8F0' }}>Drop me a line and I'll get back to you within 24 hours.</p>
          <a href="mailto:brian.arta@student.undiksha.ac.id" className="inline-block text-lg font-medium hover:underline">
            brian.arta@student.undiksha.ac.id
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
          <h3 className="text-2xl font-bold mb-6 font-grotesk" style={{ color: '#1A1A2E' }}>Connect With Me</h3>
          <div className="space-y-4">
            {[
              { href: 'https://linkedin.com/in/brianarta', icon: <Linkedin className="text-white" size={24} />, bg: '#3B9FD9', title: 'LinkedIn', sub: 'Connect professionally' },
              { href: 'https://github.com/BrianVettel', icon: <Github className="text-white" size={24} />, bg: '#1A1A2E', title: 'GitHub', sub: 'View my code & projects' },
              { href: 'https://www.instagram.com/zephyrv8_?igsh=MXkxNW95enV3YXNhYQ==', icon: <Instagram className="text-white" size={24} />, bg: '#FF6B35', title: 'Instagram', sub: 'Follow for design inspiration' },
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-sky-cloud rounded-lg transition-all group"
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E8F4FD'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F0F7FC'}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: social.bg }}>
                  {social.icon}
                </div>
                <div>
                  <div className="font-medium" style={{ color: '#1A1A2E' }}>{social.title}</div>
                  <div className="text-sm" style={{ color: '#5A6B7A' }}>{social.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
          <h3 className="text-xl font-bold mb-4 font-grotesk" style={{ color: '#1A1A2E' }}>Availability</h3>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span style={{ color: '#1A1A2E' }}>Available for freelance projects</span>
          </div>
          <p className="mt-4" style={{ color: '#5A6B7A' }}>
            I'm currently open to new opportunities and exciting collaborations. Let's create something amazing together!
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
        className="mt-16 pt-8 text-center" style={{ borderTop: '1px solid #B5D8F0', color: '#5A6B7A' }}>
        <p>© 2026 Brian Arta. All rights reserved.</p>
      </motion.div>
    </div>
  );
}