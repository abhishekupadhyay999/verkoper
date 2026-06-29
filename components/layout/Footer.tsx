"use client";

import Link from "next/link";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#081B33] text-white">

      <div className="container-custom py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-serif font-semibold">
              Verkoper
            </h2>

            <p className="mt-1 text-[#C9A03C] font-medium">
              Property Solutions
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Delivering strategic real estate sales, project marketing,
              and sole selling solutions that help developers maximize
              project success with transparency, professionalism,
              and long-term value.
            </p>

          </div>

          {/* Corporate Office */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Corporate Office
            </h3>

            <div className="flex items-start gap-3">

              <HiOutlineLocationMarker className="mt-1 text-2xl text-[#C9A03C]" />

              <p className="leading-8 text-slate-300">
                105, Kanchan Business Center,
                <br />
                Opp. Zudio,
                <br />
                Mahim-Manor Road,
                <br />
                Palghar West,
                <br />
                Maharashtra - 401404
              </p>

            </div>

          </div>

          {/* Branch Office */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Branch Office
            </h3>

            <div className="flex items-start gap-3">

              <HiOutlineLocationMarker className="mt-1 text-2xl text-[#C9A03C]" />

              <p className="leading-8 text-slate-300">
                248, Shree Ram Square,
                <br />
                Shreeram Nagar,
                <br />
                Vartak Ward,
                <br />
                Virar West,
                <br />
                Maharashtra - 401303
              </p>

            </div>

          </div>

          {/* Quick Links */}
                    <div>

            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="#home"
                  className="text-slate-300 transition hover:text-[#C9A03C]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#about"
                  className="text-slate-300 transition hover:text-[#C9A03C]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="text-slate-300 transition hover:text-[#C9A03C]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="#leadership"
                  className="text-slate-300 transition hover:text-[#C9A03C]"
                >
                  Leadership
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="text-slate-300 transition hover:text-[#C9A03C]"
                >
                  Contact
                </Link>
              </li>

            </ul>

            {/* Contact */}

            <div className="mt-10">

              <h3 className="mb-6 text-xl font-semibold">
                Contact
              </h3>

              <div className="space-y-5">

                <div className="flex items-center gap-3">

                  <HiOutlinePhone className="text-xl text-[#C9A03C]" />

                  <span className="text-slate-300">
                    +91 95455 88688
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <HiOutlineMail className="text-xl text-[#C9A03C]" />

                  <span className="text-slate-300">
                    info@verkoperpropertysolutions.com
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Verkoper Property Solutions.
              All Rights Reserved.
            </p>

            <p className="text-sm text-slate-400">
              Designed & Developed by
              <span className="ml-1 font-medium text-[#C9A03C]">
                Verkoper Property Solutions
              </span>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}