'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  return (
    <section className="py-10 px-4 sm:px-6 bg-black text-white"
      id='about'
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="w-full lg:w-2/3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center mb-4 sm:mb-6">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-500 mr-2 sm:mr-3" />
              <span className="text-xs sm:text-sm font-medium text-amber-400 tracking-widest">ABOUT US</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight"
            >
              Welcome to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">DreamDen Realty</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 font-light"
            >
              At Dream Den Realty, we believe that every dream home begins with a trusted partner. Established in 2024, we are a growing real estate consultancy dedicated to helping individuals and families find their perfect space — whether it's a cozy rental, a resale property, or a brand-new home.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 font-light"
            >
              With a strong local presence and a passion for property, we specialize in residential and commercial real estate solutions across Mumbai and surrounding regions. Our mission is simple: to make the process of buying, selling, or renting property transparent, smooth, and rewarding.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-3 sm:mb-4 font-light"
            >
              We understand that real estate is more than just a transaction — it’s a life-changing journey. That’s why we’re committed to offering personalized service, honest advice, and expert guidance every step of the way.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 font-light"
            >
              Let us help you turn your dreams into reality
            </motion.p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] mt-4 sm:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 0.77, 0.47, 0.97] }}
          >
            {/* 3D Container with Depth */}
            <motion.div
              className="relative h-full w-full perspective-1000 group"
              whileHover="hover"
              initial="rest"
            >
              {/* Animated Layers */}
              <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl"
                variants={{
                  rest: { rotateY: 0, rotateX: 0 },
                  hover: { rotateY: -3, rotateX: 2 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Parallax Image */}
                <motion.img
                  src='/aboutlion.jpeg'
                  alt="DreamDen Realty"
                  className="w-full h-full object-cover origin-center"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.03 }
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Cinematic Overlay - Reduced opacity for mobile */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/40 sm:from-black/40 sm:via-black/10 sm:to-black/30"
                  variants={{
                    rest: { opacity: 0.8 },
                    hover: { opacity: 0.6 }
                  }}
                />
              </motion.div>

              {/* Floating Frame - Simplified for mobile */}
              <motion.div
                className="absolute inset-0 border border-white/10 sm:border-2 sm:border-white/20 rounded-xl sm:rounded-2xl lg:rounded-3xl pointer-events-none"
                variants={{
                  rest: { opacity: 0.6 },
                  hover: { opacity: 1 }
                }}
              >
                {/* Animated Border Glow - Only on larger screens */}
                <motion.div
                  className="hidden sm:block absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-transparent pointer-events-none"
                  animate={{
                    borderColor: [
                      'rgba(245,158,11,0)',
                      'rgba(245,158,11,0.3)',
                      'rgba(245,158,11,0)'
                    ],
                    boxShadow: [
                      '0 0 0 rgba(245,158,11,0)',
                      '0 0 10px rgba(245,158,11,0.2)',
                      '0 0 0 rgba(245,158,11,0)'
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Hover Sparkle Effect - Only on larger screens */}
              <motion.div
                className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white rounded-full pointer-events-none"
                    style={{
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    variants={{
                      rest: { opacity: 0 },
                      hover: {
                        opacity: [0, 0.8, 0],
                        y: [0, -20],
                        x: [0, (Math.random() - 0.5) * 20]
                      }
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: Math.random() * 0.5
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;