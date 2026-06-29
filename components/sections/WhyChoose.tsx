"use client";

import { motion } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineLocationMarker,
  HiOutlineUsers,
  HiOutlineChartSquareBar,
  HiOutlineOfficeBuilding,
  HiOutlineSparkles,
} from "react-icons/hi";

const reasons = [
  {
    icon: HiOutlineOfficeBuilding,
    title: "Developer Focused",
    description:
      "We work exclusively with real estate developers, providing complete project marketing and sole selling solutions.",
  },
  {
    icon: HiOutlineLocationMarker,
    title: "Local Market Expertise",
    description:
      "Deep understanding of Palghar, Vasai, Virar, Boisar, Naigaon and the MMR region.",
  },
  {
    icon: HiOutlineUsers,
    title: "Strong Channel Network",
    description:
      "Extensive broker and channel partner relationships to maximize project reach.",
  },
  {
    icon: HiOutlineChartSquareBar,
    title: "Digital-First Strategy",
    description:
      "Google Ads, Meta campaigns and data-driven marketing to generate quality leads.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Transparent Reporting",
    description:
      "Regular updates, lead tracking and complete visibility throughout the sales process.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Single Point Accountability",
    description:
      "One dedicated partner managing strategy, marketing, sales and customer closures.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#081B33] py-24">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-8xl flex flex-col items-center text-center"
        >
          <p className="uppercase tracking-[4px] text-[#C9A03C] font-semibold text-center">
            Why Choose Verkoper
          </p>

          <h2 className="mt-6 text-5xl md-text-5x1 text-white text-centre">
            Your Trusted Sales &
            <br />
            Marketing Partner
          </h2>

          <p className="mt-6 max-w-[560px] text-lg text-slate-300">
            We combine local market knowledge, digital expertise and
            dedicated sales execution to help developers achieve faster
            project sales with complete transparency.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A03C] hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A03C]/20 transition-all duration-300 group-hover:bg-[#C9A03C]">
                  <Icon className="text-3xl text-[#C9A03C] transition-all duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}