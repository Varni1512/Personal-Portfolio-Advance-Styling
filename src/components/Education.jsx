import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi'

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science(AIML)",
    institution: "VIT University",
    location: "Bhopal, India",
    period: "2023 - Ongoing",
    cgpa: "8.0",
    description: "Specialized in Artificial Intelligence and Machine Learning. Focused on Software Engineering and User Interface Design. Participated in multiple hackathons and coding competitions.",
    achievements: [
      "Qualified for the Internal Round of SIH 2024",
      "Ranked in the Top 50 of Vulture Hackathon among 1,000+ participants",
      "Completed Hacktoberfest 2024"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Baps Swaminarayan Vidhyamandir",
    location: "Gondal, India",
    period: "2019 - 2023",
    percentile: "75.33",
    description: "Completed Higher Secondary Education with a strong foundation in Mathematics. ",
    achievements: [
      "Best Speaker Award",
      "Excellence in Singing",
      "Skilled Tabla Player"
    ]
  },
]

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="mt-12 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              className="timeline-item"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-dot"></div>
              <div className="card mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <div className="flex items-center text-primary mt-2 md:mt-0">
                    <FiCalendar className="mr-1" />
                    <span className="text-sm">{item.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <FiBookOpen className="text-primary mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">{item.institution}</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="text-primary mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">{item.location}</span>
                  </div>
                </div>
                
                {/* <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p> */}
                
                {item.cgpa && (
                  <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>CGPA:</strong> {item.cgpa}</p>
                )}
                
                {item.percentile && (
                  <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Percentile:</strong> {item.percentile}</p>
                )}
                
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
