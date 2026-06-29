"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Who We Are", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-[#081B33]/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">

          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-14 md:h-20" : "h-16 md:h-24"
            }`}
          >

            {/* Logo */}

            <Link href="/" className="flex items-center">

              <Image
                src="/logo/logo.png"
                alt="Verkoper Property Solutions"
                width={170}
                height={60}
                priority
                className="h-auto w-[55px] sm:w-[85px] md:w-[140px] lg:w-[170px]"
              />

            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  className="group relative text-[15px] font-medium uppercase tracking-[2px] text-white transition-all duration-300 hover:text-[#C9A03C]"
                >

                  {item.name}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C9A03C] transition-all duration-300 group-hover:w-full" />

                </a>

              ))}

            </nav>

            {/* CTA */}

            <div className="hidden lg:block">

              <a
                href="#contact"
                className=" px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#d8ad47]"
              >
                we're Hiring
              </a>

            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-4xl text-white lg:hidden"
            >
              {mobileMenu ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>

          </div>

        </div>

      </motion.header>
         {/* Mobile Menu */}

<AnimatePresence>
  {mobileMenu && (
    <>
      {/* Overlay */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={() => setMobileMenu(false)}
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
      />

      {/* Drawer */}

      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="fixed top-0 right-0 z-50 flex h-screen w-[85%] max-w-[360px] flex-col bg-[#081B33] px-6 py-8 shadow-2xl lg:hidden"
      >
        {/* Header */}

        <div className="mb-10 flex items-center justify-between">

          <Image
            src="/logo/logo.png"
            alt="Verkoper Property Solutions"
            width={120}
            height={45}
            className="h-auto w-[70px]"
          />

          <button
            onClick={() => setMobileMenu(false)}
            className="rounded-full p-2 text-3xl text-white transition hover:bg-white/10 hover:text-[#C9A03C]"
          >
            <HiX />
          </button>

        </div>

        {/* Navigation */}

        <nav className="flex flex-col">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className="border-b border-white/10 py-5 text-lg font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:translate-x-2 hover:text-[#C9A03C]"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* CTA */}

        <a
          href="#contact"
          onClick={() => setMobileMenu(false)}
          className="mt-10 rounded-full bg-[#C9A03C] py-4 text-center text-base font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#d8ad47]"
        >
          Schedule Consultation
        </a>

        {/* Footer */}

        <div className="mt-auto pt-10">

          <div className="mb-6 h-px w-full bg-white/10" />

          <p className="text-center text-sm leading-7 text-slate-400">
            Your Strategic Partner
            <br />
            In Real Estate Success.
          </p>

        </div>

            </motion.aside>
    </>
  )}
</AnimatePresence>

    </>
  );
}