import React, {useState} from 'react'
import Footer from '../Components/Footer/IndexFooter';
import Hero from '../Components/Hero/IndexHero';
import Sidebar from '../Components/Sidebar/IndexSide'

const Product = () => {
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

export default Product