import React from 'react'
import Hero from '../components/Hero'
import HeroBadge from '../components/HeroBadge'
import About from '../components/About'
import FeaturedServices from '../components/FeaturedServices'
import WhyChooseUs from '../components/WhyChooseUs'
import ServicesSection from '../components/ServiceSection'
import HowItWorks from '../components/HowItWork'
import EstimateSection from '../components/EstimatedSection'
import ServiceAreas from '../components/ServiceArea'

const Home = () => {
  return (
    <>
    <Hero/>
    <HeroBadge/>
    <About/>
    <FeaturedServices/>
    <WhyChooseUs/>
    <ServicesSection/>
    <HowItWorks/>
    <ServiceAreas/>
    <EstimateSection/>
    </>
  )
}

export default Home