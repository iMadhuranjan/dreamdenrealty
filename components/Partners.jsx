'use client'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const Partners = () => {
    const partners = [
        { id: 2, name: 'Godrej Properties', logo: '/partner/godrej.png' },
        { id: 3, name: 'Mahindra Lifespaces', logo: '/partner/mahindra.png' },
        { id: 4, name: 'Hiranandani', logo: '/partner/hira.png' },
        { id: 5, name: 'Runwal Group', logo: '/partner/runwal.png' },
        { id: 6, name: 'Piramal ', logo: '/partner/piramal.png' },
        { id: 7, name: 'Kalpa Taru', logo: '/partner/kalp.png' },
        { id: 8, name: 'JP Infra', logo: '/partner/jpinfra.png' },
        { id: 9, name: 'Paradise Group', logo: '/partner/paradise.webp' },
        { id: 10, name: 'Puravankara', logo: 'https://companieslogo.com/img/orig/PURVA.NS_BIG-80811cc5.png?t=1720244493' },
         { id: 1, name: 'Shakti Group', logo: '/partner/shakti.png' },
    ]

    return (
        <section className="py-10 bg-gradient-to-b from-gray-900 to-black  overflow-hidden" id='partner'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <h2 className="text-3xl text-white md:text-6xl font-extrabold mb-4">
                        Our <span className="text-amber-400">Partners</span>
                    </h2>
                    {/* <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Partnering with India's most respected real estate brands
                    </p> */}
                </motion.div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-amber-400/10 w-full h-full rounded-3xl blur-3xl opacity-40" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6"
                    >
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-b from-gray-800/50 to-gray-900/80 rounded-2xl px-4 py-5 md:p-6 flex flex-col items-center justify-center h-40 border border-gray-700 hover:border-amber-400/40 transition-all duration-300 ease-out cursor-pointer backdrop-blur-sm hover:scale-105 "
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="object-contain   transition-all duration-300 ease-out"
                                    />
                                </div>
                                <span className="mt-3 text-xs font-medium text-gray-200 transition-colors duration-300 ease-out hover:text-amber-400">
                                    {partner.name}
                                </span>
                            </motion.div>
                        ))}

                    </motion.div>
                </div>


            </div>
        </section>
    )
}

export default Partners