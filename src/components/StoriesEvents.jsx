import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Calendar } from 'lucide-react';

const quotes = [
  {
    name: 'Ava M.',
    role: 'Student, Class of 2026',
    text: 'I get to build things that matter. Teachers here listen, and they challenge us to try, iterate, and try again.',
  },
  {
    name: 'Jordan P.',
    role: 'Parent',
    text: 'The sense of belonging is incredible. Our child is thriving—academically, socially, and creatively.',
  },
  {
    name: 'Ravi K.',
    role: 'Alumnus',
    text: 'This school taught me how to learn, not just what to learn. It set me up for college and beyond.',
  },
];

const events = [
  { title: 'Open House & Lab Tours', date: 'Oct 14, 6:00–8:00 PM', link: '#event-1' },
  { title: 'Arts Night: Gallery & Performances', date: 'Oct 21, 5:30–8:30 PM', link: '#event-2' },
  { title: 'Athletics Showcase', date: 'Oct 28, 4:00–7:00 PM', link: '#event-3' },
  { title: 'Financial Aid Webinar', date: 'Nov 3, 7:00–7:45 PM', link: '#event-4' },
];

export default function StoriesEvents() {
  return (
    <section id="news" className="relative w-full bg-[#0b1020] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Stories */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Student Stories</h2>
            <p className="mt-2 max-w-prose text-white/70">
              Real voices from our community—curious, kind, and ready to build the future.
            </p>
            <div className="mt-6 grid gap-4">
              {quotes.map((q, i) => (
                <motion.blockquote
                  key={q.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90"
                >
                  <Quote className="mb-2 h-5 w-5 text-cyan-300" />
                  <p className="">“{q.text}”</p>
                  <footer className="mt-3 text-sm text-white/70">
                    {q.name} • {q.role}
                  </footer>
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-3xl" />
                </motion.blockquote>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Upcoming Events</h2>
                <p className="mt-2 max-w-prose text-white/70">
                  Join us to experience campus energy firsthand. Tours, showcases, and info sessions.
                </p>
              </div>
              <a href="#events" className="hidden text-sm text-cyan-300 md:block">
                View All →
              </a>
            </div>

            <div className="mt-6 grid gap-4">
              {events.map((e, i) => (
                <motion.a
                  key={e.title}
                  href={e.link}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div>
                    <div className="font-medium text-white/90">{e.title}</div>
                    <div className="text-sm text-white/60">{e.date}</div>
                  </div>
                  <Calendar className="h-5 w-5 text-cyan-300 transition group-hover:translate-x-0.5" />
                </motion.a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-2.5 text-sm font-medium text-black"
              >
                Apply Now
              </a>
              <a
                href="#tour"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/90 hover:bg-white/5"
              >
                Book a Tour
              </a>
              <a
                href="#subscribe"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/90 hover:bg-white/5"
              >
                Subscribe to Updates
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-fuchsia-500/10 to-transparent" />
    </section>
  );
}
