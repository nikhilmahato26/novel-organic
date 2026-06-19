import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import WhyChoose from '../components/highlights/WhyChoose'
import Newcastle from '../components/about/Newcastle'
import Location from '../components/location/Location'
import Investment from '../components/highlights/Investment'
import FarmhouseOverview from '../components/about/FarmhouseOverview'
import Amenities from '../components/amenities/Amenities'
import VideoShowcase from '../components/videos/VideoShowcase'
import Gallery from '../components/gallery/Gallery'
import Faq from '../components/faq/Faq'
import ScheduleVisit from '../components/forms/ScheduleVisit'
import MapSection from '../components/location/MapSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyChoose />
      <Newcastle />
      <Location />
      <Investment />
      <FarmhouseOverview />
      <Amenities />
      <VideoShowcase />
      {/* <Gallery /> */}
      <Faq />
      <ScheduleVisit />
      <MapSection />
    </main>
  )
}
