import { motion } from 'framer-motion'
import { investmentStats } from '../../data/site'
import { fadeUp, scaleIn, stagger, viewport } from '../../utils/motion'
import useCountUp from '../../hooks/useCountUp'
import SectionHeading from '../common/SectionHeading'

function StatCard({ stat }) {
  const { value, ref } = useCountUp(stat.value, 2200)
  const shown = stat.display
    ? stat.display
    : `${stat.prefix || ''}${value}${stat.suffix || ''}`

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -8 }}
      ref={ref}
      className="group relative overflow-hidden rounded-3xl border border-champagne/20 bg-gradient-to-b from-white/[0.06] to-transparent p-8 text-center backdrop-blur-sm"
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold-grad transition-transform duration-500 group-hover:scale-x-100" />
      <div className="font-display text-4xl font-semibold text-champagne md:text-5xl">{shown}</div>
      <div className="mx-auto mt-4 h-px w-10 bg-champagne/40" />
      <p className="mt-4 text-sm leading-snug text-cream/75">{stat.label}</p>
    </motion.div>
  )
}

export default function Investment() {
  return (
    <section id="investment" className="relative overflow-hidden bg-forest py-24 text-cream lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-champagne/5 blur-3xl" />
      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Investment Opportunity"
          title="Why Investors Are Choosing Novel Organic Farms"
          subtitle="A green investment positioned in NCR's highest-growth corridor, backed by policy and infrastructure."
          light
          center
        />

        <motion.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {investmentStats.map((s, i) => (
            <StatCard key={i} stat={s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
