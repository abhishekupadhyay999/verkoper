"use client";

import { motion } from "framer-motion";
import {
  HiOutlineOfficeBuilding,
  HiOutlinePresentationChartLine,
  HiOutlineSpeakerphone,
  HiOutlineUsers,
  HiOutlineColorSwatch,
  HiOutlineClipboardList,
  HiOutlineChartBar,
} from "react-icons/hi";

const services = [
  {
    icon: HiOutlinePresentationChartLine,
    title: "Project Launch Strategy",
    description:
      "Market research, pricing analysis, product positioning and go-to-market planning.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Sales & Marketing Management",
    description:
      "Dedicated sales teams, site operations, customer follow-ups and booking closures.",
  },
  {
    icon: HiOutlineSpeakerphone,
    title: "Digital Marketing",
    description:
      "Google Ads, Meta campaigns, lead generation, landing pages and social media marketing.",
  },
  {
    icon: HiOutlineUsers,
    title: "Channel Partner Management",
    description:
      "Broker engagement programs, referral partnerships and CP network development.",
  },
  {
    icon: HiOutlineColorSwatch,
    title: "Branding & Promotions",
    description:
      "Project branding, brochures, creative design, outdoor advertising and launch events.",
  },
  {
    icon: HiOutlineClipboardList,
    title: "CRM & Lead Management",
    description:
      "Lead tracking, follow-up systems, customer database management and sales reports.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8FAFC] pt-32 pb-24"
    >
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-8xl text-x1 leading-9 text-slate-300 text-center"
        >

          <h2 className="mt-7 text-5xl md:text-6xl font-serif font-semibold text-[#081B33] leading-tight">
            Everything You Need
            <br />
            To Sell Faster
          </h2>

          <p className="mt-6 max-w-8x1 text-1g leading-8 text-slate-600 text-centre">
            Verkoper Property Solutions provides complete sales,
            marketing and developer-focused solutions—from launch
            planning and branding to lead generation, customer
            engagement and inventory closures.
          </p>
        </motion.div>

        {/* Featured Service */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] bg-[#081B33] p-12 shadow-2xl"
        >
          <div className="flex items-start gap-8">

            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#C9A03C]/20">
              <HiOutlineOfficeBuilding className="text-4xl text-[#C9A03C]" />
            </div>

            <div>

              <p className="uppercase tracking-[4px] font-semibold text-[#C9A03C]">
                Featured Service
              </p>

              <h3 className="mt-4 text-4xl font-serif font-semibold text-white">
                Sole Selling Mandates
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
                We become your exclusive sales partner, managing strategy,
                branding, marketing, lead generation, customer engagement
                and inventory closures while you stay focused on delivering
                exceptional real estate projects.
              </p>

            </div>

          </div>
        </motion.div>

        {/* Service Grid */}
                {/* Service Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A03C] hover:shadow-xl"
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A03C]/10 transition-all duration-300 group-hover:bg-[#C9A03C]">

                  <Icon className="text-3xl text-[#C9A03C] transition-all duration-300 group-hover:text-white" />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-semibold leading-snug text-[#081B33]">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-5 flex-grow text-base leading-8 text-slate-600">
                  {service.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}