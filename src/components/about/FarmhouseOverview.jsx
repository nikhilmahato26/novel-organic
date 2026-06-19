import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { farmhouseOverview } from '../../data/site'
import { fadeUp, viewport } from '../../utils/motion'

const IMG =
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80'

export default function FarmhouseOverview() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1])

  return (
    <section ref={ref} className="relative flex min-h-[90vh] items-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img src={IMG} alt="Luxury farmhouse landscape" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/90 via-forest/60 to-forest/30" />

      <div className="container-luxe">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-2xl text-cream"
        >
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-champagne" />
            {farmhouseOverview.eyebrow}
          </span>
          <h2 className="heading-xl mt-3 text-4xl md:text-5xl lg:text-6xl">
            {farmhouseOverview.title}
          </h2>
          {farmhouseOverview.paragraphs.map((p, i) => (
            <p key={i} className="mt-6 text-lg leading-relaxed text-cream/80">
              {p}
            </p>
          ))}
          <a href="#schedule" className="btn-gold mt-9">
            Reserve Your Plot
          </a>
        </motion.div>
      </div>
    </section>
  )
}
