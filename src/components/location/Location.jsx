import { useState } from 'react'
import { motion } from 'framer-motion'
import { locationAdvantages } from '../../data/site'
import { fadeUp, stagger, viewport } from '../../utils/motion'
import SectionHeading from '../common/SectionHeading'
import Icon from '../common/Icon'

export default function Location() {
  const [isMapOpen, setIsMapOpen] = useState(false)

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#143226] py-24 text-cream lg:py-32"
    >
      {/* Decorative route lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 120 Q 400 40 800 200 T 1600 160"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
        />
        <motion.path
          d="M 0 400 Q 500 520 1000 360 T 1800 420"
          fill="none"
          stroke="#2D6A4F"
          strokeWidth="2"
          strokeDasharray="4 12"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        />
      </svg>

      <div className="container-luxe relative">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Heading & Advantages */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <SectionHeading
              eyebrow="Location Advantage"
              title="Perfectly Connected, Beautifully Secluded"
              subtitle="At the heart of NCR's fastest-growing corridor — minutes from everything that matters."
              light
            />

            <motion.div
              variants={stagger(0.08, 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            >
              {locationAdvantages.map((l, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, x: 2 }}
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-champagne/40"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-champagne/15 transition-colors group-hover:bg-champagne/30">
                    <Icon
                      name={l.place.includes('Metro') ? 'Train' : l.place.includes('Airport') ? 'Plane' : 'MapPin'}
                      className="h-5 w-5 text-champagne"
                    />
                  </span>
                  <div>
                    <div className="font-display text-lg font-semibold text-champagne leading-tight">{l.time}</div>
                    <div className="mt-0.5 text-xs text-cream/80 leading-snug">{l.place}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: High-Res Map Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-7 flex flex-col items-center"
          >
            <div 
              onClick={() => setIsMapOpen(true)}
              className="group relative w-full overflow-hidden rounded-[2rem] border-2 border-champagne/20 shadow-2xl cursor-pointer bg-forest/20 aspect-[4/3] md:aspect-[3/2] lg:aspect-auto"
            >
              <img 
                src="/location-map.png" 
                alt="Novel Organic Farms Location Map" 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              
              {/* Premium Overlay on Hover */}
              <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-forest/90 border border-champagne/40 text-champagne px-6 py-3 rounded-full font-display text-sm font-semibold tracking-wider flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-luxe">
                  <Icon name="ArrowUpRight" className="h-4 w-4" />
                  View High-Res Map
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-cream/50 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-pulse" />
              Click the map to view in full screen
            </p>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isMapOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setIsMapOpen(false)}
        >
          <div 
            className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-2xl border border-champagne/30 bg-forest/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMapOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-forest/80 border border-champagne/30 p-2 text-cream hover:bg-champagne hover:text-forest transition-colors shadow-lg"
            >
              <Icon name="X" className="h-6 w-6" />
            </button>
            <img
              src="/location-map.png"
              alt="Novel Organic Farms Location Map"
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
