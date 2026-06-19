import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { videos } from '../../data/site'
import { fadeUp, stagger, viewport } from '../../utils/motion'
import SectionHeading from '../common/SectionHeading'
import Icon from '../common/Icon'

export default function VideoShowcase() {
  const [active, setActive] = useState(null)

  return (
    <section className="relative overflow-hidden bg-beige py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Lifestyle Film"
          title="Experience It In Motion"
          subtitle="Step inside the estate through our cinematic lifestyle films."
          center
        />

        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {videos.map((v, i) => (
            <motion.button
              key={i}
              variants={fadeUp}
              onClick={() => setActive(v)}
              whileHover={{ y: -8 }}
              className="group relative block overflow-hidden rounded-3xl text-left shadow-sm transition-shadow hover:shadow-luxe"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-champagne/90 text-forest shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <span className="absolute h-20 w-20 animate-ping rounded-full bg-champagne/40" />
                    <Icon name="Play" className="ml-1 h-7 w-7 fill-forest" />
                  </span>
                </div>
              </div>
              <div className="bg-cream p-6">
                <h3 className="font-display text-xl font-semibold text-forest">{v.title}</h3>
                <p className="mt-2 text-sm text-stone">{v.desc}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-forest/95 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl shadow-luxe"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full glass text-cream"
              >
                <Icon name="X" className="h-5 w-5" />
              </button>
              <div className="relative aspect-video">
                <img src={active.thumb} alt={active.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 grid place-items-center bg-forest/40">
                  <div className="text-center text-cream">
                    <Icon name="Play" className="mx-auto h-14 w-14 fill-champagne text-champagne" />
                    <p className="mt-4 font-display text-2xl">{active.title}</p>
                    <p className="mt-1 text-sm text-cream/70">Add your video source in the data file</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
