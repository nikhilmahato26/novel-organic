import {
  MapPin, Home, Leaf, TrendingUp, Plane, BadgeCheck, Route, GraduationCap,
  ShieldCheck, Waves, Wheat, Bike, CircleDot, Trees, Flame, Play, Star,
  Phone, Mail, MessageSquare, ArrowRight, ArrowUpRight, ChevronDown, Menu, X,
  Train, Building2, Clock, Sparkles, Quote,
} from 'lucide-react'

const map = {
  MapPin, Home, Leaf, TrendingUp, Plane, BadgeCheck, Route, GraduationCap,
  ShieldCheck, Waves, Wheat, Bike, CircleDot, Trees, Flame, Play, Star,
  Phone, Mail, MessageSquare, ArrowRight, ArrowUpRight, ChevronDown, Menu, X,
  Train, Building2, Clock, Sparkles, Quote,
}

export default function Icon({ name, className = '', ...props }) {
  const Cmp = map[name] || Leaf
  return <Cmp className={className} {...props} />
}
