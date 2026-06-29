"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-12 md:min-h-screen md:pt-0 md:pb-0"
    >
      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1.08, 1.13, 1.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/hero/hero-bg.png"
          alt="Luxury Real Estate"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Premium Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/95 via-[#081B33]/75 to-[#081B33]/35" />

      {/* Gold Glow */}

      <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A03C]/10 blur-[200px]" />

      {/* Content */}

      <div className="container-custom relative z-10 pt-28 sm:pt-40 md:pt-24 lg:pt-0">

        <div className="max-w-4xl flex flex-col items-start">


          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl font-bold leading-none text-white md:text-8xl xl:text-[96px]"
          >
            YOU BUILD.
            <br />

            <span className="text-gradient">
              WE SELL.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-[640px] text-xl leading-9 text-slate-200 text-left"
          >
            Exclusive Sole Selling and Project Marketing solutions
            for real estate developers across Palghar, Vasai,
            Virar, Boisar, Naigaon and the Mumbai Metropolitan Region.
          </motion.p>

          {/* Buttons */}
{/*
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-x1 bg-[#C9A03C] px-18 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#d8ad47] whitespace-nowrap"
            >
              Schedule Consultation

              <HiArrowRight className="ml-3 text-xl" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center rounded-x1 border-white/30 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#081B33]"
            >
              Explore Services
            </a>

          </motion.div>
*/}
          {/* Locations */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex flex-wrap items-center gap-6 text-sm uppercase tracking-[3px] text-[#C9A03C]"
          >
            <span>Palghar</span>

            <span>•</span>

            <span>Vasai</span>

            <span>•</span>

            <span>Virar</span>

            <span>•</span>

            <span>Boisar</span>

            <span>•</span>

            <span>MMR</span>

          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-10 flex items-center gap-20"
          >
            <div>
              <h3 className="text-4xl font-bold text-[#C9A03C]">
                10+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[3px] text-white/80">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C9A03C]">
                7+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[3px] text-white/80">
                Service Locations
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C9A03C]">
                100%
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[3px] text-white/80">
                Transparency
              </p>
            </div>

          </motion.div>
                  </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          delay: 1.8,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="mb-3 text-xs font-medium uppercase tracking-[5px] text-white/80">
            Scroll
          </span>

          <div className="flex h-16 w-8 items-start justify-center rounded-full border border-white/20">
  <motion.div
    animate={{
      y: [0, 18, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className="mt-2 h-3 w-1 rounded-full bg-[#C9A03C]"
  />
</div>

        </div>
      </motion.div>
    </section>
  );
}