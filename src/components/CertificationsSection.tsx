import { motion } from 'motion/react';
import { Award, CheckCircle, ExternalLink, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import googleCert from 'figma:asset/4cf081a2f005ed719e55fc890026adb4f2c797a1.png';
import cssSkilvulCert from 'figma:asset/3becc9d88b20577e2c72dd22e0a988f2da56b6ca.png';
import htmlSkilvulCert from 'figma:asset/51d9d61d7595f51d0f9396188423401b12087cb4.png';
import jsSkilvulCert from 'figma:asset/316671cb4389439c3031ac18b0eaa6561214d1b9.png';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  imageQuery?: string;
  image?: string;
  verifyUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google / Coursera',
    date: 'Jan 18, 2026',
    credentialId: 'R4082I6D4NXP',
    description: 'Comprehensive program covering the entire UX design process from user research to high-fidelity prototyping, including hands-on projects and portfolio development.',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'UX Design', 'Figma'],
    image: googleCert,
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/R4082I6D4NXP'
  },
  {
    id: 2,
    title: 'CSS Dasar (Gold)',
    issuer: 'Skilvul',
    date: 'Oct 3, 2024',
    credentialId: 'h36vSvy2THyTAblkU60NMw',
    description: 'Gold level certification from Skilvul awarded upon completion of the CSS Fundamentals course/challenge with a SkillHub score above 66%.',
    skills: ['CSS', 'Styling', 'Responsive Design', 'Web Development'],
    image: cssSkilvulCert,
    verifyUrl: 'https://badgr.com/public/assertions/h36vSvy2THyTAblkU60NMw?identity__email=fireflymylove19@gmail.com'
  },
  {
    id: 3,
    title: 'HTML Dasar (Gold)',
    issuer: 'Skilvul',
    date: 'Sep 19, 2024',
    credentialId: 'Bvwu_FaOSH2mDWb2COieqg',
    description: 'Gold level certification from Skilvul awarded upon completion of the HTML Fundamentals course/challenge with a SkillHub score above 66%.',
    skills: ['HTML', 'HTML5', 'Semantic Markup', 'Web Development'],
    image: htmlSkilvulCert,
    verifyUrl: 'https://badgr.com/public/assertions/Bvwu_FaOSH2mDWb2COieqg?identity__email=fireflymylove19@gmail.com'
  },
  {
    id: 4,
    title: 'JavaScript Dasar (Gold)',
    issuer: 'Skilvul',
    date: 'Oct 13, 2024',
    credentialId: '4nhviZcWRXiAR6iS8gBUUg',
    description: 'Gold level certification from Skilvul awarded upon completion of the JavaScript Fundamentals course/challenge with a SkillHub score above 66%.',
    skills: ['JavaScript', 'Programming Fundamentals', 'ES6+', 'Web Development'],
    image: jsSkilvulCert,
    verifyUrl: 'https://badgr.com/public/assertions/4nhviZcWRXiAR6iS8gBUUg?identity__email=fireflymylove19@gmail.com'
  }
];

export function CertificationsSection() {
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
          Certifications & Credentials
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Continuous learning and professional development achievements
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                {cert.image ? (
                  <ImageWithFallback
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <ImageWithFallback
                    src={`https://source.unsplash.com/600x400/?${cert.imageQuery}`}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                {/* Issuer */}
                <div className="text-sm font-semibold text-purple-600 mb-2">
                  {cert.issuer}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                  {cert.title}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {cert.description}
                </p>

                {/* Credential ID */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">Credential ID</div>
                  <div className="text-sm font-mono font-medium text-gray-700">
                    {cert.credentialId}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Verify Link */}
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all group/btn"
                  >
                    <CheckCircle size={16} />
                    <span className="font-medium">Verify Credential</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <button className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all group/btn">
                    <CheckCircle size={16} />
                    <span className="font-medium">Verify Credential</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">{certifications.length}</div>
            <div className="text-purple-100">Professional Certifications</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">UX Design</div>
            <div className="text-purple-100">Specialized Focus</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Web Dev</div>
            <div className="text-purple-100">Technical Skills</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}