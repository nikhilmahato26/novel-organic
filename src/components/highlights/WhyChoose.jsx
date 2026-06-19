import { motion } from 'framer-motion'
import { whyChoose } from '../../data/site'
import { fadeUp, scaleIn, stagger, viewport } from '../../utils/motion'
import SectionHeading from '../common/SectionHeading'
import Icon from '../common/Icon'

export default function WhyChoose() {
  return (
    <section className="relative bg-beige py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeading eyebrow={whyChoose.eyebrow} title={whyChoose.title} center />

        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChoose.features.map((f, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-forest/5 bg-cream p-8 shadow-sm transition-shadow duration-300 hover:shadow-luxe"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-olive/5 transition-transform duration-500 group-hover:scale-150" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-forest text-champagne transition-colors duration-300 group-hover:bg-champagne group-hover:text-forest">
                <Icon name={f.icon} className="h-7 w-7" />
              </span>
              <h3 className="relative mt-6 font-display text-2xl font-semibold text-forest">
                {f.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-stone">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
