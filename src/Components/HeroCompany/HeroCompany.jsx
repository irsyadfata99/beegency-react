import React, {useState} from 'react'
import Navbar from '../Navbar/IndexNav'
import Sidebar from '../Sidebar/IndexSide'
import {
    HeroContainer, 
    AboutWrapper,
    AboutRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Column2,
    ImgWrap,
    Img
} from './HeroCompanyElement'

const Hero = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

    return (
        <HeroContainer>
        <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <AboutWrapper>
                    <AboutRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>Beegency</TopLine>
                            <Heading>Know About Our Company</Heading>
                            <Subtitle>Get to know about Our company</Subtitle>
                            <Subtitle></Subtitle>
                            <Subtitle></Subtitle>
                            {/* <BtnWrap>
                                <Button to="/CompanyProfile">{buttonLabel}</Button>
                            </BtnWrap> */}
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img/>
                        </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
        </HeroContainer>
    )
}

export default Hero
