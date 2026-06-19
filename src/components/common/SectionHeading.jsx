import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../../utils/motion'

export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <span className="eyebrow mb-4">
          <span className="h-px w-8 bg-champagne" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`heading-xl mt-3 text-4xl md:text-5xl lg:text-[3.4rem] ${
          light ? 'text-cream' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-cream/70' : 'text-stone'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
