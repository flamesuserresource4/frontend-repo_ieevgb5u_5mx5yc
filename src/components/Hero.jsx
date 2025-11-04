import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Calendar, Download, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Campus Life', href: '#campus' },
  { label: 'About', href: '#about' },
  { label: 'News & Events', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0b1020] text-white">
      {/* Top Nav */}
      <div className="sticky top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-[2px]">
              <div className="h-full w-full rounded-md bg-[#0b1020]"></div>
            </div>
            <span className="font-semibold tracking-wide">[School Name]</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-white/80 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#apply"
              className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-medium text-black md:inline-flex"
            >
              Apply Now
            </a>
            <a
              href="#tour"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5"
            >
              <Calendar className="h-4 w-4" /> Book a Tour
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Rocket className="h-3.5 w-3.5" /> Futuristic Learning Environment
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              [School Name]
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                [Short visionary tagline]
              </span>
            </h1>
            <p className="max-w-prose text-white/80">
              A forward-thinking community where curiosity becomes mastery. We pair human-centered teaching with cutting-edge tools so every learner can explore, create, and lead with confidence.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#apply"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-medium text-black shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:shadow-[0_0_40px_rgba(244,114,182,0.35)]"
              >
                Start Application
              </a>
              <a
                href="#tour"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur hover:bg-white/10"
              >
                Book a Campus Tour
              </a>
              <a
                href="#prospectus"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-white/90 hover:bg-white/5"
              >
                <Download className="h-4 w-4" /> Download Prospectus
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <span>High-tech warmth. Human connection.</span>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> (000) 000-0000
              </span>
            </div>
          </motion.div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative h-[420px] w-full md:h-[560px]">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10">
            <Spline
              scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* Soft gradient overlays (non-blocking) */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400/10 via-transparent to-fuchsia-500/10" />
          <div className="pointer-events-none absolute -bottom-16 left-1/2 h-48 w-[80%] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
