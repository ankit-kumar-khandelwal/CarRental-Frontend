import React, { Component } from 'react'

import CarBookingTable from '../rate-list/carBookingTable'
import PromotionalCards from '../about-us/promotionalCards'

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