'use client'
import { motion } from 'framer-motion'
import { FaPiggyBank } from 'react-icons/fa'
import { 
  FiLayers, 
  FiDollarSign, 
  FiHeadphones, 
  FiUsers, 
  FiGlobe,
  FiTrendingUp,
  FiHome,
  FiShield
} from 'react-icons/fi'

const ServicesSection = () => {
  const services = [
    {
      icon: <FiLayers className="text-2xl" />,
      title: "Property Analysis",
      description: "We help you find the true value of your property with expert research and clear insights for better buying, selling, or investing decisions.",
      gradient: "from-blue-400 via-blue-500 to-blue-600"
    },
    
    {
      icon: <FiHome className="text-2xl" />,
      title: "Rental & Resales",
      description: "Our Team helps you rent out or sell your property quickly and at the right price, with full support from listing to final deal.",
      gradient: "from-amber-400 via-amber-500 to-amber-600"
    },
    {
      icon: <FiUsers className="text-2xl" />,
      title: "NRI Investment",
      description: "Trusted guidance for NRIs to safely invest in Indian real estate, with full support on property selection, legal process, and management.",
      gradient: "from-purple-400 via-purple-500 to-purple-600"
    },
    {
      icon: <FaPiggyBank className="text-2xl" />,
      title: "Home Loan Solutions",
      description: "Tailored financing options with exclusive rates from our network of premium lenders.",
      gradient: "from-emerald-400 via-emerald-500 to-emerald-600"
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "Property Sales Management",
      description: "Efficiently manage your property sale process with expert marketing, negotiations, and smooth transaction handling for the best price.",
      gradient: "from-rose-400 via-rose-500 to-rose-600"
    },
    {
      icon: <FiShield className="text-2xl" />,
      title: "Legal & Document Support",
      description: "Post Sales Expert Team assistance with all property-related legalities and paperwork to ensure smooth and secure transactions.",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      y: -10,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section className="py-10 bg-gradient-to-b from-gray-900 to-black overflow-hidden" id='service'>
      {/* Luxury background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" width="100%" height="100%">
          <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-500" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      {/* Gold accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-20"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-10"
        >
          <motion.div 
            className="inline-flex items-center justify-center mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mr-3 h-px w-12 bg-gradient-to-r from-amber-400 to-amber-600"></div>
            <span className="text-sm font-medium tracking-widest uppercase text-amber-400">
               Services
            </span>
            <div className="ml-3 h-px w-12 bg-gradient-to-r from-amber-400 to-amber-600"></div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8
                }
              }
            }}
          >
            <span className="inline-block">
           Our   <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Areas Of Expertise</span>  
            </span>
          </motion.h2>
          
           
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative group cursor-pointer"
            >
              {/* Gold glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-md transition-all duration-500 ease-out pointer-events-none`} />
              
              {/* Main card */}
              <div className="relative h-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-amber-500/30 transition-all duration-300">
                {/* Gold accent bar */}
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${service.gradient}`}></div>
                
                <div className="p-8 flex flex-col h-full">
                  {/* Icon with gradient background */}
                  <div className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  {/* Title with gold text gradient on hover */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                  
                  {/* Gold accent line that expands on hover */}
                  <div className="relative mt-auto pt-4">
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gray-800"></div>
                    <div className={`absolute bottom-0 left-0 h-px w-8 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500 ease-out`}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection