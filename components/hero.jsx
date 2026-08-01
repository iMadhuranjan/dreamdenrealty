'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { FiArrowRight, FiMapPin, FiChevronDown, FiHome, FiStar } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const images = [
    '/hero1.webp',
    '/hero2.avif',
    '/hero3.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animation = animate(count, 60, { duration: 3 });
    return animation.stop;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 3,
          ease: 'easeInOut',
        },
      },
    },
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <section className="relative md:h-[90vh] w-full overflow-hidden bg-black pt-5 md:mt-0"
    id='hero'
    >
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial="enter"
            animate={currentImage === index ? 'center' : 'exit'}
            variants={imageVariants}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Darkened Image Layer */}
            <div className="absolute inset-0 bg-black/60" /> {/* Adjust opacity (40%) as needed */}

            <img
              src={img}
              alt="Luxury property"
              className="object-cover w-full h-full"
              style={{ objectPosition: 'center 30%' }}
            />
          </motion.div>
        ))}

        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

        {/* Subtle Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_30px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Main Content */}
      <div className="container relative h-full mx-auto px-6 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Home
              </span>{' '}
              That Match Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Dreams
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg font-light"
            >
              Discover unparalleled luxury properties that redefine modern living. Our exclusive
              portfolio represents the pinnacle of architectural excellence worldwide.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link className="px-6 hover:cursor-pointer py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-medium flex items-center justify-center hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 group w-fit z-40"
              href="#about"
              >
                Know More
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 w-full"
            >
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {/* Animated Counter */}
                <motion.div
                  className="relative bg-white/5 rounded-lg p-3 md:p-4 border border-white/10 overflow-hidden group"
                  whileHover={{ y: -3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-xs md:text-sm text-amber-400 font-medium mb-1 md:mb-2">PROJECTS</div>
                  <div className="text-2xl md:text-4xl font-bold text-white">
                    <motion.span>{rounded}</motion.span>+
                  </div>
                  <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mt-1">Listed Developers</div>
                </motion.div>

                {/* Cities */}
                <motion.div
                  className="relative bg-white/5 rounded-lg p-3 md:p-4 border border-white/10 overflow-hidden group"
                  whileHover={{ y: -3 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-xs md:text-sm text-amber-400 font-medium mb-1 md:mb-2">HAPPY FAMILIES</div>
                  <div className="text-2xl md:text-4xl font-bold text-white">100+</div>
                  <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mt-1">Our Family</div>
                </motion.div>

                {/* Satisfaction */}
                <motion.div
                  className="relative bg-white/5 rounded-lg p-3 md:p-4 border border-white/10 overflow-hidden group"
                  whileHover={{ y: -3 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-xs md:text-sm text-amber-400 font-medium mb-1 md:mb-2">BROKERAGE</div>
                  <div className="text-2xl md:text-4xl font-bold text-white">0%</div>
                  <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mt-1">No Comission</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right-side - Modern Real Estate Visualization */}
          <motion.div
            className="lg:w-1/2 relative h-full md:flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src='/heroimage.png'
              className='hidden md:block w-40 md:w-96 invert -mt-7 pb-10'
            />
             <img
              src='/dreamdenlogo.png'
              className=' md:hidden w-64 invert -mt-7 pb-10'
            />
          </motion.div>
        </div>
      </div>

    
    </section>
  );
};

export default Hero;