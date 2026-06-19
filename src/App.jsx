import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Loader from './components/common/Loader'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}
