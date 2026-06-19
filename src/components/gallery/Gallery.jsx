import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gallery } from '../../data/site'
import { scaleIn, stagger, viewport } from '../../utils/motion'
import SectionHeading from '../common/SectionHeading'
import Icon from '../common/Icon'

export default function Gallery() {
  const [index, setIndex] = useState(null)
  const open = index !== null

  const next = () => setIndex((i) => (i + 1) % gallery.length)
  const prev = () => setIndex((i) => (i - 1 + gallery.length) % gallery.length)

  return (
    <section id="gallery" className="relative bg-cream py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Gallery"
          title="A Glimpse Into Estate Living"
          subtitle="From organic landscapes to refined interiors — explore the world of Novel Organic Farms."
          center
        />

        <motion.div
          variants={stagger(0.06, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
        >
          {gallery.map((g, i) => (
            <motion.button
              key={i}
              variants={scaleIn}
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-sm"
            >
              <img
                src={g.img}
                alt={g.category}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-5 text-sm font-semibold uppercase tracking-wider text-cream">
                  {g.category}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndex(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-forest/95 p-6 backdrop-blur-md"
          >
            <button
              onClick={() => setIndex(null)}
              className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full glass text-cream"
            >
              <Icon name="X" className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 grid h-12 w-12 -rotate-180 place-items-center rounded-full glass text-cream md:left-10"
            >
              <Icon name="ArrowRight" className="h-5 w-5" />
            </button>
            <motion.figure
              key={index}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-4xl overflow-hidden rounded-2xl"
            >
              <img src={gallery[index].img} alt={gallery[index].category} className="max-h-[80vh] w-full object-contain" />
              <figcaption className="bg-forest py-3 text-center text-sm uppercase tracking-wider text-champagne">
                {gallery[index].category}
              </figcaption>
            </motion.figure>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 grid h-12 w-12 place-items-center rounded-full glass text-cream md:right-10"
            >
              <Icon name="ArrowRight" className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
