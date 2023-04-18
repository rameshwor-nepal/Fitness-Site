
import './App.css'
import Hero from './component/Hero/Hero'
import Program from './component/Programs/Program'
import Reason from './component/Reasons/Reason'
import Plan from './component/Plan/Plan'
import Testimonial from './component/Testimonials/Testimonial'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plan />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App
