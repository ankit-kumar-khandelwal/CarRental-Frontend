import React, { Component } from 'react'
import Description from '../about-us/description'
import TripLocation from '../about-us/tripLocation'
import FeatureCards from '../about-us/featureCards'
import PromotionalCards from '../about-us/promotionalCards'
import HeroSection from '../about-us/heroSection'

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