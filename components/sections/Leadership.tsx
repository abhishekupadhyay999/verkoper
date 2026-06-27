"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Hitesh Jagtap",
    role: "CEO & Co-Founder",
    description:
      "Leading the company's vision, business strategy and developer partnerships.",
  },
  {
    name: "Chetan Gawde",
    role: "Founder & CFO",
    description:
      "10+ years of experience in finance, project sales and real estate operations.",
  },
  {
    name: "Pawan Upadhyay",
    role: "CSO & Co-Founder",
    description:
      "Driving sales strategy, channel partnerships and business growth.",
  },
  {
    name: "Divyesh Bhoir",
    role: "CRO & Co-Founder",
    description:
      "Focused on customer relationships, project execution and operational excellence.",
  },
  {
    name: "Mahesh Chavan",
    role: "Director – Sales & Marketing",
    description:
      "Leading marketing campaigns, sales operations and customer acquisition.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="bg-[#F8FAFC] py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-[#C9A03C]">
            Leadership
          </p>

          <h2 className="mt-4 text-5xl text-[#081B33]">
            Meet The Leadership Team
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            A multidisciplinary team committed to helping developers
            achieve successful project launches and faster sales.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A03C] hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#081B33] text-2xl font-bold text-[#C9A03C]">
                {leader.name.charAt(0)}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#081B33]">
                {leader.name}
              </h3>

              <p className="mt-2 font-medium text-[#C9A03C]">
                {leader.role}
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}