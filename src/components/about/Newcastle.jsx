import { motion } from 'framer-motion'
import { newcastle } from '../../data/site'
import { fadeUp, slideFromLeft, stagger, viewport } from '../../utils/motion'
import Icon from '../common/Icon'

const IMG =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'

export default function Newcastle() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 text-cream lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-olive/40 blur-3xl" />
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
        <motion.div variants={slideFromLeft} initial="hidden" whileInView="show" viewport={viewport}>
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-champagne" />
            {newcastle.eyebrow}
          </span>
          <h2 className="heading-xl mt-3 text-4xl md:text-5xl">{newcastle.title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">{newcastle.intro}</p>

          <motion.div
            variants={stagger(0.2, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-10 space-y-6"
          >
            {newcastle.timeline.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-champagne/50 text-xs font-semibold uppercase tracking-wider text-champagne">
                    {t.year}
                  </span>
                  {i < newcastle.timeline.length - 1 && (
                    <span className="mt-1 h-full w-px flex-1 bg-cream/15" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-xl font-semibold text-cream">{t.title}</h3>
                  <p className="mt-1 text-cream/65">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-luxe">
            <img src={IMG} alt="Newcastle Infratech" className="h-[34rem] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl glass px-6 py-5 shadow-luxe">
            <div className="flex items-center gap-3">
              <Icon name="ShieldCheck" className="h-9 w-9 text-champagne" />
              <div>
                <p className="font-display text-lg font-semibold text-cream">Trusted Developer</p>
                <p className="text-xs uppercase tracking-wider text-cream/60">
                  Transparency · Quality · Value
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
