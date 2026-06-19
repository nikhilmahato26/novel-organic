import { motion } from 'framer-motion'
import Icon from './Icon'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.6 }}
      className="fixed inset-0 z-[200] grid place-items-center bg-forest"
      style={{ pointerEvents: 'none' }}
    >
      <div className="text-center">
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-champagne/40"
        >
          <Icon name="Leaf" className="h-9 w-9 text-champagne" />
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-5 font-display text-2xl text-cream"
        >
          Novel Organic Farms
        </motion.p>
        <div className="mx-auto mt-4 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="h-full w-full bg-gold-grad"
          />
        </div>
      </div>
    </motion.div>
  )
}
