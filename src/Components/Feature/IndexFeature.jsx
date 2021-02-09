import React from 'react'
import Icon1 from '../../Images/react.svg'
import Icon2 from '../../Images/laravel.svg'
import Icon3 from '../../Images/logo.svg'
import Icon4 from '../../Images/vector.svg'
import {FeatureContainter, 
    FeatureCard, 
    FeatureWrapper, 
    FeatureH2, 
    FeatureIcon,
    FeatureP1, 
    FeatureH1
} from './FeatureElement'
const Feature = () => {
    return (
        <FeatureContainter id="Feature">
            <FeatureH1>Why us ?</FeatureH1>
            <FeatureWrapper>
                <FeatureCard>
                    <FeatureIcon src={Icon1} />
                    <FeatureH2>Website Builder</FeatureH2>
                    <FeatureP1>Create your own website including domain and hosting</FeatureP1>
                </FeatureCard>
                <FeatureCard>
                    <FeatureIcon src={Icon2} />
                    <FeatureH2>Web Base Application</FeatureH2>
                    <FeatureP1>Create costum program for your daily needs</FeatureP1>
                </FeatureCard>
                <FeatureCard>
                    <FeatureIcon src={Icon3} />
                    <FeatureH2>Costum Logo</FeatureH2>
                    <FeatureP1>Create a costum logo for own product</FeatureP1>
                </FeatureCard>
                <FeatureCard>
                    <FeatureIcon src={Icon4} />
                    <FeatureH2>Costum Vector</FeatureH2>
                    <FeatureP1>Create a costum vector for your profile</FeatureP1>
                </FeatureCard>
            </FeatureWrapper>
        </FeatureContainter>
    )
}

export default Feature
