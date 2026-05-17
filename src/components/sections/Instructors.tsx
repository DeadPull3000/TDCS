import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const instructors = [
  {
    name: 'Vini Desai',
    specialties: ['Psychology', 'Philosophy'],
    email: 'vini.desai_ug25@ashoka.edu.in',
    bio: 'Psychology major with a minor in Philosophy. Passionate about understanding human behavior and ethical frameworks.',
  },
  {
    name: 'Hitova Assumi',
    specialties: ['International Relations', 'China Studies'],
    email: 'hitova.assumi_ug2023@ashoka.edu.in',
    bio: 'International Relations major with China Studies minor. My presentations are great and so am I.',
  },
  {
    name: 'Sampurna Pandey',
    specialties: ['Computer Science', 'Economics'],
    email: 'sampurna.pandey_ug2023@ashoka.edu.in',
    bio: 'Computer Science major with Economics minor. Interested in the intersection of technology and economic systems.',
  },
  {
    name: 'Riya Arora',
    specialties: ['Physics', 'Mathematics'],
    email: 'ritya.arora_ug2023@ashoka.edu.in',
    bio: 'Physics major with Mathematics minor. Passionate about exploring the fundamental laws of the universe.',
  },
  {
    name: 'Vaishnavi Jha',
    specialties: ['Computer Science', 'Mathematics', 'Astronomy'],
    email: 'vaishnavi.jha_ug2025@ashoka.edu.in',
    bio: 'Interdisciplinary major in Computer Science and Mathematics with a minor in Astronomy. Fascinated by the intersection of computational systems and celestial phenomena.',
  },
]

export default function Instructors() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-mono text-indigo-400">
            Meet Your Instructors
          </h2>
          <p className="text-gray-400 text-lg">
            Learn from industry experts and passionate educators
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-blue-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={index === 4 ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-1rem)]" : ""}
            >
              <div className="glassmorphism p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-300 flex flex-col sm:flex-row gap-6 h-full items-start">
                {/* Smaller Avatar */}
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg bg-gradient-to-br from-indigo-500/30 to-blue-500/30 flex items-center justify-center border border-indigo-500/20 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-blue-600 opacity-40 flex items-center justify-center">
                    <span className="text-3xl sm:text-5xl font-bold text-white/20">
                      {instructor.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col h-full flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-indigo-300 mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    {instructor.bio}
                  </p>

                  {/* Specialties tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {instructor.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                      >
                        [{specialty}]
                      </span>
                    ))}
                  </div>

                  {/* Email button */}
                  <a
                    href={`mailto:${instructor.email}`}
                    className="mt-auto inline-flex px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 rounded text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 items-center justify-center gap-2 self-start"
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center 5th instructor if needed - this grid handles 5 items naturally */}
      </div>
    </section>
  )
}
