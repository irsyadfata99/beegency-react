import React, {useState} from 'react'
import Navbar from '../Navbar/IndexNav'
import Sidebar from '../Sidebar/IndexSide'
import {
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP, 
    HeroBtn
} from './HeroElement'

const Hero = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Help your IT needs</HeroH1>
                    <HeroP>We can help you with your website service, or building a cashier app, 
                        creating logo or product brand</HeroP>
                    <HeroBtn>Get Started</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
