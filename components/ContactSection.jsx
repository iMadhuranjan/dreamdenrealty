'use client'
import { motion } from 'framer-motion'
import {
    FiInstagram,
    FiLinkedin,
    FiFacebook,
    FiMail,
    FiMessageSquare,
    FiMapPin,
    FiPhone,
    FiClock
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
import { SiZillow, SiRealtor } from 'react-icons/si'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'cc49837a-a9a7-446f-8ca9-bee5a55caa90',
                    ...formData
                })
            })

            const data = await response.json()
            if (data.success) {
                setSubmitSuccess(true)
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                })
            }
        } catch (error) {
            console.error('Error submitting form:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const socialProfiles = [
        {
            icon: <FiInstagram className="text-2xl" />,
            name: "Instagram",
            url: "https://www.instagram.com/dreamdenrealty",
            color: "bg-gradient-to-br from-pink-500 to-purple-600",
            description: "Explore our luxury property portfolio",
            buttonText: "Follow Us",
            stats: "100+ Followers"
        },
        {
            icon: <FiLinkedin className="text-2xl" />,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/dream-den-realty-533595343",
            color: "bg-gradient-to-br from-blue-500 to-blue-700",
            description: "Professional network with our agents",
            stats: "100+ Connections"
        },
        {
            icon: <FiFacebook className="text-2xl" />,
            name: "Facebook",
            url: "https://www.facebook.com/people/Dream-Den-Realty/61570590527326/",
            color: "bg-gradient-to-br from-blue-600 to-blue-800",
            description: "Join our community discussions",
            buttonText: "Like Page",
            stats: "2K+ Likes"
        },
        {
            icon: <FaWhatsapp className="text-2xl" />,
            name: "WhatsApp",
            url: "https://wa.me/917620822652",
            color: "bg-gradient-to-br from-green-500 to-green-600",
            description: "Instant messaging with our team",
            buttonText: "Chat Now",
            stats: "24/7 Support"
        },
        {
            icon: <FiMail className="text-2xl" />,
            name: "Email",
            url: "mailto:dreamdenrealty@gmail.com",
            color: "bg-gradient-to-br from-amber-500 to-amber-600",
            description: "For detailed property inquiries",
            buttonText: "Send Email",
            stats: "Response in 24h"
        }
    ]

    const contactInfo = [
        {
            icon: <FiMapPin className="text-amber-400 text-xl" />,
            title: "Our Office",
            description: "123 Luxury Avenue, Mumbai 400001, India",
            link: "#",
            linkText: "View on Map"
        },
        {
            icon: <FiPhone className="text-amber-400 text-xl" />,
            title: "Call Us",
            description: "+91 76208 22652",
            link: "tel:+917620822652",
            linkText: "Call Now"
        },
        {
            icon: <FiClock className="text-amber-400 text-xl" />,
            title: "Working Hours",
            description: "Mon-Sat: 9:00 AM - 7:00 PM",
            link: "#",
            linkText: "Book Appointment"
        }
    ]

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

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const staggerItem = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    }

    return (
        <section id="contact" className="py-20 bg-black relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-amber-900/5"></div>
                <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent transform -translate-x-1/2"></div>
                <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-500/10 blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-flex items-center justify-center mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="mr-3 h-px w-12 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                        <span className="text-sm font-medium tracking-widest uppercase text-amber-400">
                            Connect With Us
                        </span>
                        <div className="ml-3 h-px w-12 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
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
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Start a Conversation</span>
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    delay: 0.3,
                                    duration: 0.8
                                }
                            }
                        }}
                    >
                        Our team of luxury property specialists is ready to assist you with personalized service and exclusive listings.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-xl relative"
                    >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
                        <div className="p-4 md:p-10">
                            <h3 className="text-2xl font-bold text-white mb-8 text-center relative">
                                <span className="absolute left-0 right-0 -bottom-3 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></span>
                                <span className="relative px-4 bg-gray-900 inline-block">
                                    Send Us a Message
                                </span>
                            </h3>

                            {submitSuccess ? (
                                <div className="text-center py-10">
                                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h4>
                                    <p className="text-gray-400 mb-6 max-w-md mx-auto">Thank you for reaching out. One of our luxury property consultants will contact you within 24 hours.</p>
                                    <button
                                        onClick={() => setSubmitSuccess(false)}
                                        className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-amber-500/30 cursor-pointer"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all pl-12"
                                                    placeholder="John Smith"
                                                />
                                                <div className="absolute left-0 top-0 h-full flex items-center pl-4 text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}

                                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all pl-12"
                                                    placeholder="john@example.com"
                                                />
                                                <div className="absolute left-0 top-0 h-full flex items-center pl-4 text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all pl-12"
                                                placeholder="+91 76208 22652"
                                            />
                                            <div className="absolute left-0 top-0 h-full flex items-center pl-4 text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message *</label>
                                        <div className="relative">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all pl-12"
                                                placeholder="I'm interested in luxury properties in..."
                                            ></textarea>
                                            <div className="absolute left-0 top-0 pt-4 pl-4 text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full px-6 py-4 rounded-lg font-medium text-white transition-all flex items-center justify-center cursor-pointer ${isSubmitting ? 'bg-gray-700' : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-amber-500/30'}`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending Your Message...
                                                </>
                                            ) : (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Info and Social */}
                    <div className="space-y-8">


                        {/* Social Profiles */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-xl"
                        >
                            <div className="p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-white mb-8 text-center relative">
                                    <span className="absolute left-0 right-0 -bottom-3 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></span>
                                    <span className="relative px-4 bg-gray-900 inline-block">
                                        Connect With Us
                                    </span>
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {socialProfiles.map((profile, index) => (
                                        <motion.a
                                            key={index}
                                            variants={staggerItem}
                                            whileHover={{ y: -5 }}
                                            href={profile.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group relative overflow-hidden rounded-xl p-5 transition-all border-amber-400/40 duration-300 border hover:shadow-lg border${index % 2 === 0 ? 'hover:shadow-amber-500/10' : 'hover:shadow-purple-500/10'}`}
                                            style={{ background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)' }}
                                        >
                                            <div className="flex items-start ">
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${profile.color} text-white mr-4 flex-shrink-0 shadow-md`}>
                                                    {profile.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">{profile.name}</h4>
                                                    <p className="text-sm text-gray-400 mb-2">{profile.description}</p>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-gray-500">{profile.stats}</span>

                                                    </div>
                                                </div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection