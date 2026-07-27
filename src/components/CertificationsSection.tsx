import { motion } from 'motion/react';
import { Award, CheckCircle, ExternalLink, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import googleCert from '../assets/4cf081a2f005ed719e55fc890026adb4f2c797a1.png';
import cssSkilvulCert from '../assets/3becc9d88b20577e2c72dd22e0a988f2da56b6ca.png';
import htmlSkilvulCert from '../assets/51d9d61d7595f51d0f9396188423401b12087cb4.png';
import jsSkilvulCert from '../assets/316671cb4389439c3031ac18b0eaa6561214d1b9.png';

interface Certification {
  id: number; title: string; issuer: string; date: string; credentialId: string;
  description: string; skills: string[]; image?: string; verifyUrl?: string;
}

const certifications: Certification[] = [
  { id: 1, title: 'Foundations of User Experience (UX) Design', issuer: 'Google / Coursera', date: 'Jan 18, 2026', credentialId: 'R4082I6D4NXP',
    description: 'Comprehensive program covering the entire UX design process from user research to high-fidelity prototyping, including hands-on projects and portfolio development.',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'UX Design', 'Figma'], image: googleCert,
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/R4082I6D4NXP' },
  { id: 2, title: 'CSS Dasar (Gold)', issuer: 'Skilvul', date: 'Oct 3, 2024', credentialId: 'h36vSvy2THyTAblkU60NMw',
    description: 'Gold level certification from Skilvul awarded upon completion of the CSS Fundamentals course/challenge with a SkillHub score above 66%.',
    skills: ['CSS', 'Styling', 'Responsive Design', 'Web Development'], image: cssSkilvulCert,
    verifyUrl: 'https://badgr.com/public/assertions/h36vSvy2THyTAblkU60NMw?identity__email=fireflymylove19@gmail.com' },
  { id: 3, title: 'HTML Dasar (Gold)', issuer: 'Skilvul', date: 'Sep 19, 2024', credentialId: 'Bvwu_FaOSH2mDWb2COieqg',
    description: 'Gold level certification from Skilvul awarded upon completion of the HTML Fundamentals course/challenge with a SkillHub score above 66%.',
    skills: ['HTML', 'HTML5', 'Semantic Markup', 'Web Development'], image: htmlSkilvulCert,
    verifyUrl: 'https://badgr.com/public/assertions/Bvwu_FaOSH2mDWb2COieqg?identity__email=fireflymylove19@gmail.com' },
  { id: 4, title: 'JavaScript Dasar (Gold)', issuer: 'Skilvul', date: 'Oct 13, 2024', credentialId: '4nhviZcWRXiAR6iS8gBUUg',
    description: 'Gold level certification from Skilvul awarded upon completion of the JavaScript Fundamentals course/challenge with a SkillHub score above 66%.',
    skills: ['JavaScript', 'Programming Fundamentals', 'ES6+', 'Web Development'], image: jsSkilvulCert,
    verifyUrl: 'https://badgr.com/public/assertions/4nhviZcWRXiAR6iS8gBUUg?identity__email=fireflymylove19@gmail.com' }
];

export function CertificationsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-grotesk" style={{ color: '#1A1A2E' }}>
          Certifications & <span style={{ color: '#FF6B35' }}>Credentials</span>
        </h2>
        <p className="text-xl max-w-2xl mx-auto font-grotesk" style={{ color: '#5A6B7A' }}>
          Continuous learning and professional development achievements
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div key={cert.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
              <div className="relative h-48 overflow-hidden bg-sky-gradient-br-deep">
                <ImageWithFallback src={cert.image || ''} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Award className="w-6 h-6" style={{ color: '#FF6B35' }} />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-sm font-semibold mb-2 font-grotesk" style={{ color: '#3B9FD9' }}>{cert.issuer}</div>
                <h3 className="text-xl font-bold mb-3 transition-colors font-grotesk" style={{ color: '#1A1A2E' }}>{cert.title}</h3>
                <div className="flex items-center gap-2 text-sm mb-3" style={{ color: '#5A6B7A' }}>
                  <Calendar size={16} /><span>{cert.date}</span>
                </div>
                <p className="text-sm mb-4 flex-1" style={{ color: '#5A6B7A' }}>{cert.description}</p>
                <div className="mb-4 p-3 bg-sky-cloud rounded-lg" style={{ border: '1px solid rgba(181,216,240,0.3)' }}>
                  <div className="text-xs mb-1" style={{ color: '#5A6B7A' }}>Credential ID</div>
                  <div className="text-sm font-mono font-medium" style={{ color: '#1A1A2E' }}>{cert.credentialId}</div>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-sky-light rounded-full text-xs font-medium" style={{ color: '#3B9FD9' }}>{skill}</span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-sky-cloud rounded-full text-xs font-medium" style={{ color: '#5A6B7A' }}>+{cert.skills.length - 3} more</span>
                  )}
                </div>
                {cert.verifyUrl ? (
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 bg-sky-gradient-br rounded-lg transition-all group/btn"
                    style={{ color: '#3B9FD9', border: '1px solid rgba(181,216,240,0.3)' }}>
                    <CheckCircle size={16} /><span className="font-medium">Verify Credential</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <button className="flex items-center justify-center gap-2 w-full py-2 bg-sky-gradient-br rounded-lg transition-all group/btn"
                    style={{ color: '#3B9FD9', border: '1px solid rgba(181,216,240,0.3)' }}>
                    <CheckCircle size={16} /><span className="font-medium">Verify Credential</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
        className="mt-12 bg-sky-gradient-h rounded-2xl p-8 text-white shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2 font-grotesk">{certifications.length}</div>
            <div style={{ color: '#B5D8F0' }}>Professional Certifications</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 font-grotesk">UX Design</div>
            <div style={{ color: '#B5D8F0' }}>Specialized Focus</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 font-grotesk">Full-Stack</div>
            <div style={{ color: '#B5D8F0' }}>Technical Skills</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}