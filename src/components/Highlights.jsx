import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, BookOpen, Cpu, Palette } from 'lucide-react';

const stats = [
  { label: 'Student–Teacher Ratio', value: '[X:1]' },
  { label: 'Clubs & Societies', value: '[Y+]' },
  { label: 'College Placement', value: '[Z%]' },
  { label: 'Scholarships Awarded', value: '100+ / year' },
];

const programs = [
  {
    icon: Cpu,
    title: 'STEM Innovation',
    desc: 'Hands-on labs, robotics, and real-world problem solving.',
  },
  {
    icon: Palette,
    title: 'Arts & Design',
    desc: 'Studios, performance spaces, and exhibition showcases.',
  },
  {
    icon: BookOpen,
    title: 'Humanities & Global',
    desc: 'Critical thinking, global perspectives, and leadership.',
  },
  {
    icon: Users,
    title: 'Community & Service',
    desc: 'Mentorship, service learning, and impact projects.',
  },
];

export default function Highlights() {
  return (
    <section className="relative w-full bg-[#0b1020] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
            >
              <div className="text-2xl font-semibold tracking-tight text-cyan-300">{s.value}</div>
              <div className="mt-1 text-xs text-white/70">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Programs */}
        <div id="academics" className="mt-14 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Signature Programs</h2>
            <p className="mt-2 max-w-prose text-white/70">
              Explore pathways designed for different strengths and dreams. Learn by doing in
              studios, labs, and real-world settings.
            </p>
          </div>
          <a
            href="#academics"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5 md:inline-flex"
          >
            Explore Programs
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {programs.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 transition hover:from-white/[0.09] hover:to-white/[0.05]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3 text-cyan-300">
                <p.icon className="h-5 w-5" />
              </div>
              <div className="text-lg font-medium">{p.title}</div>
              <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              <span className="mt-3 inline-block text-sm text-cyan-300">Learn More →</span>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </motion.div>

        {/* Trust Row */}
        <div className="mt-14 grid grid-cols-2 items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white/70 backdrop-blur md:grid-cols-6">
          <span className="text-sm">Accredited by XYZ</span>
          <span className="text-sm">Winner: Innovation in Education</span>
          <span className="text-sm">Partner: Global Robotics League</span>
          <span className="text-sm">Apple Distinguished School</span>
          <span className="text-sm">SAT/ACT Prep Center</span>
          <span className="text-sm">Community Impact Awards</span>
        </div>
      </div>
      {/* Bottom glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-400/10 to-transparent" />
    </section>
  );
}
