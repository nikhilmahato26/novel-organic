import { motion } from 'framer-motion'
import { contact } from '../../data/site'
import { fadeUp, slideFromLeft, slideFromRight, viewport } from '../../utils/motion'
import Icon from '../common/Icon'

export default function MapSection() {
  return (
    <section id="contact" className="relative bg-cream py-24 lg:py-32">
      <div className="container-luxe grid items-stretch gap-10 lg:grid-cols-[1fr_1.4fr]">
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col justify-center rounded-[2rem] bg-forest p-10 text-cream"
        >
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-champagne" />
            Visit Us
          </span>
          <h2 className="heading-xl mt-2 text-4xl">Find Our Office</h2>

          <div className="mt-8 flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-champagne/15">
              <Icon name="Building2" className="h-6 w-6 text-champagne" />
            </span>
            <div>
              <p className="font-display text-xl font-semibold">{contact.company}</p>
              <p className="mt-1 leading-relaxed text-cream/75">{contact.address.join(', ')}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-2xl glass p-5">
            <div className="text-champagne">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className="text-xl">{s}</span>
              ))}
            </div>
            <div>
              <p className="font-display text-2xl font-semibold">{contact.rating}</p>
              <p className="text-xs uppercase tracking-wider text-cream/60">{contact.reviews}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="min-h-[24rem] overflow-hidden rounded-[2rem] shadow-luxe"
        >
          <iframe
            title="Newcastle Infratech Location"
            src={contact.mapEmbed}
            className="h-full min-h-[24rem] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}
