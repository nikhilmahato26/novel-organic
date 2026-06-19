import { motion } from 'framer-motion'
import { amenities } from '../../data/site'
import { scaleIn, stagger, viewport } from '../../utils/motion'
import SectionHeading from '../common/SectionHeading'
import Icon from '../common/Icon'

export default function Amenities() {
  return (
    <section id="amenities" className="relative bg-cream py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="World-Class Amenities"
          title="A Resort Lifestyle, Every Single Day"
          subtitle="Eight signature experiences crafted to blend wellness, recreation and organic luxury."
          center
        />

        <motion.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {amenities.map((a, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-3xl shadow-sm transition-shadow duration-300 hover:shadow-luxe ${
                i === 0 || i === 5 ? 'sm:row-span-2 sm:min-h-[26rem]' : 'min-h-[20rem]'
              }`}
            >
              <img
                src={a.img}
                alt={a.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl glass">
                    <Icon name={a.icon} className="h-6 w-6 text-champagne" />
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-cream">{a.title}</h3>
                  <span className="mt-1 inline-block h-0.5 w-0 bg-champagne transition-all duration-500 group-hover:w-12" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
