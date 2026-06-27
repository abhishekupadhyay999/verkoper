"use client";

import { motion } from "framer-motion";
import {
  HiOutlineOfficeBuilding,
  HiOutlineHome,
  HiOutlineChartBar,
  HiOutlineSpeakerphone,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const developer = [
  "Construction & Project Delivery",
  "Planning & Execution",
  "Quality Control",
];

const verkoper = [
  {
    icon: HiOutlineChartBar,
    text: "Sales Strategy",
  },
  {
    icon: HiOutlineSpeakerphone,
    text: "Marketing Campaigns",
  },
  {
    icon: HiOutlineUserGroup,
    text: "Lead Generation",
  },
  {
    icon: HiOutlineCheckCircle,
    text: "Site Visits & Closures",
  },
];

export default function PartnershipModel() {
  return (
    <section className="bg-[#081B33] py-28">
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="uppercase tracking-[4px] text-[#C9A03C] font-semibold">
            Our Partnership Model
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            You Build.
            <br />
            <span className="text-[#C9A03C]">
              We Sell.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            We become your dedicated sales and marketing partner,
            allowing your team to focus on construction while
            Verkoper manages the complete customer acquisition journey.
          </p>
        </motion.div>

        {/* Main Card */}

        <div className="mt-20 rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-lg">

          <div className="grid lg:grid-cols-2">

            {/* Developer */}

            <div className="border-b border-white/10 p-12 lg:border-b-0 lg:border-r">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A03C]/20">

                  <HiOutlineHome className="text-3xl text-[#C9A03C]" />

                </div>

                <div>

                  <p className="uppercase tracking-[3px] text-[#C9A03C]">
                    Developer
                  </p>

                  <h3 className="text-3xl font-bold text-white">
                    You Focus On
                  </h3>

                </div>

              </div>

              <div className="mt-10 space-y-6">

                {developer.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="h-3 w-3 rounded-full bg-[#C9A03C]" />

                    <p className="text-lg text-slate-300">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Verkoper */}

            <div className="p-12">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A03C]/20">

                  <HiOutlineOfficeBuilding className="text-3xl text-[#C9A03C]" />

                </div>

                <div>

                  <p className="uppercase tracking-[3px] text-[#C9A03C]">
                    Verkoper
                  </p>

                  <h3 className="text-3xl font-bold text-white">
                    We Handle
                  </h3>

                </div>

              </div>

              <div className="mt-10 space-y-6">

                {verkoper.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.text}
                      className="flex items-center gap-4"
                    >
                      <Icon className="text-2xl text-[#C9A03C]" />

                      <p className="text-lg text-slate-300">
                        {item.text}
                      </p>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-semibold text-white">
            One Dedicated Partner.
            <span className="text-[#C9A03C]">
              {" "}
              Complete Sales Responsibility.
            </span>
          </h3>

          <a
            href="#contact"
            className="btn-primary mt-10 inline-flex"
          >
            Let's Talk
          </a>
        </motion.div>

      </div>
    </section>
  );
}