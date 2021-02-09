import styled from 'styled-components'

export const FeatureContainter =styled.div`
    height: 425px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fbf421;

    @media screen and (max-width: 1000px) {
        height: 300px;
    }

    @media screen and (max-width: 768px) {
        height: 800px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const FeatureWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: left;
    grid-gap: 20px;
    padding: 0 auto;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 10px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 10px;
    }
`

export const FeatureCard =  styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const FeatureIcon = styled.img`
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
`

export const FeatureH1 = styled.h1`
    font-size: 2rem;
    color: #000;
    margin-bottom: 13px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const FeatureH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const FeatureP1 = styled.p`
    font-size: 1rem;
    text-align: center;
`