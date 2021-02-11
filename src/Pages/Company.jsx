import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/IndexSide'
import AboutCompany from '../Components/AboutCompany/AboutCompany'
import { homeObjOne } from '../Components/AboutCompany/DataComp';
import Company from '../Components/Company/Index'
import { profileData } from '../Components/Company/DataComp';
import Footer from '../Components/Footer/IndexFooter'

const Profile = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen)
    };
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <AboutCompany {...homeObjOne}/>
            <Company heading='Meet The Team' data={profileData}/>
            <Footer />
        </div>
    )
}

export default Profile