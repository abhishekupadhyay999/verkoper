"use client";

import Image from "next/image";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#061529] border-t border-white/10">
      <div className="container-custom py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>
            <Image
              src="/logo/logo.png"
              alt="Verkoper Property Solutions"
              width={170}
              height={60}
            />

            <p className="mt-6 leading-8 text-slate-400">
              Verkoper Property Solutions is a dedicated real estate
              sales and project marketing company helping developers
              accelerate project sales through strategic planning,
              branding and exclusive sole selling mandates.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li>
                <a href="#home" className="hover:text-[#C9A03C] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-[#C9A03C] transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#C9A03C] transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#leadership" className="hover:text-[#C9A03C] transition">
                  Leadership
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#C9A03C] transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-xl font-semibold text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li>Sole Selling Mandates</li>

              <li>Project Marketing</li>

              <li>Sales Management</li>

              <li>Digital Marketing</li>

              <li>Channel Partner Network</li>

            </ul>
          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex gap-4">

                <HiOutlinePhone className="mt-1 text-xl text-[#C9A03C]" />

                <div>

                  <p className="text-slate-400">Phone</p>

                  <p className="text-white">
                    +91 95451 88288
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <HiOutlineMail className="mt-1 text-xl text-[#C9A03C]" />

                <div>

                  <p className="text-slate-400">Email</p>

                  <p className="text-white break-all">
                    sales@verkoper.co.in
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <HiOutlineLocationMarker className="mt-1 text-xl text-[#C9A03C]" />

                <div>

                  <p className="text-slate-400">Office</p>

                  <p className="text-white">
                    Palghar • Vasai • Virar • MMR
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-center md:flex-row">

          <p className="text-slate-500">
            © 2026 Verkoper Property Solutions. All Rights Reserved.
          </p>

          <p className="mt-4 text-slate-500 md:mt-0">
            Designed & Developed with ❤️ by Verkoper Property Solutions
          </p>

        </div>

      </div>
    </footer>
  );
}