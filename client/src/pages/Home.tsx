import Auth from '../components/auth/Auth'
import Hero from '../components/hero/Hero'
import Highlights from '../components/highlights/Highlights'
import Carousel from '../components/home_carousel/home_Carousel'
import Products from '../components/products/Products'

const Home = () => {
  return (
  <>
   <Hero/>
   <Highlights/>
   <Products/>
   <Carousel/>
   <Auth/>
  </>
  )
}

export default Home
