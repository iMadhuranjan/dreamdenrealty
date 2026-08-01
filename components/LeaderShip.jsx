'use client'
import { motion } from 'framer-motion'
import { FiLinkedin, ç } from 'react-icons/fi'

const Leadership = () => {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header with animated underline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-10"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">
                        <span className="relative inline-block">
                            Our vision
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 origin-left"
                            />
                        </span>
                    </h2>
                    {/* <p className="text-xl md:text-2xl text-gray-400">
                        Making every home-buying journey extraordinary through innovation and trust
                    </p> */}
                </motion.div>

                {/* Leadership profile - modern layout without boxes */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start"
                    >
                        {/* Image with LinkedIn floating badge */}
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-lg w-fit md:w-[400px] h-full mx-auto">
                                <img
                                    src="/suraj.png"
                                    alt="Gaurav Mediratta"
                                    className="w-full h-full object-contain transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                        </div>

                        {/* Content with staggered animation */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-amber-400 font-medium tracking-wider">
                                    FOUNDER & DIRECTOR
                                </span>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                                    Suraj Gupta
                                </h3>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="prose prose-lg text-gray-300 max-w-none"
                            >
                                <p className="leading-relaxed">
                                    We envision a future where every local homebuyer sees Dream Den Realty as their go-to real estate partner. With the right channel partner by their side, clients can buy with confidence, clarity, and complete peace of mind.
                                </p>
                                {/* <p className="leading-relaxed mt-4">
                                    Under his leadership, the company has become synonymous with exceptional service, innovative solutions, and client-first philosophy that sets industry benchmarks.
                                </p> */}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="pt-4"
                            >
                                <div className="flex flex-wrap gap-4">
                                    <motion.a
                                        whileHover={{ y: -2 }}
                                        href="https://www.linkedin.com/in/suraj-gupta-9a99151a8/" target='_blank'
                                        className="rounded-sm bg-amber-400 px-5 py-2 font-medium flex items-center gap-2 group text-black"
                                    >
                                        <span className="pt-1 border-b border-transparent group-hover:border-amber-400 transition-all flex gap-2">
                                            <FiLinkedin className=' pt-1' />   Linkedin
                                        </span>

                                    </motion.a>

                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Leadership