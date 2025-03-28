import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiCode, FiLayout, FiDatabase, FiServer, FiCpu,
  FiTool, FiGitBranch, FiPackage, FiMonitor, FiUploadCloud 
} from 'react-icons/fi'

const skillCategories = [
  {
    title: "programming languages",
    icon: <FiCode size={24} />,
    skills: [
      { name: "Java", level: 80 },
      { name: "C++", level: 70 },
      { name: "Python", level: 50 },
    ]
  },
  {
    title: "Frontend",
    icon: <FiLayout size={24} />,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "React.js", level: 95 },
    ]
  },
  {
    title: "UI Frameworks",
    icon: <FiMonitor size={24} />,
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 88 },
      { name: "Styled Components", level: 82 },
      { name: "Framer Motion", level: 78 },
    ]
  },
  {
    title: "Backend",
    icon: <FiServer size={24} />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "RESTful APIs", level: 85 },
      { name: "Firebase", level: 75 },
    ]
  },
  {
    title: "Database",
    icon: <FiDatabase size={24} />,
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "Firebase Firestore", level: 80 },
    ]
  },
  {
    title: "Machine Learning",
    icon: <FiCpu size={24} />,
    skills: [
      { name: "Pandas", level: 75 },
      { name: "NumPy", level: 70 },
      { name: "Matplotlib", level: 65 },
      { name: "Scikit-learn", level: 70 },
      { name: "TensorFlow", level: 60 },
    ]
  },
  {
    title: "Tools",
    icon: <FiTool size={24} />,
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Vite", level: 85 },
    ]
  },
  {
    title: "Version Control",
    icon: <FiGitBranch size={24} />,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
    ]
  },
  {
    title: "Deployment & Hosting",
    icon: <FiUploadCloud  size={24} />,
    skills: [
      { name: "Netlify", level: 80 },
      { name: "Vercel", level: 90 },
      { name: "Firebase", level: 70 },
      { name: "GitHub Pages", level: 75 },
    ]
  }
]

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="card"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-light-dark dark:bg-dark-dark rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
