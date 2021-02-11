import styled from 'styled-components'

export const CompanyContainer = styled.div`
    background: #f4fb21;
    background: linear-gradient(to right, #f4fb21, #f6ff00);
    padding: 5rem calc((100vw - 1300px) /2);
    width: 100%;
    min-height: 80vh;
`

export const CompanyH1 = styled.h1`
    text-transform: uppercase;
    font-size: 2.5rem;
    letter-spacing: 3px;
    margin-top: 1rem;
    margin-right: -3px;
    margin-bottom: 3rem;
    text-align: center;
    color: #333;
    position: relative;
`

export const CompanyWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 100px;
    padding: 0 0px;
`

export const CompanyCard = styled.div`
    width: 21%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    margin: auto;
    box shadow: .5rem .5rem 3rem rgba(0, 0, 0, 0.2);
`

export const CompanyIMG = styled.img`
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-radius: 25px 25px 0px 0px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
`

export const CompanyProfile = styled.img`
    width: 11rem;
    height: 11rem;
    object-fit: cover;
    border-radius: 50%;
    margin-top: -9rem;
    z-index: 1;
    border: 1rem solid #ebeef8; 
`

export const CompanyH2 = styled.h2`
    font-size: 1rem;
    color: #333;
    margin: 1.5rem 0;
`

export const CompanyP = styled.p`
    color: #777;
    font-size: 1rem;
    font-weight: 300;
    margin: 1rem 0; 
`

export const Medsos = styled.div`
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0;
    margin-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, .1);
`

export const SocialIconLink = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`



