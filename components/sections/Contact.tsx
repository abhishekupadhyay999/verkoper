"use client";

import { motion } from "framer-motion";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineArrowRight,
} from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#081B33] via-[#0B2747] to-[#081B33] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A03C]/10 blur-3xl" />

      <div className="container-custom relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-[#C9A03C]">
            READY TO GROW?
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Let's Build Your
            <br />
            Next Successful Project
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Partner with Verkoper Property Solutions for exclusive
            sole selling mandates, strategic project marketing and
            complete sales management that delivers measurable results.
          </p>
        </motion.div>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {/* Phone */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A03C]/20">
              <HiOutlinePhone className="text-3xl text-[#C9A03C]" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              Call Us
            </h3>

            <p className="mt-4 text-slate-300">
              +91 95451 88288
            </p>
          </motion.div>

          {/* Email */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A03C]/20">
              <HiOutlineMail className="text-3xl text-[#C9A03C]" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              Email Us
            </h3>

            <p className="mt-4 break-all text-slate-300">
              sales@verkoper.co.in
            </p>
          </motion.div>

          {/* Office */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A03C]/20">
              <HiOutlineLocationMarker className="text-3xl text-[#C9A03C]" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              Visit Us
            </h3>

            <p className="mt-4 text-slate-300">
              Palghar
              <br />
              Vasai • Virar
              <br />
              Mumbai Metropolitan Region
            </p>
          </motion.div>

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="tel:+919545188288"
            className="inline-flex items-center rounded-full bg-[#C9A03C] px-10 py-5 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Schedule a Consultation

            <HiOutlineArrowRight className="ml-3 text-2xl" />
          </a>

          <p className="mt-6 text-slate-400">
            Your Strategic Partner in Real Estate Success.
          </p>
        </motion.div>

      </div>
    </section>
  );
}