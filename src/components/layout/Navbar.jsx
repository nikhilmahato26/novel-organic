import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, brand } from '../../data/site'
import Icon from '../common/Icon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-forest/90 backdrop-blur-xl shadow-luxe py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-luxe flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 text-cream">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-champagne/60">
            <Icon name="Leaf" className="h-5 w-5 text-champagne" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">{brand.name}</span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-champagne/80">
              Newcastle Infratech
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide text-cream/80 transition-colors hover:text-champagne"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#schedule" className="hidden btn-gold lg:inline-flex">
          Schedule Visit
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-cream/30 text-cream lg:hidden"
          aria-label="Toggle menu"
        >
          <Icon name={open ? 'X' : 'Menu'} className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-forest/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-luxe flex flex-col gap-1 py-6">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-cream/90 transition-colors hover:bg-white/5 hover:text-champagne"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a href="#schedule" onClick={() => setOpen(false)} className="btn-gold w-full">
                  Schedule Visit
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
