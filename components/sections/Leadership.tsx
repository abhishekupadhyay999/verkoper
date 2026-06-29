"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Chetan Gawde",
    designation: "Founder & CFO",
    bio:
      "With over 10 years of experience in the real estate industry, Chetan Gawde brings strong expertise in financial management, business operations, project sales, and strategic planning. As Founder & CFO, he leads the company's financial strategy and long-term operational growth while ensuring transparency and professionalism across every project.",
  },

  {
    name: "Hitesh Jagtap",
    designation: "CEO & Co-Founder",
    bio:
      "With over 13 years of leadership experience across the automobile and real estate industries, Hitesh Jagtap leads Verkoper's vision, strategic planning, business development, and operational excellence while building long-term value for developers, investors, and homebuyers.",
  },

  {
    name: "Divesh Bhoir",
    designation: "Managing Director",
    bio:
      "Backed by more than 10 years of real estate experience and a strong family legacy in construction and development, Divesh Bhoir oversees company operations, project execution, strategic planning, and business growth with a commitment to transparency and ethical business practices.",
  },

  {
    name: "Pawan Upadhyay",
    designation: "CSO & Co-Founder",
    bio:
      "An experienced sales strategist with extensive real estate expertise, Pawan Upadhyay leads sales strategy, project marketing, and client relationships. His customer-first approach helps developers achieve successful project launches while building long-term trust.",
  },

  {
    name: "Mahesh Chavan",
    designation: "Director – Sales & Marketing",
    bio:
      "With over 10 years of experience in residential, commercial, and investment real estate, Mahesh Chavan leads sales strategy, business development, and marketing initiatives while delivering transparent, customer-focused property solutions.",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
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
            OUR LEADERSHIP
          </p>

          <h2 className="mt-5 text-5xl font-serif font-semibold leading-tight text-[#081B33] md:text-6xl">
            Meet The Leadership
            <br />
            Behind Verkoper
          </h2>

          <p className="mx-auto mt-8 max-w-8xl text-lg leading-9 text-[#475569]">
            Our leadership team brings together decades of expertise in
            real estate, finance, sales, marketing, and business strategy,
            delivering trusted guidance and exceptional value for every project.
          </p>

        </motion.div>

        {/* Leadership Cards */}
                {/* Leadership Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {leaders.map((leader, index) => (

            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A03C] hover:shadow-xl"
            >

              {/* Gold Accent */}

              <div className="mb-8 h-1 w-20 rounded-full bg-[#C9A03C]" />

              {/* Name */}

              <h3 className="text-3xl font-semibold text-[#081B33]">
                {leader.name}
              </h3>

              {/* Designation */}

              <p className="mt-3 text-base font-semibold uppercase tracking-[2px] text-[#C9A03C]">
                {leader.designation}
              </p>

              {/* Divider */}

              <div className="my-6 h-px w-full bg-slate-200" />

              {/* Bio */}

              <p className="leading-8 text-[#475569]">
                {leader.bio}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}