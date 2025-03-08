import React, { Component } from 'react'
import Description from '../pagesdirectory/about-us/description'
import TripLocation from '../pagesdirectory/about-us/tripLocation'
import FeatureCards from '../pagesdirectory/about-us/featureCards'
import PromotionalCards from '../pagesdirectory/about-us/promotionalCards'
import HeroSection from '../pagesdirectory/about-us/heroSection'

export class About extends Component {
  render() {
    return (
      <div>
        <HeroSection/>
        <Description/>
        <TripLocation/>
        <FeatureCards/>
        <PromotionalCards/>
      
      </div>
    )
  }
}

export default About