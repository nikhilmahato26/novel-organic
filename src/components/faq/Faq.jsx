import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../../data/site'
import { fadeUp, stagger, viewport } from '../../utils/motion'
import SectionHeading from '../common/SectionHeading'
import Icon from '../common/Icon'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative bg-beige py-24 lg:py-32">
      <div className="container-luxe grid gap-14 lg:grid-cols-[0.9fr_1.4fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, Answered"
          subtitle="Everything you need to know about investing in Novel Organic Farms."
        />

        <motion.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="space-y-4"
        >
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? 'border-champagne/40 bg-cream shadow-luxe' : 'border-forest/10 bg-cream/60'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold text-forest md:text-xl">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-champagne text-forest' : 'bg-forest/5 text-forest'
                    }`}
                  >
                    <Icon name="ChevronDown" className="h-5 w-5" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-6 leading-relaxed text-stone">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
