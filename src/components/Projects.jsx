import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: "Study App",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    description: "A fully responsive Placement Preparation platform built with React, Node.js, and Firebase. Features include user authentication, Study Notes, Interview Questions, Coding Question, Resume Templates, Roadmaps, Aptitude Quiz, Internship Companines List etc.. ",
    technologies: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    liveLink: "https://placement-prep-varni.vercel.app/",
    githubLink: "https://github.com/Varni1512/PlacementPrep",
  },
  {
    id: 2,
    title: "Real-Time Text Translator Chrome Extension",
    category: "Chrome Extension",
    image: "https://res-academy.cache.wpscdn.com/images/seo_posts/20240517/26e62618961cccbf5cad4017bc328e7d.png",
    description: "This Chrome extension allows users to translate selected text in real-time into multiple languages, making it easier to access and understand content across the web.",
    technologies: ["HTML", "CSS", "JavaScript",'Mainfest.json'],
    liveLink: "#",
    githubLink: "https://github.com/Varni1512/LanguageTranslatorExtension",
  },
  {
    id: 3,
    title: "AI-Powered Text-to-Image Generator",
    category: "Web Development",
    image: "https://mm-test.minitool.com/images/uploads/2023/06/ai-image-generator-thumbnail.jpg",
    description: "Imagify lets you turn text into beautiful images in seconds. Simply enter a description, and our AI-powered tool will generate stunning visuals. With a smooth UI, seamless animations, and real-time notifications, creativity is at your fingertips!",
    technologies: ["React", "Node.js", "MongoDB", "Clipdrop API"],
    liveLink: "#",
    githubLink: "https://github.com/Varni1512/Imagify",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    category: "API Integration",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "A weather application that provides real-time weather data and forecasts for any location. Features include current conditions, 7-day forecast, and interactive maps.",
    technologies: ["HTML", "OpenWeather API", "CSS", "JavaScript"],
    liveLink: "https://varni1512.github.io/Weather/",
    githubLink: "https://github.com/Varni1512/Weather",
  },
  {
    id: 5,
    title: "Netflix Clone",
    category: "Cloned Website",
    image: "https://entrevue.fr/wp-content/uploads/2025/01/netflix-decouvrez-les-nouveautes-de-la-semaine-y-compris-la-tant-attendue-suite-dun-immense-succes-750x410-1.jpg",
    description: "This is a Netflix clone built using React.js. The project showcases movie data fetched from the TMDb (The Movie Database) API. For user authentication and security, Firebase Authentication is used. Additionally, React Toastify is implemented for elegant popup notifications.",
    technologies: ["React", "Firebase", "React Toastify", "Node.js", "Express"],
    liveLink: "https://quiet-cheesecake-5d029a.netlify.app/",
    githubLink: "https://github.com/Varni1512/Netflix-Clone",
  },
  {
    id: 6,
    title: "Amazon Clone",
    category: "Cloned Website",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCQbmHeGGvNBVvIKONKNfh4ZGWThL_-zd3w&s",
    description: "Amazon Clone, which replicates the core functionalities of one of the world's largest e-commerce platforms. This project focuses on creating a robust and scalable online shopping experience, incorporating essential features to mimic the user experience of a full-fledged e-commerce platform.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://varni1512.github.io/Amazon-clone/",
    githubLink: "https://github.com/Varni1512/Amazon-clone",
  },
  {
    id: 7,
    title: "Recipe Finder App",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
    description: "A recipe application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine type. Features include saving favorites and meal planning.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://vegdelight.netlify.app/",
    githubLink: "https://github.com/Varni1512/VegDelight",
  },
  {
    id: 8,
    title: "Portfolio Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "A personal portfolio website showcasing projects, skills, and experience. Features smooth animations, responsive design, and contact form integration.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 9,
    title: "N Queens Visualizer",
    category: "Algorithm-Based Project",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJplgYlzzJI_Afc9332ecGWoF-M9cO8nLyw&s",
    description: "The N-Queens Visualizer is an interactive tool that demonstrates the backtracking algorithm used to solve the classic N-Queens problem. The problem involves placing N queens on an N x N chessboard such that no two queens attack each other.",
    technologies: ["HTML", "CSS", "JavaScript","Data Structures and Algorithms"],
    liveLink: "https://varni1512.github.io/N-queens-visualiser/",
    githubLink: "https://github.com/Varni1512/N-queens-visualiser",
  },
  {
    id: 10,
    title: "Tree Visualizer",
    category: "Algorithm-Based Project",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZ0kTvaCWu722CacBEn2nesn9ldDReCIe5g&s",
    description: "The Tree Visualizer is an interactive tool designed to help users understand different tree data structures and their traversal methods. It provides a graphical representation of tree operations, making it easier to learn Binary Trees, Binary Search Trees (BST), AVL Trees, and more.",
    technologies: ["HTML", "CSS", "JavaScript","Data Structures and Algorithms"],
    liveLink: "https://varni1512.github.io/Tree-Visualizer/",
    githubLink: "https://github.com/Varni1512/Tree-Visualizer",
  },
  {
    id: 11,
    title: "Sudoku Solver",
    category: "Algorithm-Based Project",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkm19-M31Vp7okMc8GXTYlUAwZt7ZTPZB1jw&s",
    description: "The Sudoku Solver is an interactive tool that utilizes backtracking algorithms to solve Sudoku puzzles efficiently. It provides both automated solving and manual input options for users to experiment with Sudoku solutions.",
    technologies: ["HTML", "CSS", "JavaScript","Data Structures and Algorithms"],
    liveLink: "https://varni1512.github.io/Sudoku-Solver/",
    githubLink: "https://github.com/Varni1512/Sudoku-Solver",
  },
  {
    id: 12,
    title: "DeepFake Detection",
    category: "Featured Project",
    image: "https://s24806.pcdn.co/wp-content/uploads/2024/07/TrendMicro-Deepfake-videostill2-970-copy.jpg",
    description: "It's my feature project! This AI-powered system detects manipulated images and videos using deep learning techniques like CNNs (XceptionNet, EfficientNet) for image analysis and RNN/LSTM for spotting temporal inconsistencies in videos. It identifies unnatural artifacts, facial distortions, and motion inconsistencies, ensuring real-time detection to combat misinformation and identity fraud. ",
    technologies: ["React.js", "Tailwind CSS", "Python", "Flask", "TensorFlow", "PyTorch", "OpenCV", "Dlib", "MediaPipe", "XceptionNet", "ResNet", "MongoDB", "AWS", "Docker"],
    liveLink: "https://varni1512.github.io/Sudoku-Solver/",
    githubLink: "https://github.com/Varni1512/Sudoku-Solver",
  },
]

const categories = ["All", "Web Development", "Cloned Website", "API Integration", "Chrome Extension","Algorithm-Based Project","Featured Project"]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

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
    <section id="projects" className="bg-light dark:bg-dark py-16 md:py-24">
      <div className="container-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-dark-dark text-dark-light dark:text-light-light hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card group"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-2">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary transition-colors duration-300"
                      >
                        <FiExternalLink className="text-white" size={18} />
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary transition-colors duration-300"
                      >
                        <FiGithub className="text-white" size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <FiCode className="text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-light-dark dark:bg-dark-dark text-dark-light dark:text-light-light text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects