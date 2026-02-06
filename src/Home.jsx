import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import FeatureSection from './Components/FeatureSection';
import IntegrationSection from './Components/Integration';
import FeatureShowcase from './Components/FeatureShowCase';
import ImageShowcase from './Components/ImageShowcase';
const Home = ()=>{
    return(
        <div className='min-h-screen bg-[#121212]'>
        <Navbar/>
        <Hero/>
        <FeatureSection/>
        <IntegrationSection/>
        <FeatureShowcase/>
        <ImageShowcase/>
        </div>
    )
}
export default Home;