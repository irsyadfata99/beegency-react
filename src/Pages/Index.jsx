import React, {useState} from 'react'
import Hero from '../Components/Hero/IndexHero'
import Sidebar from '../Components/Sidebar/IndexSide'
import Footer from '../Components/Footer/IndexFooter'
import Feature from '../Components/Feature/IndexFeature'
import AboutUs from '../Components/AboutUs/AboutUs'
import AboutUsTwo from '../Components/AboutUsTwo/AboutUsTwo'
import AboutUsThree from '../Components/AboutUsThree/AboutUsThree'
import { homeObjOne } from '../Components/AboutUs/Data'
import { homeObjTwo } from '../Components/AboutUsTwo/DataTwo'
import { homeObjThree } from '../Components/AboutUsThree/DataThree'


const Home = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Hero />
            <Feature />
            <AboutUs {...homeObjOne}/>
            <AboutUsTwo {...homeObjTwo}/>
            <AboutUsThree {...homeObjThree}/>
            <Footer {...homeObjTwo}/>
        </>
    )
}

export default Home
