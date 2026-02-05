import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import FeatureSection from './Components/FeatureSection';
import IntegrationSection from './Components/Integration';
import FeatureShowcase from './Components/FeatureShowCase';
const Home = ()=>{
    return(
        <div className='min-h-screen bg-black'>
        <Navbar/>
        <Hero/>
        <FeatureSection/>
        <IntegrationSection/>
        <FeatureShowcase/>
        </div>
    )
}
export default Home;