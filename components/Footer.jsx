'use client'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 border-t border-gray-800 pt-8 pb-5">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Logo and About */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center">
                            {/* Logo placeholder - replace with your actual logo */}
                            <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold text-2xl rounded-lg w-12 h-12 flex items-center justify-center mr-3">
                                DD
                            </div>
                            <span className="text-white text-2xl font-bold">Dream Den Realty</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Specializing in luxury properties and premium real estate solutions across Maharashtra.
                            We transform your property dreams into reality with exceptional service and expertise.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/people/Dream-Den-Realty/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <FiFacebook className="text-xl" />
                            </a>
                            <a href="https://www.instagram.com/dreamdenrealty" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <FiInstagram className="text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/dream-den-realty-533595343" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <FiLinkedin className="text-xl" />
                            </a>
                            <a href="https://wa.me/917620822652" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <FaWhatsapp className="text-xl" />
                            </a>
                        </div>
                    </motion.div>

                 
                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-white font-bold text-lg uppercase tracking-wider">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Luxury Home Sales</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Property Management</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Real Estate Investment</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Property Valuation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Consultation</a></li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="text-white font-bold text-lg uppercase tracking-wider">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FiMapPin className="text-amber-400 mt-1 mr-3 flex-shrink-0" />
                                <address className="text-gray-400 text-sm not-italic">
                                    B Wing, SHREE RANG NAGAR,<br />
                                    opp. Hanuman Mandir Road,<br />
                                    Punit Sagar Complex,<br />
                                    Bhiwandi, Maharashtra 421302
                                </address>
                            </li>
                            <li className="flex items-center">
                                <FiPhone className="text-amber-400 mr-3" />
                                <a href="tel:+917620822652" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">+91 76208 22652</a>
                            </li>
                            <li className="flex items-center">
                                <FiMail className="text-amber-400 mr-3" />
                                <a href="mailto:dreamdenrealty@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">dreamdenrealty@gmail.com</a>
                            </li>
                        </ul>
                    </motion.div>

                     {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <img 
                        src='/heroimage.png'
                        className='w-full invert'
                        />
                    </motion.div>
                </div>

                {/* Copyright Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center"
                >
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {currentYear} Dream Den Realty. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Designed & Developed by <a href="https://madhuranjan.in" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">Madhuranjan</a>
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer