import React, {useState} from 'react'
import Hero from '../Components/Hero/IndexHero';
import Sidebar from '../Components/Sidebar/IndexSide'
import Footer from '../Components/Footer/IndexFooter'

const Contact = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen)
    };
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Hero />
            <Footer />
        </div>
    )
}

export default Contact