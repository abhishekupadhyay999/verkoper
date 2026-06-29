"use client";

import { motion } from "framer-motion";

export default function ProjectForm() {
  return (
    <section
      id="project"
      className="bg-white py-32"
    >
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-8xl text-center"
        >

          <p className="font-semibold uppercase tracking-[5px] text-[#C9A03C]">
            START YOUR PROJECT
          </p>

          <h2 className="mt-5 text-5xl font-serif font-semibold leading-tight text-[#081B33] md:text-6xl">
            Let's Build
            <br />
            Something Great Together
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            Ready to launch your next real estate project?
            Share your details and our team will contact
            you to discuss the best sales and marketing
            strategy for your project.
          </p>

        </motion.div>

        {/* Form */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm lg:p-16"
        >

          <form className="space-y-8">

            <div className="grid gap-8 md:grid-cols-2">

              <div>

                <label className="mb-3 block text-sm font-semibold text-[#081B33]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-14 w-full rounded-xl border border-slate-300 px-5 outline-none transition focus:border-[#C9A03C]"
                />

              </div>

              <div>

                <label className="mb-3 block text-sm font-semibold text-[#081B33]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="h-14 w-full rounded-xl border border-slate-300 px-5 outline-none transition focus:border-[#C9A03C]"
                />

              </div>

            </div>
                        <div className="grid gap-8 md:grid-cols-2">

              {/* Email */}

              <div>

                <label className="mb-3 block text-sm font-semibold text-[#081B33]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-xl border border-slate-300 px-5 outline-none transition-all duration-300 focus:border-[#C9A03C] focus:ring-2 focus:ring-[#C9A03C]/20"
                />

              </div>

              {/* Project Location */}

              <div>

                <label className="mb-3 block text-sm font-semibold text-[#081B33]">
                  Project Location
                </label>

                <input
                  type="text"
                  placeholder="City / Area"
                  className="h-14 w-full rounded-xl border border-slate-300 px-5 outline-none transition-all duration-300 focus:border-[#C9A03C] focus:ring-2 focus:ring-[#C9A03C]/20"
                />

              </div>

            </div>

            {/* Project Details */}

            <div>

              <label className="mb-3 block text-sm font-semibold text-[#081B33]">
                Project Details
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition-all duration-300 focus:border-[#C9A03C] focus:ring-2 focus:ring-[#C9A03C]/20"
              />

            </div>

            {/* Submit Button */}

            <div className="pt-4 text-center">

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-[#C9A03C] px-12 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8ad47] hover:shadow-lg"
              >
                Request a Callback
              </button>

            </div>

          </form>

        </motion.div>

      </div>
    </section>
  );
}