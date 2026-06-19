import { motion } from 'framer-motion'
import { aboutProject } from '../../data/site'
import { fadeUp, slideFromLeft, slideFromRight, stagger, viewport } from '../../utils/motion'

const VIDEO_URL =
  'https://novelorganic.com/wp-content/uploads/2025/11/FOR-WEBSITE.mp4'

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 lg:py-32">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
        {/* Imagery */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-luxe bg-stone/5 aspect-[4/3] md:aspect-auto md:h-[34rem]">
            <video
              src={VIDEO_URL}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
          <div className="absolute -left-5 -top-5 hidden h-24 w-24 rounded-full border border-champagne/40 lg:block" />
        </motion.div>

        {/* Content */}
        <motion.div variants={slideFromRight} initial="hidden" whileInView="show" viewport={viewport}>
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-champagne" />
            {aboutProject.eyebrow}
          </span>
          <h2 className="heading-xl mt-3 text-4xl text-forest md:text-5xl lg:text-[3.2rem]">
            {aboutProject.title}
          </h2>
          {aboutProject.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-lg leading-relaxed text-stone">
              {p}
            </p>
          ))}

          <motion.div
            variants={stagger(0.2, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-10 grid grid-cols-3 gap-6 border-t border-forest/10 pt-8"
          >
            {aboutProject.stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="font-display text-3xl font-semibold text-olive md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-stone">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
