import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/IndexSide'
import Company from '../Components/Company/Index'
import { profileData } from '../Components/Company/DataComp';
import Footer from '../Components/Footer/IndexFooter'
import HeroCompany from '../Components/HeroCompany/HeroCompany';

const Profile = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen)
    };

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroCompany />
            <Company heading='Meet The Team' data={profileData}/>
            <Footer />
        </div>
    )
}

export default Profile