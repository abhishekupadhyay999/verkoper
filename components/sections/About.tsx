"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiCheckCircle,
} from "react-icons/hi";

const points = [
  "Exclusive Sole Selling Mandates",
  "End-to-End Sales Management",
  "Developer-Focused Marketing",
  "Local Expertise Across Palghar, Vasai & Virar",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F8FAFC] section-padding"
    >
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <motion.div
            initial={{opacity:0,x:-40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/office/office1.PNG"
                alt="Verkoper Office"
                width={450}
                height={450}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{opacity:0,x:40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >

            <p className="uppercase tracking-[4px] text-[#C9A03C] font-semibold">
              Who We Are
            </p>

            <h2 className="mt-4 text-5xl text-[#081B33]">
              Your Strategic Partner
              <br />
              in Real Estate Success
            </h2>

            <p className="mt-8 text-lg text-slate-600">
              Verkoper Property Solutions specializes in Sole Selling
              Mandates and Project Marketing for developers across
              Palghar, Vasai, Virar and the Mumbai Metropolitan Region.

              We become an extension of your sales team,
              managing everything from marketing and lead generation
              to customer acquisition and booking closures.
            </p>

            <div className="mt-10 space-y-5">

              {points.map((item)=>(
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <HiCheckCircle
                    className="text-3xl text-[#C9A03C]"
                  />

                  <span className="text-lg text-[#081B33]">
                    {item}
                  </span>

                </div>
              ))}

            </div>

            <a
              href="#services"
              className="btn-primary mt-10 inline-flex"
            >
              Explore Services
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}