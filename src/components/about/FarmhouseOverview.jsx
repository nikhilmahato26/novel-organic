import { useState } from 'react'
import { motion } from 'framer-motion'
import { farmhouseOverview } from '../../data/site'
import { slideFromLeft, slideFromRight, viewport } from '../../utils/motion'
import Icon from '../common/Icon'

export default function FarmhouseOverview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative bg-[#11291F] py-24 text-cream lg:py-32 overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-forest/20 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-olive/10 blur-3xl pointer-events-none" />

      <div className="container-luxe relative">
        <div className="grid gap-14 lg:grid-cols-12 items-center">
          {/* Content Column */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <span className="eyebrow mb-4">
              <span className="h-px w-8 bg-champagne" />
              {farmhouseOverview.eyebrow}
            </span>
            <h2 className="heading-xl mt-3 text-4xl md:text-5xl lg:text-[3.2rem] leading-tight text-cream">
              {farmhouseOverview.title}
            </h2>
            {farmhouseOverview.paragraphs.map((p, i) => (
              <p key={i} className="mt-6 text-lg leading-relaxed text-cream/85">
                {p}
              </p>
            ))}
            <a href="#contact" className="btn-gold mt-9">
              Reserve Your Plot
            </a>
          </motion.div>

          {/* Masterplan Visual Column */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-7 flex flex-col items-center"
          >
            <div 
              onClick={() => setIsOpen(true)}
              className="group relative w-full overflow-hidden rounded-[2rem] border-2 border-champagne/20 shadow-2xl cursor-pointer bg-forest/40 aspect-[4/3] md:aspect-[3/2] lg:aspect-auto"
            >
              <img 
                src="/masterplan.jpg" 
                alt="Novel Organic Farms Masterplan Layout" 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-forest/90 border border-champagne/40 text-champagne px-6 py-3 rounded-full font-display text-sm font-semibold tracking-wider flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-luxe">
                  <Icon name="ArrowUpRight" className="h-4 w-4" />
                  View Layout Details
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-cream/50 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-pulse" />
              Click the layout to inspect plot masterplan
            </p>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-2xl border border-champagne/30 bg-forest/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-forest/80 border border-champagne/30 p-2 text-cream hover:bg-champagne hover:text-forest transition-colors shadow-lg"
            >
              <Icon name="X" className="h-6 w-6" />
            </button>
            <img
              src="/masterplan.jpg"
              alt="Novel Organic Farms Masterplan Layout"
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
