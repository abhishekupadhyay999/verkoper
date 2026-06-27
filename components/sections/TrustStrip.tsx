"use client";

import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineOfficeBuilding,
  HiOutlineChartBar,
  HiOutlineUsers,
} from "react-icons/hi";

const features = [
  {
    icon: HiOutlineBadgeCheck,
    title: "Sole Selling Experts",
  },
  {
    icon: HiOutlineOfficeBuilding,
    title: "Developer Focused",
  },
  {
    icon: HiOutlineChartBar,
    title: "Digital Marketing",
  },
  {
    icon: HiOutlineUsers,
    title: "Channel Partner Network",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-2xl p-4 transition hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A03C]/10">
                  <Icon className="text-3xl text-[#C9A03C]" />
                </div>

                <h3 className="font-semibold text-[#081B33]">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}