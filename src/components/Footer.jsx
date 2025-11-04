import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#090d1a] py-14 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-[2px]">
                <div className="h-full w-full rounded-md bg-[#090d1a]"></div>
              </div>
              <span className="font-semibold">[School Name]</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              A welcoming, innovative school where students grow as thinkers, creators, and community builders.
            </p>
            <div className="mt-4 flex items-center gap-3 text-white/80">
              <a href="#" aria-label="Instagram" className="rounded-md border border-white/10 p-2 hover:bg-white/5">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="rounded-md border border-white/10 p-2 hover:bg-white/5">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="rounded-md border border-white/10 p-2 hover:bg-white/5">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Innovation Way, City, ST</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (000) 000-0000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@example.edu</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#admissions" className="hover:text-white">Admissions</a></li>
              <li><a href="#academics" className="hover:text-white">Academics</a></li>
              <li><a href="#campus" className="hover:text-white">Campus Life</a></li>
              <li><a href="#news" className="hover:text-white">News & Events</a></li>
              <li><a href="#apply" className="hover:text-white">Apply Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90">Newsletter</h4>
            <p className="mt-3 text-sm text-white/70">Get updates on programs, events, and admissions.</p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 text-sm font-medium text-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <span>© {new Date().getFullYear()} [School Name]. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">Non-Discrimination</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
