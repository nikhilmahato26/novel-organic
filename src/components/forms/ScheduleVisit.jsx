import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, slideFromLeft, slideFromRight, stagger, viewport } from '../../utils/motion'
import Icon from '../common/Icon'

const BG =
  'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80'

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', icon: 'Sparkles' },
  { name: 'mobile', label: 'Mobile Number', type: 'tel', icon: 'Phone' },
  { name: 'email', label: 'Email Address', type: 'email', icon: 'Mail' },
]

export default function ScheduleVisit() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.target.reset()
  }

  return (
    <section id="schedule" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <img src={BG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-forest/85" />
      </div>

      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-cream"
        >
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-champagne" />
            Schedule Site Visit
          </span>
          <h2 className="heading-xl mt-3 text-4xl md:text-5xl lg:text-[3.4rem]">
            Walk The Estate, <br /> Feel The Future
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
            Book a private site visit and experience the serenity, scale and investment potential of
            Novel Organic Farms first-hand. Our team will tailor the visit to you.
          </p>
          <ul className="mt-8 space-y-3">
            {['Personal guided tour', 'Investment consultation', 'No obligation'].map((t) => (
              <li key={t} className="flex items-center gap-3 text-cream/85">
                <Icon name="BadgeCheck" className="h-5 w-5 text-champagne" /> {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={slideFromRight}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="rounded-[2rem] glass p-8 shadow-luxe md:p-10"
        >
          <motion.div variants={stagger(0.1, 0.1)} initial="hidden" whileInView="show" viewport={viewport} className="space-y-5">
            {fields.map((f) => (
              <motion.div variants={fadeUp} key={f.name}>
                <label className="mb-2 block text-xs uppercase tracking-wider text-cream/70">
                  {f.label}
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 transition-colors focus-within:border-champagne">
                  <Icon name={f.icon} className="h-5 w-5 text-champagne" />
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    placeholder={f.label}
                    className="w-full bg-transparent py-3.5 text-cream placeholder:text-cream/40 focus:outline-none"
                  />
                </div>
              </motion.div>
            ))}
            <motion.div variants={fadeUp}>
              <label className="mb-2 block text-xs uppercase tracking-wider text-cream/70">
                Comment or Message
              </label>
              <div className="flex gap-3 rounded-xl border border-white/20 bg-white/5 px-4 transition-colors focus-within:border-champagne">
                <Icon name="MessageSquare" className="mt-3.5 h-5 w-5 shrink-0 text-champagne" />
                <textarea
                  rows={3}
                  name="message"
                  placeholder="Tell us what you're looking for..."
                  className="w-full resize-none bg-transparent py-3.5 text-cream placeholder:text-cream/40 focus:outline-none"
                />
              </div>
            </motion.div>
            <motion.button
              variants={fadeUp}
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="btn-gold w-full"
            >
              {sent ? 'Thank You — We’ll Be In Touch' : 'Schedule A Visit'}
              {!sent && <Icon name="ArrowRight" className="h-4 w-4" />}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
