import React, { Component } from 'react'
import CarBookingTable from '../pagesdirectory/rate-list/carBookingTable'
import PromotionalCards from '../pagesdirectory/about-us/promotionalCards'

export class RateList extends Component {
  render() {
    return (
      <div>
        
        <CarBookingTable/>
        <PromotionalCards/>
        
      </div>
    )
  }
}

export default RateList