import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { brand, contact, navLinks } from '../../data/site'
import Icon from '../common/Icon'

const socials = [
  { Cmp: FaInstagram, href: '#' },
  { Cmp: FaFacebookF, href: '#' },
  { Cmp: FaLinkedinIn, href: '#' },
  { Cmp: FaWhatsapp, href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-olive/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-champagne/10 blur-3xl" />

      <div className="container-luxe relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-champagne/60">
              <Icon name="Leaf" className="h-5 w-5 text-champagne" />
            </span>
            <span className="font-display text-2xl font-semibold">{brand.name}</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            A luxury eco-farmhouse estate where modern comforts meet the serenity of nature.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-champagne">
            Powered By {brand.poweredBy}
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-champagne">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-cream/70 transition-colors hover:text-champagne">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-champagne">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-3">
              <Icon name="Building2" className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
              <span>
                {contact.company}
                <br />
                {contact.address.join(', ')}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="Star" className="h-4 w-4 shrink-0 text-champagne" />
              <span>
                {contact.rating} ★ — {contact.reviews}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-champagne">Legal & Social</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="#" className="text-cream/70 transition-colors hover:text-champagne">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-cream/70 transition-colors hover:text-champagne">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {socials.map(({ Cmp, href }, i) => (
              <a
                key={i}
                href={href}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-all hover:border-champagne hover:bg-champagne hover:text-forest"
              >
                <Cmp className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>Powered By {brand.poweredBy}</p>
        </div>
      </div>
    </footer>
  )
}
