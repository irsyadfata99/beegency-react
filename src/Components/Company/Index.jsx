
import React from 'react'
import {
    CompanyContainer,
    CompanyH1,
    CompanyWrapper,
    CompanyCard,
    CompanyIMG,
    CompanyProfile,
    CompanyH2,
    CompanyP,
} from './CompanyElement'

const company = ({heading, data}) => {
    return (
        <>
         <CompanyContainer>
             <CompanyH1>{heading}</CompanyH1>
             <CompanyWrapper>
                 {data.map((product, index) => {
                     return (
                        <CompanyCard key={index}>
                        <CompanyIMG src={product.background} alt={product.alt}/>
                        <CompanyProfile src={product.img} alt={product.alt}/>
                        <CompanyH2>{product.name}</CompanyH2>
                        <CompanyP>{product.job}</CompanyP>
                    </CompanyCard>
                     )
                 })}
             </CompanyWrapper>
             </CompanyContainer>   
        </>
    )
}

export default company
