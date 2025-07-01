import React from 'react'
import HeroBanner from './HeroBanner'
import Quotes from './Quotes'
import PricingSection from './PricingSection'
import FaqSection from './FaqSection'
const BusinessIntelligence = () => {
  return (
    <div>
      <HeroBanner/>
      <PricingSection/>
      <Quotes/>
      <div className="w-full bg-white">
      <FaqSection/>
      </div>
    </div>
  )
}

export default BusinessIntelligence;
