import { motion } from 'framer-motion'
import { brand, heroCard, heroStats } from '../../data/site'
import { fadeUp, stagger, slideFromRight } from '../../utils/motion'
import Icon from '../common/Icon'

// Replace POSTER / VIDEO_SRC with your own assets in src/assets/videos.
const POSTER =
  'https://images.pexels.com/photos/9909101/pexels-photo-9909101.jpeg'
const VIDEO_SRC =
  'https://cdn.coverr.co/videos/coverr-aerial-view-of-a-green-field-1080p.mp4'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/40 to-forest/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-transparent to-transparent" />
      </div>

      {/* Floating nature accents */}
      <div className="pointer-events-none absolute left-[8%] top-1/3 h-24 w-24 animate-float rounded-full border border-champagne/20" />
      <div className="pointer-events-none absolute right-[35%] top-1/4 hidden h-16 w-16 animate-float rounded-full bg-champagne/5 blur-xl md:block" />

      <div className="container-luxe relative flex min-h-screen items-center pt-28 pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Left content */}
          <motion.div variants={stagger(0.2, 0.15)} initial="hidden" animate="show">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium tracking-wide text-cream"
            >
              <span className="text-base">🌿</span> {brand.policy}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="heading-xl mt-6 text-5xl text-cream sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
            >
              Where Nature <br />
              <span className="text-gold-gradient">Welcomes</span> You Home
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80"
            >
              {brand.subheading}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <a href="#schedule" className="btn-gold">
                Schedule Site Visit <Icon name="ArrowRight" className="h-4 w-4" />
              </a>
              <a href="#about" className="btn-ghost">
                Explore Project
              </a>
            </motion.div>

            {/* Floating statistics */}
            <motion.div
              variants={fadeUp}
              className="mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl glass sm:grid-cols-4"
            >
              {heroStats.map((s, i) => (
                <div key={i} className="px-5 py-5 text-center">
                  <div className="font-display text-2xl font-semibold text-champagne">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-cream/70">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right floating glass card */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="show"
            className="relative lg:justify-self-end"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-champagne/10 blur-2xl" />
            <div className="relative w-full max-w-sm rounded-[2rem] glass p-8 shadow-luxe">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-champagne/20">
                  <Icon name="Sparkles" className="h-6 w-6 text-champagne" />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold text-cream">Project Highlights</p>
                  <p className="text-xs uppercase tracking-wider text-cream/60">At a glance</p>
                </div>
              </div>
              <ul className="space-y-4">
                {heroCard.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.12 }}
                    className="flex items-center gap-3 text-cream/90"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10">
                      <Icon name={item.icon} className="h-4 w-4 text-champagne" />
                    </span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <Icon name="ChevronDown" className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
