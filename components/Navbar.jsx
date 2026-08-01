"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const nav = [
        { key: "Home", label: "Home", href: "#hero" },
        { key: "About us", label: "About us", href: "#about" },
        { key: "Partners", label: "Partners", href: "#partner" },
        { key: "Services", label: "Services", href: "#service" },
        // { key: "Testimonial", label: "Testimonial", href: "/pricing" },
        { key: "Contact us", label: "Contact us", href: "#contact" },
        // { key: "pricing", label: "Pricing", href: "/pricing" },
    ];

    const isDropdown = (item) => Array.isArray(item.items);

    return (
        <header className="sticky top-0 z-50 w-full bg-black border-b border-zinc-800 py-1" >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <img
                            src="/dreamdenlogo.png"
                            className="invert h-auto w-40"
                            alt="DreamDen Logo"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {nav.map((item) => (
                            <div key={item.key} className="relative">
                                <a
                                    href={item.href}
                                    className="text-white hover:text-violet-400 font-medium text-[1.1rem]"
                                >
                                    {item.label}
                                </a>
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-white text-3xl"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black overflow-hidden"
                    >
                        <div className="px-4 py-1 space-y-2">
                            {nav.map((item) => (
                                <MobileNavItem
                                    key={item.key}
                                    item={item}
                                    onClose={() => setMobileOpen(false)}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

// Mobile Navigation Item Component
const MobileNavItem = ({ item, onClose }) => {
    const [open, setOpen] = useState(false);
    const hasChildren = Array.isArray(item.items);

    return (
        <div className="border-b border-zinc-800 last:border-0 pb-2">
            {hasChildren ? (
                <>
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex w-full items-center justify-between py-2 text-white font-medium"
                    >
                        {item.label}
                        <FiChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>

                    {open && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 overflow-hidden"
                        >
                            {item.items.map((sub) => (
                                <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={onClose}
                                    className="block py-1.5 text-zinc-300 hover:text-white"
                                >
                                    {sub.label}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </>
            ) : (
                <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-2 text-white font-medium hover:text-violet-400"
                >
                    {item.label}
                </Link>
            )}
        </div>
    );
};

export default Navbar;